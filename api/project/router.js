const router = require('express').Router();
const Project = require('./model');
const md = require('./middleware');

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.json(projects);
            console.log(projects)
        })
        .catch(next) 
})

router.post('/', md.checkProjectPayload, (req, res, next) => {
    try {
        const newProject = Project.createProject(req.body)
        res.status(201).json(newProject)
    } catch (err) {
        next(err)
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


