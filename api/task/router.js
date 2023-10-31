const router = require('express').Router();
const Task = require('./model');

router.get('/', (req, res, next) => {
    Task.getAll()
        .then(Tasks => {
            res.json(Tasks);
            console.log(Tasks)
        })
        .catch(next)  
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;