const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorMesas = require('../controladores/controladorMesas');
const rutas = Router();
rutas.get('/listar', controladorMesas.Lista);

module.exports= rutas;
