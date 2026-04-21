const Tesseract = require("tesseract.js");

// ---------------- NORMALIZE ----------------
const normalize = (text) => {
  return text
    .replace(/\r/g, "")
    .replace(/[^\x00-\x7F]/g, "")
    .replace(/\t/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();
};

// ---------------- HEADER ----------------
const extractHeader = (text) => {
  const gstin =
    text.match(/\d{2}[A-Z]{5}\d{4}[A-Z][A-Z0-9]Z[A-Z0-9]/)?.[0] || null;

  const invoiceNumber =
    text.match(/(Invoice|Bill)\s*No\.?\s*[:\-]?\s*([A-Z0-9\-]+)/i)?.[2] ||
    text.match(/\bA0\d+\b/)?.[0] ||
    null;

  const date =
    text.match(/\b\d{2}[\/\-]\d{2}[\/\-]\d{2,4}\b/)?.[0] || null;

  const supplierName =
    text.split("\n").find(l =>
      /^[A-Z\s.&]{5,}$/.test(l) &&
      !/(INVOICE|GST|PHONE|EMAIL)/i.test(l)
    ) || "UNKNOWN";

  return { supplierName, gstin, invoiceNumber, date };
};

// ---------------- CLEAN ROW ----------------
const cleanRow = (row) => {
  return row
    .replace(/[^\w\s.\-\/]/g, " ")
    .replace(/\b(on|ll|yy|idler|Ero|lob)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
};

// ---------------- MERGE BROKEN LINES ----------------
const mergeBrokenLines = (lines) => {
  const merged = [];

  for (let i = 0; i < lines.length; i++) {
    let current = lines[i];

    if (current.split(" ").length <= 2 && i + 1 < lines.length) {
      current = current + " " + lines[i + 1];
      i++;
    }

    merged.push(current);
  }

  return merged;
};

// ---------------- PRODUCT DETECTION ----------------
const looksLikeProduct = (line) => {
  return (
    /\d+\.\d{2}/.test(line) && // amount
    (
      /\b\d{6,8}\b/.test(line) || // HSN
      /\b(CAP|TAB|SYRUP|DROP|INJ|SG)\b/i.test(line)
    )
  );
};

// ---------------- BUILD ROWS ----------------
const buildRows = (lines) => {
  const rows = [];
  let buffer = "";

  for (let line of lines) {
    if (!looksLikeProduct(line)) continue;

    if (
      /^\d+\s*\|/.test(line) ||
      /\b(CAP|TAB|SYRUP|DROP|INJ|SG)\b/i.test(line)
    ) {
      if (buffer) rows.push(buffer.trim());
      buffer = line;
    } else {
      buffer += " " + line;
    }

    if (/\d+\.\d{2}/.test(line)) {
      rows.push(buffer.trim());
      buffer = "";
    }
  }

  if (buffer) rows.push(buffer.trim());

  return rows;
};

// ---------------- SPLIT MULTI PRODUCTS ----------------
const splitRows = (rows) => {
  const result = [];

  for (let row of rows) {
    const parts = row.split(
      /(?=\d+\s*\||\b[A-Z]{3,}\s+(CAP|TAB|SG|SYRUP))/gi
    );

    parts.forEach(p => {
      if (p.trim().length > 8) {
        result.push(p.trim());
      }
    });
  }

  return result;
};

// ---------------- PARSE ROW ----------------
const parseRow = (row) => {
  row = cleanRow(row);

  const numbers = row.match(/\d+(\.\d+)?/g) || [];
  const decimals = numbers.filter(n => n.includes("."));

  if (decimals.length === 0) return null;

  const amount = Number(decimals[decimals.length - 1]) || 0;
  const rate = Number(decimals[decimals.length - 2]) || 0;

  const mrp =
    Number(row.match(/MRP\s*[:\-]?\s*(\d+\.\d{2})/i)?.[1]) ||
    (decimals.length >= 3 ? Number(decimals[0]) : null);

  const hsn =
    numbers.find(n => n.length >= 6 && n.length <= 8) || null;

  const qty =
    Number(
      numbers.find(n =>
        Number(n) > 0 &&
        Number(n) <= 500 &&
        n !== hsn &&
        !n.includes(".")
      )
    ) || 1;

  const batch =
    row.match(/BATCH\s*[:\-]?\s*([A-Z0-9\-\/]+)/i)?.[1] ||
    (row.match(/\b[A-Z]{2,}\d{2,}\b/g) || []).find(
      b => !/\d{6,8}/.test(b)
    ) ||
    null;

  const expiry =
    row.match(/\b(0?[1-9]|1[0-2])[\/\-]\d{2,4}\b/)?.[0] ||
    row.match(/\b20\d{2}\b/)?.[0] ||
    null;

  let name = row
    .replace(/^\d+\s*\|/, "")
    .replace(/\b\d{6,8}\b/g, "")
    .replace(/\d+\.\d+/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (name.length < 3) return null;

  return { name, hsn, batch, expiry, mrp, qty, rate, amount };
};

// ---------------- TABLE ----------------
const extractTableRows = (text) => {
  let lines = text
    .split("\n")
    .map(l => l.trim())
    .filter(l => l.length > 3);

  console.log("RAW:", lines);

  lines = mergeBrokenLines(lines);
  lines = lines.filter(looksLikeProduct);

  console.log("FILTERED:", lines);

  let rows = buildRows(lines);
  rows = splitRows(rows);

  console.log("FINAL ROWS:", rows);

  const items = [];

  for (let row of rows) {
    const parsed = parseRow(row);
    if (parsed) items.push(parsed);
  }

  return items;
};

// ---------------- CONTROLLER ----------------
const aiOCRController = async (req, res) => {
  try {
    const file = req?.file;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const base64Image = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

    const result = await Tesseract.recognize(base64Image, "eng", {
      tessedit_pageseg_mode: 6,
    });

    let rawText = normalize(result?.data?.text || "");

    const header = extractHeader(rawText);
    const tableRows = extractTableRows(rawText);

    return res.json({
      success: true,
      parsedData: header,
      tableRows,
      rawText,
      imageUrl: base64Image,
    });

  } catch (error) {
    console.error("OCR ERROR:", error);

    return res.status(500).json({
      error: "OCR failed",
      message: error.message,
    });
  }
};

module.exports = aiOCRController;