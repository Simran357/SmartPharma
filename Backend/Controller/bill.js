const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const stripePayment = async (req, res, next) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    // ✅ Safe destructuring
    const { amount, orderData } = req.body;

    if (!amount || !orderData) {
      return res.status(400).json({
        error: "Amount and orderData are required",
      });
    }

    // ✅ Extract wholesalerId safely
    const wholesalerId = orderData?.wholesalerId || "unknown";

    // ✅ Create Stripe customer (optional but good)
    const customer = await stripe.customers.create({
      metadata: {
        wholesalerId: wholesalerId,
      },
      email: orderData?.customer?.email,
      name: orderData?.customer?.name || "Customer",
    });

    // ✅ Create Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      customer: customer.id,

      billing_address_collection: "required",

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "SmartPharm Order Payment",
            },
            unit_amount: Math.round(amount * 100), // ₹ → paise
          },
          quantity: 1,
        },
      ],

      // ✅ IMPORTANT FIX (NO NESTED ROUTE)
      success_url: "http://localhost:5173/OrderSuccess",
      cancel_url: "http://localhost:5173/Cart",

      // ✅ Optional (useful later)
      metadata: {
        orderId: orderData.id.toString(),
        wholesalerId: wholesalerId,
      },
    });

    return res.status(200).json({
      url: session.url,
      sessionId: session.id,
    });

  } catch (error) {
    console.log("Stripe Error:", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};
module.exports = { stripePayment };