$(document).ready(function($){

    $(".guardarcliente").on("click", function(){
        $.post(
            $(this).val(),
            {
                rtn: $("#inputRtn").val(),
                nombrecliente: $("#inputNombre").val(),
                direccioncliente: $("#textDireccion").val(),
                telefonocliente: $("#inputTelefono").val(),
                correocliente: $("#inputCorreo").val(),
                imagencliente: $("#imagen").val(),
                nombreimagen: $("#nombreimagen").val()
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });

    $(".eliminarcliente").on("click", function(){
        $.post(
            $(this).val(),
            {
                idcliente: $("#idcliente").val(),
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });
});
    