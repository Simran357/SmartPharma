exports.getBatches = (req, res) => {
     console.log("API HIT"); // 
  const batches = [
    {
      id: "",
      entryDate: "",
      price: "",
      expiry: "",
      stock: "",
      location: "",
      status: "",
    },
  ];

  res.json(batches);
};