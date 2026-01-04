const pool = require("../database/index");

async function getClassification() {
  return await pool.query(
    "SELECT * FROM public.classification ORDER BY classification_name"
  );
}

async function getInventoryByClassificationId(classification_id) {
  try {
    const query = `SELECT * FROM public.inventory AS I
    INNER JOIN public.classification AS C
    ON i.classification_id = c.classification_id
    WHERE i.classification_id = $1`;

    const data = await pool.query(query, [classification_id]);
    return data.rows;
  } catch (error) {
    console.error("getclassificationsbyid error " + error);
  }
}

module.exports = { getClassification, getInventoryByClassificationId };
