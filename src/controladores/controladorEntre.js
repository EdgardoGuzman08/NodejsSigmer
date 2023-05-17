const Login = require('../modelos/modelologin');
const { validationResult } = require('express-validator');
const msj = require('../componentes/mensaje');
const { Op } = require("sequelize");
const session = require('express-session');
let alert = require('alert'); 

exports.Login = async (req, res) => {
    const validacion = validationResult(req);
    if (!validacion.isEmpty()) {
        msj("Los datos ingresados no son validos", 200, validacion.array(), res);
    }
    res.render('login', { opt: true });
};
exports.IniLogin = async (req, res) => {
    const validacion = validationResult(req);
    if (!validacion.isEmpty()) {
        // msj("Los datos ingresados no son validos", 200, validacion.array(), res);
    }
    else {
        const usuario = req.body.usuario;
        const password = req.body.password;
        var BuscarTipos = await Login.findAll({
            attributes: [
                'idusuario', 'idclientefk', 'usuario', 'gmail', 'facebook', 'password', 'logueado', 'activo', 'pin', 'expiration'  
            ],
            where: {
                [Op.and]: [{
                    usuario: {
                        [Op.like]: usuario
                    },
                    password: password,
                }],
            }
        });
        BuscarTipos = JSON.stringify(BuscarTipos);
        let BuscarTipos2 = JSON.parse(BuscarTipos);
        var texto="";
            if (BuscarTipos2 != "") {
                for (let item of BuscarTipos2) {
                req.session.Inicio = true;
                req.session.usuario = item.usuario;
                }
                console.log("correooo",req.session.usuario);
                res.render('inicio', { correcto: true });
                alert("Bienvenido a nuestro restaurante")
            } else {
                res.render('login', { correcto: false });
                alert("Error!!! Credenciales no correctas")
            }   
    }
};
exports.Logout = async (req, res) => {
    req.session.destroy();
};
