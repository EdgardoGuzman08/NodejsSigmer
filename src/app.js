const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const session = require('express-session');
require('dotenv').config();
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));
app.use('/public', express.static(path.join(__dirname, 'public/')));
app.use(morgan("common"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000, httpOnly: true}
}))

app.use('/app/', require('./rutas/index'));
app.use('/app/entre', require('./rutas/rutasEntre'));
app.use('/app/registrar', require('./rutas/rutasRegistro'));
app.use('/app/carrito', require('./rutas/rutasCarrito'));
app.use('/app/cargos', require('./rutas/rutasCargos'));
app.use('/app/pedidos', require('./rutas/rutasPedidos'));
app.use('/app/clientes', require('./rutas/rutasClientes'));
app.use('/app/perfil', require('./rutas/rutasPerfil'));
app.use('/app/direcciones', require('./rutas/rutasDireccion'));
app.use('/app/mesas', require('./rutas/rutasMesas'));
app.use('/app/detalles', require('./rutas/rutasDetalle'));
app.use('/app/productos', require('./rutas/rutasProductos'));
app.listen(process.env.port, () =>{
    console.log('Servidor iniciado en el puerto ' + process.env.port);
});



