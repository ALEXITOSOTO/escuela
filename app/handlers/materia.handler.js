const Materia = require('../models/Materia'); // Importa el modelo Materia

// Función para listar todas las materias
const listMateria = async (req, res) => {
    try {
        const materias = await Materia.getMaterias(); // Llamado a la función de select del modelo
        res.json(materias); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para insertar una nueva materia
const insertMateria = async (req, res) => {
    try {
        const materia = await Materia.createMateria(req.body); // Llamado a la función de insert del modelo
        res.status(201).json(materia); // Retorna la respuesta en formato JSON con estado 201 (creado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para actualizar una materia existente
const updateMateria = async (req, res) => {
    try {
        const materia = await Materia.updateMateria(req.params.id, req.body); // Llamado a la función de update del modelo
        res.json(materia); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para eliminar una materia
const deleteMateria = async (req, res) => {
    try {
        await Materia.deleteMateria(req.params.id); // Llamado a la función de delete del modelo
        res.status(204).send(); // Retorna un estado 204 (sin contenido) para indicar éxito
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listMateria,
    insertMateria,
    updateMateria,
    deleteMateria
};
