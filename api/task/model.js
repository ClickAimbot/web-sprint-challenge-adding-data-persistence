const db = require('../../data/dbConfig');

async function getAll() {
  const result = await db('tasks')
     return result
}

module.exports = { getAll }
