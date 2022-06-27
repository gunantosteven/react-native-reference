const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { use } = require("../routes/authRoutes");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === 'Bearer asdasfasf12f12f12fasfasf'

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in bro." });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in bro." });
    }

    const { userId } = payload;

    const user = await User.findById(userId);

    req.user = user;
    next();
  });
};
