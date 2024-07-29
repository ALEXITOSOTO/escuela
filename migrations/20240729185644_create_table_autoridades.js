/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('autoridad', table => {
        table.increments('id').primary();
        table.string('cedula').notNullable().unique();
        table.string('nombre').notNullable();
        table.string('apellido');
        table.string('correo');
        table.string('titulo');
        table.string('cargo');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('autoridad');
};
