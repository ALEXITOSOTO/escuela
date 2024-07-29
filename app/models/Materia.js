const { Model } = require('objection'); // Llamar a Model de la librería objection

class Materia extends Model { // Creo herencia de Model
    static get tableName() { // Especifica el nombre de la tabla
        return 'materia';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object',
            required: ['nombre', 'identificativo'], // Campos requeridos
            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string' },
                identificativo: { type: 'string' },
                descripcion: { type: 'string' },
                horas: { type: 'string' },
                creditos: { type: 'string' },
                nivel: { type: 'string' }
            }
        };
    }

    static async getMaterias() { // Método para listar materias
        return await Materia.query(); // SELECT * FROM materia
    }

    static async insert(data) { // Método para insertar una materia
        return await Materia.query().insert(data); // INSERT INTO materia VALUES (...)
    }

    static async update(id, data) { // Método para editar una materia
        return await Materia.query().patch(data).where('id', id); // UPDATE materia SET data WHERE id = ?
    }

    static async delete(id) { // Método para eliminar una materia
        return await Materia.query().deleteById(id); // DELETE FROM materia WHERE id = ?
    }
}

module.exports = Materia;
