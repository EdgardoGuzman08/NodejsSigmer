const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorLogin = require('../controladores/controladorLogin');
const rutas = Router();
rutas.get('/listar', controladorLogin.Lista);

rutas.post('/ingresar', 
body('usuario').notEmpty().withMessage('Debe escribir su correo')
.isString().withMessage('Su usuario o contrasena no es correcta'),
body('password').notEmpty().withMessage('Debe escribir su contraseña')
.isString().withMessage('Su usuario o contrasena no es correcta'),
controladorLogin.Ingresar);

module.exports= rutas;
