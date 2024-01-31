
exports.up = function(knex, Promise) {
    return knex.schema.createTable('requests', (table)=>{
        table.increments('id').unsigned();
        table.string('title').unique();
        table.string('contents');
        table.string('slug');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests');
};
