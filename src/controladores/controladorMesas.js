const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    res.render('mesasIndex', {
        titulo: 'Mesas',
    });
};