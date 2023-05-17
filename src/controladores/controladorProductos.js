const Producto = require('../modelos/modeloproducto');
const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    const lista = await Producto.findAll();
    console.log(lista);
    res.render('productosIndex', {
        titulo: 'Productos',
        lista,
    });
};