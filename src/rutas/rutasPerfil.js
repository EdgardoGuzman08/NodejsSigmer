const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorCliente = require('../controladores/controladorCliente');
const rutas = Router();
rutas.get('/listar', controladorCliente.Listar);

module.exports= rutas;
