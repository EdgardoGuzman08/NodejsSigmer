const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const Productos = db.define(
    'productos',
    {
        idproducto:{
            type: DataTypes.STRING(15),
            primaryKey: true,
            allowNull: false,
            field: 'Codigo'
        },
        nombreproducto:{
            type: DataTypes.STRING(40),
            allowNull: false,
            field: 'Nombre'
        },
        foto:{
            type: DataTypes.STRING(80),
            allowNull: true,
            field: 'IMAGEN'
        },
        precioproducto:{
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: 'Precio'
        }
    },
    {
        tableName: 'productos',
        timestamps: false
    }
);
module.exports = Productos;