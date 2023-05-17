$(document).ready(function($){

    $(".guardardireccion").on("click", function(){
        $.post(
            $(this).val(),
            {
                idclientess: $("#inputClienteid").val(),
                clientedireccion: $("#textClienteDireccion").val(),
                creada: $("#inputCreada").val()
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });

    $(".eliminardireccion").on("click", function(){
        $.post(
            $(this).val(),
            {
                iddireccion: $("#inputDireccionid").val()
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });
});
    