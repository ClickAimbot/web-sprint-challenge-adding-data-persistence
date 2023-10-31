const db = require('../../data/dbConfig')

async function getAll() {
 const result = await db('projects')
    return result
}

async function getById(id) {
    return db('projects').where('project_id', id).first()
}

const createProject = async (project) => {
    const [id] = await db('projects').insert(project)
    return getById(id)
}

module.exports = { getAll, getById, createProject }
