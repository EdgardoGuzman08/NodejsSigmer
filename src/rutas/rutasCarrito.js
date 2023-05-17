const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorCarrito = require('../controladores/controladorCarrito');
const rutas = Router();
rutas.get('/listar', controladorCarrito.Lista);
rutas.get('/guardar', controladorCarrito.Guardar);
module.exports= rutas;
