
exports.up = function(knex, Promise) {
  return knex.schema.createTable('units', (table)=>{
    table.increments('id').unsigned();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.foreign('head').references('id').inTable('members');
    table.timestamps(['created_at', 'updated_at'], [knex.fn.now(), knex.fn.now()]);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('units');
};
