const { default: userEvent } = require("@testing-library/user-event");
const express = require("express");
const router = express();
const User = require("../models/users");


// user register
router.post("/", async (req, res) => {
    const user = await User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//user login
router.post("/login", function (req, res) {
    User.findOne({username: req.body.username}).then((user) => {
    if(!user) {
    res.status(401).json({
        message: "User not found.",
    });
  } else {
      if(user.validatePassword(req.body.password)) {
          res.status(200).json(user)
      } else {
          res.status(401).json({
              message: "The username/password is incorrect!"
          })
      }
  }

}).catch((err) => {
    console.error(err);
    res.status(500);
  });
});

module.exports = router;