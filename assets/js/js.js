$(document).ready(function () {
    console.log('ready');

    //Smooth Scroll
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    //Tooltip boton Siguiente en carousel
    $('#next').tooltip({
        title: 'Siguiente imagen',
        placement: 'auto'
    });

    //Tooltip boton Anterior en carousel
    $('#prev').tooltip({
        title: 'Imagen anterior',
        placement: 'auto'
    });

    //Desaparece destacados
    $('#desid').on('click', function () {
        $('#dessec').toggle();
    });

    //Modal boton Enviar
    $('#enviar').on('click', function(){
        $('#miModal').modal('show');
    });

    //ocultar boton Aceptar
    $('#aceptar').on('click', function(){
        $('#miModal').modal('hide');
    });


    
});
