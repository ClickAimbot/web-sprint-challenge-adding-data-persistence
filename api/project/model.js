const db = require('../../data/dbConfig')

async function getAll() {
 const result = await db('projects')
    return result
}

async function getById(id) {
    return db('projects').where('project_id', id).first()
}

const createProject = async (project) => {
    return db('projects').insert(project)
        .then(([project_id]) => {
            return getById(project_id)
        })
}

module.exports = { getAll, getById, createProject }
