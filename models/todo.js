const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    task: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    userDetails: {
      type: ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ToDo", todoSchema);
