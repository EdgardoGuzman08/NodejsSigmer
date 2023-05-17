const Pedidos = require('../modelos/modelopedidos');
const Producto = require('../modelos/modeloproducto');
const Detalles = require('../modelos/modelodetalle');
const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    const lista = await Pedidos.findAll();
    console.log(lista);
    res.render('carritoIndex', {
        titulo: 'Pedidos',
        lista,
    });
};

exports.Guardar = async (req, res) =>{
    const lista = await Pedidos.findAll();
    console.log(lista);
    res.render('pedidosIndex', {
        titulo: 'Pedidos',
        lista,
    });
};