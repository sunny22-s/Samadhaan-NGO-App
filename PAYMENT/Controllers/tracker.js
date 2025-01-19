const db = require("./../database");

exports.tracker = async (req, res) => {
  try {
    const query = "SELECT SUM(amount) AS totalAmount FROM donations";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send({error: "Internal Server Error"});
      }
      const totalAmount = parseInt(result[0].totalAmount) || 0;
      res.json({ totalAmount });
    });
  } catch (error) {
    console.error("Error:", error);
    alert("Request Failed");
    res.status(500).send({error: "Internal Server Error"});
  }
};

exports.trackDetails = async (req, res) => {
  try {
    const query = "SELECT * FROM donations ORDER BY donated_at DESC LIMIT 10";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).send({error: "Internal Server Error"});
      }
      res.json({ results });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({error: "Internal Server Error"});
  }
};