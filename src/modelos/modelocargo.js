const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const Cargo = db.define(
    'cargo',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'CodigoCargo'
        },
        nombre:{
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'NombreCargo'
        },
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'DescripcionCargo'
        }
    },
    {
        tableName: 'cargos',
        timestamps: false
    }
);
module.exports = Cargo;