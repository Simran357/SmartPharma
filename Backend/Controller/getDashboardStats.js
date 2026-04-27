const StockModel = require("../model/Stock.model");

const getDashboardStats = async (req, res) => {
    try {
        const userId = req?.user?.id;
        // console.log("REQ USER:", req.user);
        const stocks = await StockModel.find({ userId });

        // console.log("Stocks Length:", stocks.length);

        let totalStockValue = 0;
        let lowStock = 0;
        let nearExpiry = 0;
        let totalItems = 0;

        const today = new Date();

        stocks.forEach((stock) => {
            stock.items.forEach((item) => {
                totalItems++;

                const qty = Number(item.qty) || 0;
                const rate = Number(item.rate) || 0;

                // ✅ TOTAL VALUE
                totalStockValue += qty * rate;

                // ✅ LOW STOCK
                if (qty > 0 && qty < 10) {
                    lowStock++;
                }

                // ✅ NEAR EXPIRY
                if (item.expiry && !isNaN(new Date(item.expiry))) {
                    const expiryDate = new Date(item.expiry);
                    const diffDays =
                        (expiryDate - today) / (1000 * 60 * 60 * 24);

                    if (diffDays <= 30 && diffDays >= 0) {
                        nearExpiry++;
                    }
                }
            });
        });

        res.status(200).json({
            success: true,
            data: {
                totalStockValue,
                lowStock,
                nearExpiry,
                totalItems,
            },
        });

    } catch (error) {
        console.log("Dashboard Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const inventaryImpulse = async (req, res) => {

    try {
        const userId = req.user.id;

        const stocks = await StockModel.find({ userId });

        let totalItems = 0;
        let inStock = 0;
        let lowStock = 0;
        let expiry30 = 0;
        let expiry90 = 0;

        const today = new Date();

        stocks.forEach(stock => {
            stock.items.forEach(item => {
                totalItems += 1;

                // STOCK STATUS
                if (item.qty > 10) {
                    inStock++;
                } else {
                    lowStock++;
                }

                // EXPIRY LOGIC
                const expiryDate = new Date(item.expiry);
                const diffDays = (expiryDate - today) / (1000 * 60 * 60 * 24);

                if (diffDays <= 30) {
                    expiry30++;
                } else if (diffDays <= 90) {
                    expiry90++;
                }
            });
        });

        res.json({
            success: true,
            data: {
                totalItems,
                inStockPercent: ((inStock / totalItems) * 100).toFixed(0),
                lowStockPercent: ((lowStock / totalItems) * 100).toFixed(0),
                expiry30,
                expiry90
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {getDashboardStats,inventaryImpulse}  