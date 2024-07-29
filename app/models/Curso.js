const { Model } = require('objection');

class Curso extends Model {
    static get tableName() {
        return 'curso'; // Nombre de la tabla en la base de datos
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['codigo', 'nombre', 'descripcion', 'duracion', 'fecha_inicio', 'fecha_fin'],

            properties: {
                id: { type: 'integer' },
                codigo: { type: 'string' }, 
                nombre: { type: 'string' },
                descripcion: { type: 'string' },
                duracion: { type: 'number' },
                fecha_inicio: { type: 'string' },
                fecha_fin: { type: 'string' },
            }
        };
    } 

    static async getCursos() { // Método para listar cursos
        return await Curso.query(); // SELECT * FROM curso
    }

    static async insert(data) {
        return await Curso.query().insert(data);
    }

    static async update(data, id) {
        return await Curso.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Curso.query().deleteById(id);
    }
}

module.exports = Curso;
