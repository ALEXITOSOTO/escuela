const Estudiante = require('../models/Estudiante'); // Importa el modelo Estudiante

// Función para listar todos los estudiantes
const listEstudiante = async (req, res) => {
    try {
        const estudiantes = await Estudiante.getEstudiantes(); // Llamado a la función de select del modelo
        res.json(estudiantes); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para insertar un nuevo estudiante
const insertEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.createEstudiante(req.body); // Llamado a la función de insert del modelo
        res.status(201).json(estudiante); // Retorna la respuesta en formato JSON con estado 201 (creado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para actualizar un estudiante existente
const updateEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.updateEstudiante(req.params.id, req.body); // Llamado a la función de update del modelo
        res.json(estudiante); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para eliminar un estudiante
const deleteEstudiante = async (req, res) => {
    try {
        await Estudiante.deleteEstudiante(req.params.id); // Llamado a la función de delete del modelo
        res.status(204).send(); // Retorna un estado 204 (sin contenido) para indicar éxito
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listEstudiante,
    insertEstudiante,
    updateEstudiante,
    deleteEstudiante
};
