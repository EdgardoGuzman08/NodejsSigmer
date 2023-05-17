exports.Inicio = (req, res)=>{
    const titulo='Ejemplo de la clase de portales 2';
    res.render('inicio', {
        titulo,
    });
}
exports.Home = (req, res)=>{
    const titulo='Ejemplo vista en node js';
    res.render('home', {
        titulo,
    });
}