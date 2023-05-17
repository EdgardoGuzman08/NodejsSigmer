const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const Cliente = db.define(
    'cliente',
    {
        idcliente:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'idregistro'
        },
        rtn:{
            type: DataTypes.STRING(16),
            allowNull: true,
            field: 'RTN'
        },
        nombrecliente:{
            type: DataTypes.STRING(30),
            allowNull: false,
            field: 'Nombre'
        },
        direccioncliente:{
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'Direccion'
        },
        telefonocliente:{
            type: DataTypes.STRING(30),
            allowNull: true,
            field: 'Telefono'
        },
        correocliente:{
            type: DataTypes.STRING(250),
            allowNull: true,
            field: 'Correo'
        },
        imagencliente:{
            type: DataTypes.BLOB,//longblob preguntar al ing
            allowNull: true,
            field: 'Imagen'
        },
        nombreimagen:{
            type: DataTypes.STRING(250),
            allowNull: true,
            field: 'nombreImagen'
        }
    },
    {
        tableName: 'clientes',
        timestamps: false
    }
);
module.exports = Cliente;