const Cargo = require('../modelos/modelocargo');
const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    const lista = await Cargo.findAll();
    console.log(lista);
    res.render('cargosIndex', {
        titulo: 'Cargos',
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
        const { nombre, descripcion} = req.body;
        console.log(nombre);
        console.log(descripcion);
        var texto="";
        try {
            await Cargo.create({ ...req.body })
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

exports.Modificar = async (req, res) =>{
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
        const { id } = req.query;
        const { nombre, descripcion} = req.body;
        console.log(nombre);
        console.log(descripcion);
        var texto="";
        try {
            var buscarCargo = await Cargo.findOne({
                where:{
                    id: id
                }
            });
            if(!buscarCargo){
                texto="El cargo no existe";
            }
            else{
                await Cargo.update({...req.body},{where:{id: id}})
                .then((data)=>{
                    console.log(data);
                    texto="Registro actulizado";
                })
                .catch((error)=>{
                    console.log(error);
                    texto= "Error al actualizar los datos";
                });
            }
        } catch (error) {
            console.log(error);
            texto="Error al actualizar los datos";
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
        const { id } = req.query;
        var texto="";
        try {
            var buscarCargo = await Cargo.findOne({
                where:{
                    id: id
                }
            });
            if(!buscarCargo){
                texto="El cargo no existe";
            }
            else{
                await Cargo.destroy({where:{id: id}})
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