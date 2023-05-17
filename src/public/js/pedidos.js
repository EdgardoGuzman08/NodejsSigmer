$(document).ready(function($){

    $(".borrarpedido").on("click", function(){
        $.post(
            $(this).val(),
            {
                idpedidos: $("#inputPedidos").val()
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });
});
