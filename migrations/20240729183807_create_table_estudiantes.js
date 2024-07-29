/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('estudiante', table => {
        table.increments('id').primary();
        table.string('cedula').notNullable().unique();
        table.string('nombre').notNullable();
        table.string('apellido').notNullable();
        table.string('direccion');
        table.string('fecha_nacimiento');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('estudiante')
};
