const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const Login = db.define(
    'login',
    {
        idusuario:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id'
        },
        idclientefk:{
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'idcliente'
        },
        usuario:{
            type: DataTypes.STRING(250),
            allowNull: false,
            field: 'correo'
        },
        gmail:{
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'gmail'
        },
        facebook:{
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'facebook'
        },
        password:{
            type: DataTypes.STRING(250),
            allowNull: false,
            field: 'contrasena'
        },
        loguedo:{
            type: DataTypes.TINYINT(1),
            allowNull: true,
            field: 'logueado'
        },
        activo:{
            type: DataTypes.TINYINT(1),
            allowNull: true,
            field: 'activo'
        },
        pin:{
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'pin'
        },
        expiration:{
            type: DataTypes.DATE,
            allowNull: true,
            field: 'expiration'
        }
    },
    {
        tableName: 'usuarioclientes',
        timestamps: false
    }
);
module.exports = Login;