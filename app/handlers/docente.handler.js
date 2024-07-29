const Docente = require('../models/Docente'); // Importa el modelo Docente

// Función para listar todos los docentes
const listDocente = async (req, res) => {
    try {
        const docentes = await Docente.getDocentes(); // Llamado a la función de select del modelo
        res.json(docentes); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para insertar un nuevo docente
const insertDocente = async (req, res) => {
    try {
        const docente = await Docente.createDocente(req.body); // Llamado a la función de insert del modelo
        res.status(201).json(docente); // Retorna la respuesta en formato JSON con estado 201 (creado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para actualizar un docente existente
const updateDocente = async (req, res) => {
    try {
        const docente = await Docente.updateDocente(req.params.id, req.body); // Llamado a la función de update del modelo
        res.json(docente); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para eliminar un docente
const deleteDocente = async (req, res) => {
    try {
        await Docente.deleteDocente(req.params.id); // Llamado a la función de delete del modelo
        res.status(204).send(); // Retorna un estado 204 (sin contenido) para indicar éxito
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listDocente,
    insertDocente,
    updateDocente,
    deleteDocente
};
