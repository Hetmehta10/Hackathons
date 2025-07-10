const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.registerUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ msg: "All fields required" });

  User.create(username, password, (err, result) => {
    if (err) return res.status(500).json({ msg: "Database error", error: err });
    res.status(201).json({ msg: "User registered successfully", userId: result.insertId });
  });
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ msg: "All fields required" });

  User.findByUsername(username, (err, results) => {
    if (err) return res.status(500).json({ msg: "Database error", error: err });
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ msg: "Login successful", token });
  });
};
