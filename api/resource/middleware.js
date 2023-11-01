const Resource = require('./model');

exports.checkResourcePayload = (req, res, next) => {
    const { resource_name } = req.body;
    if (!resource_name) {
        res.status(400).json({ message: 'resource name is required' });
    } else {
        next();
    }
};