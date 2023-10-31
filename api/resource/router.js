const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(resources => {
            res.json(resources);
            console.log(resources)
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