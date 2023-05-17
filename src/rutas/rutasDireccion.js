const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorDireccion = require('../controladores/controladorDireccion');
const rutas = Router();
rutas.get('/listar', controladorDireccion.Lista);

rutas.post('/guardar', 
body('idclientess').notEmpty().withMessage('Debe escribir el nombre de su direccion')
.isInt().withMessage('Debe escribir un nombre del cliente con 3 caracteres como minimo'),
controladorDireccion.Guardar);

rutas.post('/eliminar', 
query('iddireccion').notEmpty().withMessage('Debe escribir el id de la direccion')
.isInt().withMessage('El id la direccion debe ser un numero entero'),
controladorDireccion.Eliminar);

module.exports= rutas;
