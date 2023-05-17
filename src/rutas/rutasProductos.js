const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorProductos = require('../controladores/controladorProductos');
const rutas = Router();
rutas.get('/listar', controladorProductos.Lista);

module.exports= rutas;
