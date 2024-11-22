const Tasks = require("../models/taskSchema.js");

//Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Task title is required" });
    }

    const task = new Tasks({ title, description, dueDate, category });
    await task.save();
    console.log("Task created successfully", task);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    console.log("Tasks fetched successfully", tasks);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Update a task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await Tasks.findById(id);

    if (updates.isCompleted === undefined) {
      const updateTask = await Tasks.findByIdAndUpdate(id, updates, {
        new: true,
      });

      if (!updateTask) {
        return res.status(404).json({ error: "Task not found" });
      }

      console.log("Task updated successfully", updateTask);
      res.status(200).json({ task: updateTask });
    } else {
      if (task.isCompleted) {
        return res
          .status(400)
          .json({ error: "Task is already marked as completed" });
      }
      const updateTask = await Tasks.findByIdAndUpdate(id, updates, {
        new: true,
      });

      if (!updateTask) {
        return res.status(404).json({ error: "Task not found" });
      }

      console.log("Task updated successfully", updateTask);
      res.status(200).json({ task: updateTask });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    console.log("Task deleted successfully", task);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
