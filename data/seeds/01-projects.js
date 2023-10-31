const projects = [
  { project_name: 'World Domination'},
  { project_name: 'Get Rich Quick'},
  { project_name: 'Revenge'},
  { project_name: 'More Instagram Followers'},
  { project_name: 'Find the Holy Grail'},
  { project_name: 'Steal Coworker\'s Identity'},
  { project_name: 'Have fun!'},
]

exports.projects = projects;

exports.seed = function(knex) {
    return knex('projects').insert(projects);
};