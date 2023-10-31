const db = require('../../data/dbConfig')

async function getAll() {
    const result = await db('resources')
       return result
}

module.exports = { getAll }