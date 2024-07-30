const { Model } = require('objection'); // Llamar a Model de la librería objection

class Autoridad extends Model { // Creo herencia de Model
    static get tableName() { // Especifica el nombre de la tabla
        return 'autoridad';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object',
            required: ['cedula', 'nombre'], // Campos requeridos
            properties: {
                id: { type: 'integer' },
                cedula: { type: 'string' },
                nombre: { type: 'string' },
                apellido: { type: 'string' },
                correo: { type: 'string' },
                titulo: { type: 'string' },
                cargo: { type: 'string' }
            }
        };
    }

    static async getAutoridades() { // Método para listar autoridades
        return await Autoridad.query(); // SELECT * FROM autoridad
    }

    static async insert(data) { // Método para insertar una autoridad
        return await Autoridad.query().insert(data); // INSERT INTO autoridad VALUES (...)
    }

    static async update(id, data) { // Método para editar una autoridad
        return await Autoridad.query().patch(data).where('id', id); // UPDATE autoridad SET data WHERE id = ?
    }

    static async delete(id) { // Método para eliminar una autoridad
        return await Autoridad.query().deleteById(id); // DELETE FROM autoridad WHERE id = ?
    }
}

module.exports = Autoridad;
