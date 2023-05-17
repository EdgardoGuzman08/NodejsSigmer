const Direccion = require('../modelos/modelodireccion');
const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    const lista = await Direccion.findAll();
    console.log(lista);
    res.render('direccionIndex', {
        titulo: 'Direcciones',
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
        const { idclientess, clientedireccion, creada} = req.body;
        console.log(idclientess);
        console.log(clientedireccion);
        console.log(creada);
        var texto="";
        try {
            await Direccion.create({ ...req.body })
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

exports.Eliminar = async (req, res) =>{
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
        const { iddireccion } = req.query;
        var texto="";
        try {
            var buscarDireccion = await Direccion.findOne({
                where:{
                    iddireccion: iddireccion
                }
            });
            if(!buscarDireccion){
                texto="La direccion no existe";
            }
            else{
                await Direccion.destroy({where:{iddireccion: iddireccion}})
                .then((data)=>{
                    console.log(data);
                    texto="Registro eliminado";
                })
                .catch((error)=>{
                    console.log(error);
                    texto= "Error al eliminar los datos";
                });
            }
        } catch (error) {
            console.log(error);
            texto="Error al eliminar los datos";
        }
        res.send(texto);
    }
};