const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorPedidos = require('../controladores/controladorPedidos');
const rutas = Router();
rutas.get('/listar', controladorPedidos.Lista);

rutas.post('/eliminar', 
query('idpedidos').notEmpty().withMessage('Su pedido ha sido borrado')
.isInt().withMessage('Error!!!'),
controladorPedidos.Eliminar);

module.exports= rutas;
