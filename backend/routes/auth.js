const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

const JWT_SECRET = "venisha-jwt-secret";

//Route 1 : Create User using: POST "/api/auth/createUser" No login required
router.post(
  "/createuser",
  [
    check("name", "Enter Valid Name").isLength({ min: 3 }),
    check("email", "Enter Valid Email").isEmail(),
    check("password", "Enter Valid password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return BAd request and the errrors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    // Check whether the user with this email exists already
    try {
      let user = await User.findOne({success,email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({success, errors: "Sorry User with this email already exists." });
      }
      const salt = await bcrypt.genSalt(10); //generate a salt
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authtoken });
      // res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Route 2 : Authenticate User using: POST "/api/auth/login" No login required
router.post(
  "/login",
  [
    check("email", "Enter Valid Email").isEmail(),
    check("password", "Password cannot be Blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Try to Login with Correct Credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Try to Login with Correct Credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken,success: true  });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3 Get Loggedin User details : POST "/api/auth/getuser" &&  here login required
router.post('/getuser', fetchUser,  async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router;
