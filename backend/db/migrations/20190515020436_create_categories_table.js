
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', (table)=>{
      table.increments('id').unsigned();
      table.string('name').defaultTo('uncategorized');
      table.timestamps().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
