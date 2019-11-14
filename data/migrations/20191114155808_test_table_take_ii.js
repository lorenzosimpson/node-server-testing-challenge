
exports.up = function(knex) {
    return knex.schema
    .createTable('cats', tbl => {
        tbl.increments()
        tbl.string('name', 128)
        .notNullable()
        tbl.string('favorite_food', 128)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('cats')
  };
  