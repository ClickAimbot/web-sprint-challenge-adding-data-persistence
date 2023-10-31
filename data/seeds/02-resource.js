const resources = [
    { resource_name: 'Computer'},
    { resource_name: 'Phone'},
    { resource_name: 'Internet'},
    { resource_name: 'Charisma'},
    { resource_name: 'Wit'},
    { resource_name: 'Intelligence'},
    { resource_name: 'Money'},
    { resource_name: 'Couraage'},
    { resource_name: 'Bravery'},
]

exports.resources = resources;

exports.seed = function(knex) {
    return knex('resources').insert(resources);
};