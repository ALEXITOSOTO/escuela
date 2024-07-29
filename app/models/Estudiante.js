const { Model } = require('objection'); // Llamar a Model de la librería objection

class Estudiante extends Model { // Creo herencia de Model
    static get tableName() { // Especifica el nombre de la tabla
        return 'estudiante';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object',
            required: ['cedula', 'nombre', 'apellido'], // Campos requeridos
            properties: {
                id: { type: 'integer' },
                cedula: { type: 'string' },
                nombre: { type: 'string' },
                apellido: { type: 'string' },
                direccion: { type: 'string' },
                fecha_nacimiento: { type: 'string' },
                fkid_curso: {type: 'string'}
            }
        };
    }

    static async getEstudiantes() { // Método para listar estudiantes
        return await Estudiante.query(); // SELECT * FROM estudiante
    }

    static async insert(data) { // Método para insertar un estudiante
        return await Estudiante.query().insert(data); // INSERT INTO estudiante VALUES (...)
    }

    static async update(id, data) { // Método para editar un estudiante
        return await Estudiante.query().patch(data).where('id', id); // UPDATE estudiante SET data WHERE id = ?
    }

    static async delete(id) { // Método para eliminar un estudiante
        return await Estudiante.query().deleteById(id); // DELETE FROM estudiante WHERE id = ?
    }
}

module.exports = Estudiante;
