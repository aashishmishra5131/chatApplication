const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, `123456789asdfgh`, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
