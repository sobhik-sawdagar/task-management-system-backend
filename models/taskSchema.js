const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  isCompleted: { type: Boolean, default: false },
  dueDate: { type: Date },
  category: {
    type: String,
    enum: [
      "General",
      "Work",
      "Personal",
      "Health",
      "Education",
      "Finance",
      "Shopping",
      "Household",
      "Social",
      "Travel",
      "Hobbies",
      "Food",
    ],
    trim: true,
    default: "General",
  },
}, { timestamps: true });   

module.exports = mongoose.model("Tasks", TaskSchema);