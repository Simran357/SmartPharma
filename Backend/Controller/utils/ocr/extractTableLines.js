const extractTableLines = (text) => {
  return text
    .split("\n")
    .map(l => l.replace(/\s+/g, " ").trim())
    .filter(l => l.length > 5)
    .filter(l =>
      /(CAP|TAB|SYP|INJ|DROP|PLUS|SG|TABLET|CAPSULE)/i.test(l) &&
      /\d/.test(l) &&
      !/(GSTIN|INVOICE|PHONE|ADDRESS|SUB TOTAL|ROUND|BANK|TERMS)/i.test(l)
    );
};

module.exports = extractTableLines;