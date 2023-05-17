
$(document).ready(function($){

    $(".registrarsesion").on("click", function(){
        $.post(
            $(this).val(),
            {
                usuario: $("#Correoinput").val(),
                password: $("#Contrasenainput").val()
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            
            window.location.replace('/app/entre');
        });
    });

});
    