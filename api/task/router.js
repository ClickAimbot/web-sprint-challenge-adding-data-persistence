const router = require('express').Router();
const Task = require('./model');
const md = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getAll();
        const tasksWithBoolean = tasks.map(task => ({
            ...task,
            task_completed: task.task_completed === 1
        }));
        res.json(tasksWithBoolean);
    } catch (error) {
        next(error);
    }
});

router.post('/', md.checkTaskPayload, md.convertTaskCompleted, async (req, res, next) => {
    try {
        const newTask = await Task.createTask(req.body);
        const newTaskwithBoolean = {
            ...newTask,
            task_completed: newTask.task_completed === 1
        }
        res.status(201).json(newTaskwithBoolean);
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;