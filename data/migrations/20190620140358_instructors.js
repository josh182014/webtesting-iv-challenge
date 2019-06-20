exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructors', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructors');
  };
  