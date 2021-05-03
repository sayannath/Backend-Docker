const User = require("../models/user");

//Get User Id
exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    next();
  });
};

//Get a User
exports.getUser = (req, res) => {
  req.profile.password = undefined; //Password
  return res.json(req.profile);
};

//Update User
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.userId },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(500).json({
          error: "You are not authorized to update this user",
        });
      }
      user.password = undefined;
      res.json(user);
    }
  );
};
