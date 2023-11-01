exports.checkTaskPayload = (req, res, next) => {
    const { task_description, project_id } = req.body;
    if (task_description === undefined || project_id === undefined) {
        next({ status: 400, message: 'task_description and project_id are required' });
    } else {
        next();
    }
}

exports.convertTaskCompleted = (req, res, next) => {
    const taskCompleted = req.body.task_completed;
    req.body.task_completed = taskCompleted === '1';
    next();
};

