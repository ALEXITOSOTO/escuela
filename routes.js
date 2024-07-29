const express = require('express'); // Importa el framework Express

// Importa los handlers del API
const cursoHandler = require('./app/handlers/curso.handler');
const estudianteHandler = require('./app/handlers/estudiante.handler');
const docenteHandler = require('./app/handlers/docente.handler');
const materiaHandler = require('./app/handlers/materia.handler');
const autoridadHandler = require('./app/handlers/autoridad.handler');

// Variable para encapsular rutas
const router = express.Router();

// Rutas para Curso
router.get('/cursos', cursoHandler.listCurso); // Obtener todos los cursos
router.post('/cursos', cursoHandler.insertCurso); // Insertar un nuevo curso
router.patch('/cursos/:id', cursoHandler.updateCurso); // Actualizar un curso existente
router.delete('/cursos/:id', cursoHandler.deleteCurso); // Eliminar un curso

// Rutas para Estudiante
router.get('/estudiantes', estudianteHandler.listEstudiante); // Obtener todos los estudiantes
router.post('/estudiantes', estudianteHandler.insertEstudiante); // Insertar un nuevo estudiante
router.patch('/estudiantes/:id', estudianteHandler.updateEstudiante); // Actualizar un estudiante existente
router.delete('/estudiantes/:id', estudianteHandler.deleteEstudiante); // Eliminar un estudiante

// Rutas para Docente
router.get('/docentes', docenteHandler.listDocente); // Obtener todos los docentes
router.post('/docentes', docenteHandler.insertDocente); // Insertar un nuevo docente
router.patch('/docentes/:id', docenteHandler.updateDocente); // Actualizar un docente existente
router.delete('/docentes/:id', docenteHandler.deleteDocente); // Eliminar un docente

// Rutas para Materia
router.get('/materias', materiaHandler.listMateria); // Obtener todas las materias
router.post('/materias', materiaHandler.insertMateria); // Insertar una nueva materia
router.patch('/materias/:id', materiaHandler.updateMateria); // Actualizar una materia existente
router.delete('/materias/:id', materiaHandler.deleteMateria); // Eliminar una materia

// Rutas para Autoridad
router.get('/autoridades', autoridadHandler.listAutoridad); // Obtener todas las autoridades
router.post('/autoridades', autoridadHandler.insertAutoridad); // Insertar una nueva autoridad
router.patch('/autoridades/:id', autoridadHandler.updateAutoridad); // Actualizar una autoridad existente
router.delete('/autoridades/:id', autoridadHandler.deleteAutoridad); // Eliminar una autoridad

module.exports = router;
