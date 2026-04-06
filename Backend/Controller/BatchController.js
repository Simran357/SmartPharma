exports.getBatches = (req, res) => {
     console.log("API HIT"); // 👈 YAHAN lagao
  const batches = [
    {
      id: "DL2410",
      entryDate: "Sep 12, 2023",
      price: 18.4,
      expiry: "2026-03-01",
      stock: 158,
      location: "Rack A-4, Shelf 2",
      status: "ACTIVE",
    },
  ];

  res.json(batches);
};