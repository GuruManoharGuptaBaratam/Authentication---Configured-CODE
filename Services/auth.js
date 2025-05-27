const jwt = require("jsonwebtoken");
require("dotenv").config(); // Ensure .env is loaded

const Special_Key = process.env.KEY;

function setUser(user) {
  const payload = {
    username: user.username,
    email: user.email,
  };
  return jwt.sign(payload, Special_Key);
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, Special_Key);
  } catch (err) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
