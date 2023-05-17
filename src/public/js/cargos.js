
$(document).ready(function($){

    $(".guardar").on("click", function(){
        $.post(
            $(this).val(),
            {
                nombre: $("#inputNombre").val(),
                descripcion: $("#textareaDescricion").val()
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });

    $(".eliminar").on("click", function(){
        $.post(
            $(this).val(),
            {
                id: $("#id").val(),
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });
});
    