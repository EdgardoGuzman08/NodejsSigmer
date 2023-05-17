const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorCliente = require('../controladores/controladorCliente');
const rutas = Router();
rutas.get('/listar', controladorCliente.Lista);

rutas.post('/guardar', 
body('nombrecliente').notEmpty().withMessage('Debe escribir el nombre del cliente')
.isLength({min: 3}).withMessage('Debe escribir un nombre del cliente con 3 caracteres como minimo'),
controladorCliente.Guardar);

rutas.post('/eliminar', 
query('idcliente').notEmpty().withMessage('Debe escribir el id del clientes')
.isInt().withMessage('El id del cliente debe ser un numero entero'),
controladorCliente.Eliminar);

module.exports= rutas;
