const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorDetalle = require('../controladores/controladorDetalle');
const rutas = Router();
rutas.get('/listar', controladorDetalle.Lista);

rutas.post('/eliminar', 
query('iddetalle').notEmpty().withMessage('Debe eliminar su id del detalle')
.isInt().withMessage('El id del detalle debe ser un numero entero'),
controladorDetalle.Eliminar);

module.exports= rutas;
