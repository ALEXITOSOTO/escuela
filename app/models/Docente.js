const { Model } = require('objection'); // Llamar a Model de la librería objection

class Docente extends Model { // Creo herencia de Model
    static get tableName() { // Especifica el nombre de la tabla
        return 'docente';
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
                fecha_nacimiento: { type: 'string' }
            }
        };
    }

    static async getDocentes() { // Método para listar docentes
        return await Docente.query(); // SELECT * FROM docente
    }

    static async insert(data) { // Método para insertar un docente
        return await Docente.query().insert(data); // INSERT INTO docente VALUES (...)
    }

    static async update(id, data) { // Método para editar un docente
        return await Docente.query().patch(data).where('id', id); // UPDATE docente SET data WHERE id = ?
    }

    static async delete(id) { // Método para eliminar un docente
        return await Docente.query().deleteById(id); // DELETE FROM docente WHERE id = ?
    }
}

module.exports = Docente;
