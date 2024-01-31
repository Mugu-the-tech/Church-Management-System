
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sermons', (table)=>{
        table.increments('id').unsigned();
        table.string('title').notNullable();
        table.string('contents').notNullable();
        table.integer('category_id').unsigned();
        table.foreign('category_id').references('id').inTable('categories');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sermons');
};
