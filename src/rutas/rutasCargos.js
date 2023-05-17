const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorCargos = require('../controladores/controladorCargos');
const rutas = Router();
rutas.get('/listar', controladorCargos.Lista);
rutas.post('/guardar', 
body('nombre').notEmpty().withMessage('Debe escribir el nombre del cargo')
.isLength({min: 3}).withMessage('Debe escribir un nombre del cargo con 3 caracteres como minimo'),
controladorCargos.Guardar);
rutas.post('/modificar', 
query('id').notEmpty().withMessage('Debe escribir el id del cargo')
.isInt().withMessage('El id del cargo debe ser un numero entero'),
body('nombre').notEmpty().withMessage('Debe escribir el nombre del cargo')
.isLength({min: 3}).withMessage('Debe escribir un nombre del cargo con 3 caracteres como minimo'),
controladorCargos.Modificar);
rutas.post('/eliminar', 
query('id').notEmpty().withMessage('Debe escribir el id del cargo')
.isInt().withMessage('El id del cargo debe ser un numero entero'),
controladorCargos.Eliminar);
module.exports= rutas;