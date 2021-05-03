var express = require("express");
var router = express();

//Import Controllers
const { getUserById, getUser, updateUser } = require("../controllers/user");

//Import Middlewares
const { isSignedIn, isAuthenticated } = require("../middlewares/auth");

//Params
router.param("userId", getUserById);

//Routes

//* Get User
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

//* Update User
router.put("/user/update:/userId", isSignedIn, isAuthenticated, updateUser);

module.exports = router;
