const ToDo = require("../models/todo");

//Get TodoId
exports.getTodoById = (req, res, next, id) => {
  ToDo.findById(id).exec((err, todo) => {
    if (err || !todo) {
      return res.status(400).json({
        error: "No todo was found in DB",
      });
    }
    req.profile = todo;
    next();
  });
};

//Create Todo
exports.createToDo = (req, res) => {
  const todo = new ToDo(req.body);
  todo.save((err, todo) => {
    if (err) {
      return res.status(400).json({
        success: "false",
        error: "Not able to save ToDo in DB",
      });
    }
    return res.status(200).json({
      success: "true",
      data: {
        todo,
      },
    });
  });
};

//Get user Todo
exports.getToDo = (req, res) => {
  ToDo.find({ userDetails: req.params.userId }).exec((err, todo) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to fetch todo from DB",
      });
    }
    res.json({
      success: "true",
      result: todo.length,
      data: {
        todo,
      },
    });
  });
};

//Update Todo
exports.updateToDo = (req, res) => {
  ToDo.findByIdAndUpdate(
    { _id: req.params.todoId },
    { $set: req.body },
    { new: true, useFindAndModify: false }
  ).exec((err, todo) => {
    if (err) {
      return res.status(500).json({
        error: "You are not authorized to update this ToDo!",
      });
    }
    res.json({
      success: "true",
      data: {
        todo,
      },
    });
  });
};

//Delete Todo
exports.deleteToDo = (req, res) => {
  ToDo.findByIdAndDelete({ _id: req.params.todoId }).exec((err, todo) => {
    if (err) {
      return res.status(400).json({
        success: "false",
        error: "Failed to delete ToDo from DB",
      });
    }
    res.json({
      success: "true",
      error: `Delete ${todo.title} task from DB`,
    });
  });
};
