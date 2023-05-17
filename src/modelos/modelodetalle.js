const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const Detalles = db.define(
    'detalle',
    {
        iddetalle:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'id'
        },
        pedidosid:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'app_pedidos_id'
        },
        productosid:{
            type: DataTypes.STRING(15),
            allowNull: true,
            field: 'productos_codigo'
        },
        cantidad:{
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: 'cantidad'
        },
        anulado:{
            type: DataTypes.TINYINT(1),
            allowNull: true,
            field: 'anulado'
        },
        recibido:{
            type: DataTypes.TINYINT(1),
            allowNull: true,
            field: 'recibido'
        },
        entregado:{
            type: DataTypes.TINYINT(1),
            allowNull: true,
            field: 'entregado'
        },
        facturado:{
            type: DataTypes.TINYINT(1),
            allowNull: true,
            field: 'facturado'
        },
        nota:{
            type: DataTypes.STRING(250),
            allowNull: true,
            field: 'nota'
        }
    },
    {
        tableName: 'app_detalle_pedidos',
        timestamps: false
    }
);
module.exports = Detalles;