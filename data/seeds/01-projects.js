const projects = [
  { project_name: 'World Domination', project_description: 'Take over the world' },
  { project_name: 'Get Rich Quick', project_description: 'Make money' },
  { project_name: 'Revenge', project_description: 'get them back' },
  { project_name: 'More Instagram Followers', project_description: 'get famous' },
]

exports.projects = projects;

exports.seed = function(knex) {
    return knex('projects').insert(projects);
};