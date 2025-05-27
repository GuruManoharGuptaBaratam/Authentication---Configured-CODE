const express = require("express");
const router = express.Router();
const USER = require('../Models/user');
const {setUser, getUser} = require("../Services/auth")
const cookie = require("cookieparser")
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await USER.create({
            username,
            email,
            password
        });

        console.log("User created:", user);

        res.render("Home", {
            username: user.username,
            email: user.email
        });
    } catch (err) {
        console.error("Error in signup:", err);
        res.status(500).send("Something went wrong 🚨");
    }
    
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const validate = await USER.findOne({ username, password });

  if (!validate) {
    return res.render("Login", {
      alert: "Wrong User details. Please login again.",
    });
  }

  const token = setUser(validate);


  res.cookie("Token", token, {
    httpOnly: true, // Protects from client-side JS access

  });

  res.render("Home", {
    username: validate.username,
    email: validate.email || "None",
  });
});

module.exports = router;
