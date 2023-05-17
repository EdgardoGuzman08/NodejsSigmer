const Pedidos = require('../modelos/modelopedidos');
const Entrar = require('../controladores/controladorEntre');
const { validationResult } = require('express-validator');
const { text } = require('express');

exports.Lista = async (req, res) =>{
    const lista = await Pedidos.findAll();
    console.log(lista);
    res.render('pedidosIndex', {
        titulo: 'Pedidos',
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
        const { idpedidos } = req.query;
        var texto="";
        try {
            var buscarPedidos = await Pedidos.findOne({
                where:{
                    idpedidos: idpedidos
                }
            });
            if(!buscarPedidos){
                texto="El pedido no existe";
            }
            else{
                await Pedidos.destroy({where:{idpedidos: idpedidos}})
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