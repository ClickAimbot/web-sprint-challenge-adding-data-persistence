const db = require('../../data/dbConfig')

async function getAll() {
    const result = await db('resources')
       return result
}

async function getById(id) {
    return db('resources').where('resource_id', id).first()
}

const createResource = async (resource) => {
    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return getById(resource_id)
        })
}

module.exports = { getAll, getById, createResource }