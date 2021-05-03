const User = require("../models/user");

const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const { email } = req.body;
  User.findOne({
    email,
  }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        success: "false",
        error: "Email Aready Exists!",
      });
    }

    const requestUser = new User(req.body);
    const token = jwt.sign(
      {
        _id: requestUser._id,
      },
      process.env.SECRET
    );

    //put token in cookie
    res.cookie("token", token, {
      expire: new Date() + 9999,
    });

    requestUser.save((err, user) => {
      if (err) {
        return res.status(400).json({
          err: "NOT able to save User in DB",
        });
      }
      res.json({
        token: token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne(
    {
      email,
    },
    (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "USER email does not exists",
        });
      }

      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          const token = jwt.sign(
            {
              _id: user._id,
            },
            process.env.SECRET
          );
          res.cookie("token", token, {
            expire: new Date() + 9999,
          });

          const { _id, name, email } = user;
          return res.json({
            token,
            user: {
              _id,
              name,
              email,
            },
          });
        } else {
          return res.status(401).json({
            error: "Email and Password do not match",
          });
        }
      });
    }
  );
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User SignOut Successfully!",
  });
};
