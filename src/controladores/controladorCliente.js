const Cliente = require('../modelos/modelocliente');
const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    const lista = await Cliente.findAll();
    console.log(lista);
    res.render('clienteIndex', {
        titulo: 'Clientes',
        lista,
    });
};

exports.Listar = async (req, res) =>{
    const lista = await Cliente.findAll();
    console.log(lista);
    res.render('indexPerfil', {
        titulo: 'Clientes',
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
        const { nombrecliente, direccioncliente, telefonocliente, correocliente, imagencliente, nombreimagen } = req.body;
        console.log(nombrecliente);
        console.log(direccioncliente);
        console.log(telefonocliente);
        console.log(correocliente);
        console.log(imagencliente);
        console.log(nombreimagen);
        var texto="";
        try {
            await Cliente.create({ ...req.body })
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
        const { idcliente } = req.query;
        var texto="";
        try {
            var buscarCliente = await Cliente.findOne({
                where:{
                    idcliente: idcliente
                }
            });
            if(!buscarCliente){
                texto="El cliente no existe";
            }
            else{
                await Cliente.destroy({where:{idcliente: idcliente}})
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
