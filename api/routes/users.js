const express = require("express");
const router = express();
const User = require("../models/users");


// var express = require('express')
var cors = require('cors')
// var app = express()
 
router.use(cors())
 
router.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
router.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

// user register
router.post("/register", async (req, res) => {
    const user = await User({
        email: req.body.email,
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
    User.findOne({email: req.body.email}).then((user) => {
    if(!user) {
    res.status(401).json({
        message: "User not found.",
    });
  } else {
      if(user.validatePassword(req.body.password)) {
          res.status(200).json(user)
      } else {
          res.status(401).json({
              message: "The email/password is incorrect!"
          })
      }
  }

}).catch((err) => {
    console.error(err);
    res.status(500);
  });
});

module.exports = router;