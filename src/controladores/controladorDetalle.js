const Detalles = require('../modelos/modelodetalle');
const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    const lista = await Detalles.findAll();
    console.log(lista);
    res.render('detalleIndex', {
        titulo: 'Detalles',
        lista,
    });
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
        const { iddetalle } = req.query;
        var texto="";
        try {
            var buscarDetalle = await Detalles.findOne({
                where:{
                    iddetalle: iddetalle
                }
            });
            if(!buscarDetalle){
                texto="El detalle no existe";
            }
            else{
                await Detalles.destroy({where:{iddetalle: iddetalle}})
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