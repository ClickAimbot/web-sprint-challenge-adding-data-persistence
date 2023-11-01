const db = require('../../data/dbConfig');

const getAll = () => {
  return db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    );
};

async function getById(id) {
  return db('tasks').where('task_id', id).first()
}

const createTask = async (task) => {
  return db('tasks').insert(task)
      .then(([task_id]) => {
          return getById(task_id)
      })
}

module.exports = { getAll, getById, createTask}
