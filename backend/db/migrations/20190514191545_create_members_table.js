
exports.up = function(knex, Promise) {
    return knex.schema.createTable('members', (table)=>{
        table.increments('id').unsigned();
        table.string('first_name',25);
        table.string('last_name',25);
        table.string('dob',25);
        table.string('gender',6);
        table.string('occupation',25);
        table.string('phone',25);
        table.string('email',35);
        table.string('address',200);
        table.string('marital_status',25);
        table.string('pics',100);
        table.integer('unit_id').unsigned();
        table.foreign('unit_id').references('id').inTable('units');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('members');
};
