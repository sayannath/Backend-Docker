var express = require("express");
var router = express();

//Import Controllers
const {
  getTodoById,
  createToDo,
  getToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todo");

//Import Middlewares
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../middlewares/auth");

//Params
router.param("userId", getUserById);
router.param("todoId", getTodoById);

//Routes

//* Create TODO
router.post("/todo/create", isSignedIn, createToDo);

//* Get TODO
router.get("/todo/:userId", isSignedIn, isAuthenticated, getToDo);

//* Update TODO
router.put(
  "/todo/update/:todoId/:userId",
  isSignedIn,
  isAuthenticated,
  updateToDo
);

//* Delete TODO
router.delete(
  "/todo/delete/:todoId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteToDo
);

module.exports = router;
