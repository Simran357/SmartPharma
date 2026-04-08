const Joi = require("joi");

const StockValidation = Joi.object({
  supplierName: Joi.string().required(),

  invoiceNumber: Joi.string().required(),

  date: Joi.date().allow(null, ""),

  poRef: Joi.string().allow("", null),

  gstin: Joi.string().allow("", null),
  dlNo: Joi.string().allow("", null),
  phone: Joi.string().allow("", null),
  address: Joi.string().allow("", null),

  dueDate: Joi.date().allow(null, ""),

  // ✅ ITEMS (simple)
  items: Joi.array().items(
    Joi.object({
      id: Joi.string().optional(),
      name: Joi.string().required(),
      hsn: Joi.string().allow("", null),
      batch: Joi.string().allow("", null),
      pack: Joi.string().allow("", null),

      qty: Joi.number().required(),
      rate: Joi.number().required(),
      mrp: Joi.number().allow(null),

      gst: Joi.number().allow(null),

      amount: Joi.number().required(),

      expiry: Joi.date().allow(null, ""),
    })
  ).min(1).required(),

  // ✅ TOTALS (same as frontend)
  totals: Joi.object({
    subTotal: Joi.number().required(),
    gst: Joi.number().required(),
    grandTotal: Joi.number().required(),
  }).required(),
});

module.exports = StockValidation;