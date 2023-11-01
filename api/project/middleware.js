const Project = require('./model');

exports.checkProjectPayload = (req, res, next) => {
    const { project_name, project_description, project_completed } = req.body;
    if (!project_name || !project_description || project_completed === undefined) {
        res.status(400).json({ message: 'project name, project description, and project completed are required' });
    } else {
        next();
    }
};


exports.checkProjectId = async (req, res, next) => {
    try {
        const project = await Project.getProjectById(req.params.project_id)
        if (!project) {
            res.status(404).json({message: 'project not found'})
        } else {
            req.project = project
            next()
        }
    } catch (err) {
        next(err)
    }
}
