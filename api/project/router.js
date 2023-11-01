const router = require('express').Router();
const Project = require('./model');
const md = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll();
        const projectsWithBoolean = projects.map(project => ({
            ...project,
            project_completed: project.project_completed === 1
        }));
        res.json(projectsWithBoolean);
    } catch (error) {
        next(error);
    }
});


router.post('/', md.checkProjectPayload, md.convertProjectCompleted, async (req, res, next) => {
    try {
        const newProject = await Project.createProject(req.body);
        res.status(201).json(newProject);
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


