const Curso = require('../models/Curso'); // Importa el modelo Curso

// Función para listar todos los cursos
const listCurso = async (req, res) => {
    try {
        const cursos = await Curso.getCursos(); // Llamado a la función de select del modelo
        res.json(cursos); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para insertar un nuevo curso
const insertCurso = async (req, res) => {
    try {
        const curso = await Curso.createCurso(req.body); // Llamado a la función de insert del modelo
        res.status(201).json(curso); // Retorna la respuesta en formato JSON con estado 201 (creado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para actualizar un curso existente
const updateCurso = async (req, res) => {
    try {
        const curso = await Curso.updateCurso(req.params.id, req.body); // Llamado a la función de update del modelo
        res.json(curso); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para eliminar un curso
const deleteCurso = async (req, res) => {
    try {
        await Curso.deleteCurso(req.params.id); // Llamado a la función de delete del modelo
        res.status(204).send(); // Retorna un estado 204 (sin contenido) para indicar éxito
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listCurso,
    insertCurso,
    updateCurso,
    deleteCurso
};
