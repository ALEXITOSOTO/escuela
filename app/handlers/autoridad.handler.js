const Autoridad = require('../models/Autoridad'); // Importa el modelo Autoridad

// Función para listar todas las autoridades
const listAutoridad = async (req, res) => {
    try {
        const autoridades = await Autoridad.getAutoridades(); // Llamado a la función de select del modelo
        res.json(autoridades); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para insertar una nueva autoridad
const insertAutoridad = async (req, res) => {
    try {
        const autoridad = await Autoridad.createAutoridad(req.body); // Llamado a la función de insert del modelo
        res.status(201).json(autoridad); // Retorna la respuesta en formato JSON con estado 201 (creado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para actualizar una autoridad existente
const updateAutoridad = async (req, res) => {
    try {
        const autoridad = await Autoridad.updateAutoridad(req.params.id, req.body); // Llamado a la función de update del modelo
        res.json(autoridad); // Retorna la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para eliminar una autoridad
const deleteAutoridad = async (req, res) => {
    try {
        await Autoridad.deleteAutoridad(req.params.id); // Llamado a la función de delete del modelo
        res.status(204).send(); // Retorna un estado 204 (sin contenido) para indicar éxito
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listAutoridad,
    insertAutoridad,
    updateAutoridad,
    deleteAutoridad
};
