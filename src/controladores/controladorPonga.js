const Registro = require('../modelos/modelologin');
const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    const lista = await Registro.findAll();
    console.log(lista);
    res.render('registerIndex', {
        titulo: 'Registrar',
        lista,
    });
};

exports.Guardar = async (req, res) =>{
    console.log(req.body)
    const validacion = validationResult(req);
    if(validacion.errors.length>0){
        let mensaje='';
        validacion.errors.forEach(element => {
            console.log(element);
            mensaje+=element.msg + '. ';
        });
        res.send(mensaje);
    }
    else{
        const { usuario, password} = req.body;
        console.log(usuario);
        console.log(password);
        var texto="";
        try {
            await Registro.create({ ...req.body })
            .then((data)=>{
                console.log(data);
                texto="Registro guardado";
            })
            .catch((error)=>{
                console.log(error);
                texto= "Error al guardar los datos";
            });
        } catch (error) {
            console.log(error);
            texto="Error al guarcar los datos";
        }
        res.send(texto);
    }
};
