const projects = [
  { project_name: 'World Domination', project_description: 'Take over the world', project_completed: true},
  { project_name: 'Get Rich Quick', project_description: 'Make money', project_completed: false},
  { project_name: 'Revenge', project_description: 'get them back', project_completed: true},
  { project_name: 'More Instagram Followers', project_description: 'get famous', project_completed: false},
]

exports.projects = projects;

exports.seed = function(knex) {
    return knex('projects').insert(projects);
};