
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table)=>{
    table.increments('id').unsigned();
    table.string('name').notNullable();
    table.string('venue').notNullable();
    table.string('description',750).notNullable();
    table.timestamps(['created_at', 'updated_at'], [knex.fn.now()]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
