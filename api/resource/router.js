const router = require('express').Router();
const Resource = require('./model');

router.get('/:resource_id', (req, res, next) => {
    Resource.getResourceById(req.params.resource_id)
        .then(resource => {
            res.status(200).json(resource);
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