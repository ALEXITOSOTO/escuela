const express = require('express');
const cors = require('cors');
const knex = require('knex');
const { Model } = require('objection');
const app = express();
const port = 3000;
const Curso = require('./app/models/Curso');
const Docente = require('./app/models/Docente');
const Materia = require('./app/models/Materia');
const Estudiante = require('./app/models/Estudiante');

// Configuración de Knex
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development); // Usa la configuración de desarrollo

// Configura Objection.js para usar la instancia de Knex
Model.knex(db);

app.use(cors());
app.use(express.json());

// Ruta para obtener todos los cursos
app.get('/api/cursos', async (req, res) => {
    try {
        // Obtener todos los cursos de la base de datos
        const cursos = await Curso.query();
        res.json(cursos);
    } catch (error) {
        console.error('Error fetching cursos:', error.message);
        res.status(500).json({ error: 'Error fetching cursos' });
    }
});
app.post('/api/cursos', async (req, res) => {
    try {
        const { codigo, nombre, descripcion,duracion,fecha_inicio,fecha_fin } = req.body;
        const [id] = await Curso.insert({ codigo, nombre, descripcion,duracion,fecha_inicio,fecha_fin});
        res.status(201).json({ id, codigo, nombre, descripcion,duracion,fecha_inicio,fecha_fin });
    } catch (error) {
        console.error('Error adding curso:', error.message);
        res.status(500).json({ error: 'Error adding curso' });
    }
});



// Ruta para obtener todos los docentes
app.get('/api/docentes', async (req, res) => {
    try {
        // Obtener todos los docentes de la base de datos
        const docentes = await Docente.query();
        res.json(docentes);
    } catch (error) {
        console.error('Error fetching docentes:', error.message);
        res.status(500).json({ error: 'Error fetching docentes' });
    }
});
app.post('/api/docentes', async (req, res) => {
    try {
        const { cedula, nombre, apellido,correo,titulo,fecha_nacimiento } = req.body;
        const [id] = await Docente.insert({ cedula, nombre, apellido,correo,titulo,fecha_nacimiento});
        res.status(201).json({ id, cedula, nombre, apellido,correo,titulo,fecha_nacimiento });
    } catch (error) {
        console.error('Error adding docente:', error.message);
        res.status(500).json({ error: 'Error adding docente' });
    }
});

// Ruta para obtener todos los Materia
app.get('/api/materias', async (req, res) => {
    try {
        // Obtener todos los Materia de la base de datos
        const materias = await Materia.query();
        res.json(materias);
    } catch (error) {
        console.error('Error fetching materia:', error.message);
        res.status(500).json({ error: 'Error fetching materia' });
    }
});
app.post('/api/materias', async (req, res) => {
    try {
        const { nombre, identificativo, descripcion,horas,creditos,nivel } = req.body;
        const [id] = await Materia.insert({ nombre, identificativo, descripcion,horas,creditos,nivel});
        res.status(201).json({ id, nombre, identificativo, descripcion,horas,creditos,nivel });
    } catch (error) {
        console.error('Error adding materias:', error.message);
        res.status(500).json({ error: 'Error adding materias' });
    }
});

// Ruta para obtener todos los estudiantes
app.get('/api/estudiantes', async (req, res) => {
    try {
        const estudiantes = await Estudiante.getEstudiantes();
        res.json(estudiantes);
    } catch (error) {
        console.error('Error fetching estudiantes:', error.message);
        res.status(500).json({ error: 'Error fetching estudiantes' });
    }
});

// Ruta para agregar un nuevo estudiante
app.post('/api/estudiantes', async (req, res) => {
    try {
        const { cedula, nombre, apellido, direccion, fecha_nacimiento,fkid_curso } = req.body;
        const [id] = await Estudiante.insert({ cedula, nombre, apellido, direccion, fecha_nacimiento,fkid_curso });
        res.status(201).json({ id, cedula, nombre, apellido, direccion, fecha_nacimiento,fkid_curso });
    } catch (error) {
        console.error('Error adding estudiante:', error.message);
        res.status(500).json({ error: 'Error adding estudiante' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
