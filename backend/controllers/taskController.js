const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (error) {
    console.error('Get tasks error:', error);
    res.status(500).json({ message: 'Server error fetching tasks' });
  }
};

exports.getTaskById = async (req, res) => {
  try{
    const task = await Task.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.userId 
    });
    if(!task) return res.status(404).json({message: 'Task not found'});

    return res.status(200).json(task);
  } catch(error){
    console.error('Get Task Error:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { text, priority } = req.body;
    
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    const newTask = new Task({
      text,
      status: 'pending',
      priority: priority || 'medium',
      userId: req.userId
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Create task error:', error);
    res.status(500).json({ message: 'Server error creating task' });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({ message: 'Server error updating status' });
  }
};

exports.updateTaskPriority = async (req, res) => {
  try {
    const { priority } = req.body;
    if (!priority) {
      return res.status(400).json({ message: 'Priority is required' });
    }
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { priority },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    console.error('Update priority error:', error);
    res.status(500).json({ message: 'Server error updating priority' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.userId 
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Delete task error:', error);
    res.status(500).json({ message: 'Server error deleting task' });
  }
};