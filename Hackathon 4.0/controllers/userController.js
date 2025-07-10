// userController.js
const db = require("../config/db");

exports.getUserProfile = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM users WHERE id = ?";
  
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ msg: "Database error", error: err });
    if (result.length === 0) return res.status(404).json({ msg: "User not found" });

    res.status(200).json(result[0]);
  });
};
