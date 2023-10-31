function getProjectById(project_id) {
  return Promise.resolve('project', project_id);
}

module.exports = {
    getProjectById,
}
