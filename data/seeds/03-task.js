const tasks = [
    { project_id: 1, task_description: 'Get a ton of money', task_notes: 'Start your own software company' },
    { project_id: 1, task_description: 'Buy a bunch of weapons', task_notes: 'You will need them to take over the world' },
    { project_id: 1, task_description: 'Build a secret lair', task_notes: 'You will need a place to hide out' },
    { project_id: 2, task_description: 'Save up 5 thousand $', task_notes: 'Get a regular degular job' },
    { project_id: 2, task_description: 'Invest in the stock market', task_notes: 'Buy low, sell high' },
    { project_id: 2, task_description: 'Buy a lottery ticket', task_notes: 'You never know' },
    { project_id: 3, task_description: 'Find out where they live', task_notes: 'You will need to know where to go' },
    { project_id: 3, task_description: 'Find out their daily routine', task_notes: 'You will need to know when to strike' },
]

exports.tasks = tasks;

exports.seed = function(knex) {
    return knex('tasks').insert(tasks);
};