exports.checkProjectPayload = (req, res, next) => {
    const { project_name } = req.body;
    if (project_name === undefined || project_name.trim() === '') {
        next({ status: 400, message: 'project_name is required' });
    } else {
        next();
    }
};

