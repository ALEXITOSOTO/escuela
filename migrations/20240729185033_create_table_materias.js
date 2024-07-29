/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('materia', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('identificativo').notNullable();
        table.string('descripcion');
        table.string('horas');
        table.string('creditos');
        table.string('nivel');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('materia');
};

