const resources = [
    { resource_name: 'Computer', resource_description: 'awdaubwda'},
    { resource_name: 'Phone', resource_description: 'awdaubwda'},
    { resource_name: 'Internet', resource_description: 'awdaubwda'},
    { resource_name: 'Charisma', resource_description: 'awdaubwda'},
    { resource_name: 'Wit', resource_description: 'awdaubwda'},
    { resource_name: 'Intelligence', resource_description: 'awdaubwda'},
    { resource_name: 'Money', resource_description: 'awdaubwda'},
    { resource_name: 'Couraage', resource_description: 'awdaubwda'},
    { resource_name: 'Bravery', resource_description: 'awdaubwda'},
]

exports.resources = resources;

exports.seed = function(knex) {
    return knex('resources').insert(resources);
};