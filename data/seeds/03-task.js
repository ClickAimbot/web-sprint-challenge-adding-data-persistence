const tasks = [
    { project_id: 1, task_number: 1, task_description: 'Get a ton of money', task_notes: 'Start your own software company' },
    { project_id: 1, task_number: 2, task_description: 'Buy a bunch of weapons', task_notes: 'You will need them to take over the world' },
    { project_id: 1, task_number: 3, task_description: 'Build a secret lair', task_notes: 'You will need a place to hide out' },
    { project_id: 2, task_number: 1, task_description: 'Save up 5 thousand $', task_notes: 'Get a regular degular job' },
    { project_id: 2, task_number: 2, task_description: 'Invest in the stock market', task_notes: 'Buy low, sell high' },
    { project_id: 2, task_number: 3, task_description: 'Buy a lottery ticket', task_notes: 'You never know' },
    { project_id: 3, task_number: 1, task_description: 'Find out where they live', task_notes: 'You will need to know where to go' },
    { project_id: 3, task_number: 2, task_description: 'Find out their daily routine', task_notes: 'You will need to know when to strike' },
    { project_id: 3, task_number: 3, task_description: 'Find out their fears', task_notes: 'You will need to know what to use against them' },
    { project_id: 4, task_number: 1, task_description: 'Get a bunch of followers', task_notes: 'You will need to be popular' },
    { project_id: 4, task_number: 2, task_description: 'Post a bunch of pictures', task_notes: 'You will need to be active' },
    { project_id: 4, task_number: 3, task_description: 'Get fit and in shape', task_notes: 'You will need to be good looking' },
    { project_id: 5, task_number: 1, task_description: 'Find the location of the Holy Grail', task_notes: 'You will need to know where to go' },
    { project_id: 5, task_number: 2, task_description: 'Find a way to get there', task_notes: 'You will need to know how to get there' },
    { project_id: 5, task_number: 3, task_description: 'Find a way to get past the traps', task_notes: 'You will need to know how to get past the traps' },
    { project_id: 6, task_number: 1, task_description: 'Find out their social security number', task_notes: 'You will need to know their social security number' },
    { project_id: 6, task_number: 2, task_description: 'Find out their mother\'s maiden name', task_notes: 'You will need to know their mother\'s maiden name' },
    { project_id: 6, task_number: 3, task_description: 'Find out their credit card number', task_notes: 'You will need to know their credit card number' },
    { project_id: 7, task_number: 1, tasl_description: 'Find out what sport fits you the best', task_notes: 'You will need to try out many sports' },
    { project_id: 7, task_number: 2, tasl_description: 'Find out what position fits you the best', task_notes: 'You will need to try out many positions' },
    { project_id: 7, task_number: 3, tasl_description: 'Find out what team fits you the best', task_notes: 'You will need to try out many teams' },
]

exports.tasks = tasks;

exports.seed = function(knex) {
    return knex('tasks').insert(tasks);
};