
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const users = [];

// User registration
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required.",
      });
    }

    const existingUser = users.find(
      (user) => user.username === username
    );

    if (existingUser) {
      return res.status(409).json({
        message: "Username already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now().toString(),
      username,
      password: hashedPassword,
    };

    users.push(newUser);

    res.status(201).json({
      message: "Registration successful.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed.",
    });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find(
      (user) => user.username === username
    );

    if (!user) {
      return res.status(401).json({
        message: "Invalid username or password.",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid username or password.",
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful.",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed.",
    });
  }
});

// Protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "You accessed the protected route successfully.",
    user: req.user,
  });
});

module.exports = router;
