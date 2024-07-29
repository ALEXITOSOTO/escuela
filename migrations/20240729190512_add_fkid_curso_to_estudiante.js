/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Ejemplo de migración para añadir restricción de clave externa a la tabla customer

exports.up = function(knex) {
    return knex.schema.table('estudiante', function(table) {
        table.integer('fkid_curso').unsigned().notNullable();
        table.foreign('fkid_curso').references('id').inTable('curso').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('estudiante', function(table) {
        table.dropForeign(['fkid_curso']);
        table.dropColumn('fkid_curso');
    });
};
