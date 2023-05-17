$(document).ready(function($){

    $(".eliminar").on("click", function(){
        $.post(
            $(this).val(),
            {
                iddetalle: $("#inputDetalle").val()
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });
});
    