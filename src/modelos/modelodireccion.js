const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const Direccion = db.define(
    'cliente_direccion',
    {
        iddireccion:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id'
        },
        idclientess:{
            type: DataTypes.INTEGER,
            ForeignKey: true,
            allowNull: false,
            field: 'idcliente'
        },
        clientedireccion:{
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'direccion'
        },
        creada:{
            type: DataTypes.DATE,
            allowNull: true,
            field: 'creada'
        }
    },
    {
        tableName: 'clientes_direcciones',
        timestamps: false
    }
);
module.exports = Direccion;