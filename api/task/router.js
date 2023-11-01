const router = require('express').Router();
const Task = require('./model');

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


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;