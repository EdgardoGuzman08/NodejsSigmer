const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorPonga = require('../controladores/controladorPonga');
const rutas = Router();
rutas.get('/listar', controladorPonga.Lista);

rutas.post('/guardar', 
body('usuario').notEmpty().withMessage('Debe escribir su correo')
.isString().withMessage('Su usuario o contrasena no es correcta'),
body('password').notEmpty().withMessage('Debe escribir su contraseña')
.isString().withMessage('Su usuario o contrasena no es correcta'),
controladorPonga.Guardar);

module.exports= rutas;
