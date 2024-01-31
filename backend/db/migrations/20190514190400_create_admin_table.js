
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', (table)=>{
    table.increments('id');
    table.string('username',15).notNullable();
    table.string('email',26).notNullable();
    table.string('image',100).notNullable().defaultTo('/assets/images/avatar-1.png');
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins');
};
