const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const Pedidos = db.define(
    'pedidos',
    {
        idpedidos:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'id'
        },
        usuario_clientes_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'usuario_clientes_id'
        },
        dispositivo:{
            type: DataTypes.STRING(250),
            allowNull: false,
            field: 'dispositivo'
        },
        fechahora:{
            type: DataTypes.DATE,
            allowNull: true,
            field: 'fechahora'
        },
        activopedido:{
            type: DataTypes.TINYINT(1),
            allowNull: true,
            field: 'activo'
        },
        modalidad:{
            type: DataTypes.ENUM('ME','D0','LL'),
            allowNull: true,
            field: 'modalidad'
        },
        estado:{
            type: DataTypes.ENUM('AAA','NNN','SNN','SSN','NNS','SNS','SSS','NSS','NSN'),
            allowNull: true,
            field: 'estado'
        },
        usuarios_idregitro:{
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'usuarios_idregistro'
        },
        fechamodificacion:{
            type: DataTypes.DATE,
            allowNull: true,
            field: 'fechamodificacion'
        },
        usuariomodificacion:{
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'usuariomodificacion'
        },
        estacionmodificacion:{
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'estacionmodificacion'
        },
        precio:{
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: 'Precio'
        }
    },
    {
        tableName: 'app_pedidos',
        timestamps: false
    }
);
module.exports = Pedidos;