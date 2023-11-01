const router = require('express').Router();
const Resource = require('./model');
const md = require('./middleware');

router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(resources => {
            res.json(resources);
            console.log(resources)
        })
        .catch(next) 
})

router.post('/', md.checkResourcePayload, async (req, res, next) => {
    try {
        const newResource = await Resource.createResource(req.body);
        res.status(201).json(newResource);
    } catch (error) {
        next(error);
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;