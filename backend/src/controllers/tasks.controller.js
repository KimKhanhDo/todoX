import Task from '../models/task.model.js';

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: 'desc' });

        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error getAllTasks: ', error);
        res.status(500).json({ message: 'Internal error' });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title } = req.body;

        const task = new Task({ title });
        const newTask = await task.save();

        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error createTask: ', error);
        res.status(500).json({ message: 'Internal error' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { title, status, completedAt } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                completedAt,
            },
            { new: true },
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task is not existed' });
        }

        res.status(200).json(updateTask);
    } catch (error) {
        console.error('Error updateTask: ', error);
        res.status(500).json({ message: 'Internal error' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task is not existed' });
        }

        res.status(200).json(deletedTask);
    } catch (error) {
        console.error('Error deleteTask: ', error);
        res.status(500).json({ message: 'Internal error' });
    }
};
