
function goBack() {
    window.history.back()
}






document.getElementById('examenForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto, da tiempo al codigo kavascript de realizar sus acciones 

    // Obtén las respuestas del formulario
    var respuesta1 = document.querySelector('input[name="pregunta1"]:checked');

    //borra la opcion seleccionada despues de que se ejecute resultado
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (respuesta1) {
        if (respuesta1.value == '1') {
            window.location.href =  "retro.html#seccion1"; // Reemplaza con la URL de tu cuestionario 

        } else if (respuesta1.value == '2') {
            window.location.href =  "retro.html#seccion1"; // Reemplaza con la URL de tu cuestionario


        } else if (respuesta1.value == '3') {
            window.location.href = "retro.html#seccion1";


        } else if (respuesta1.value == '4') {
            window.location.href = "../Respuestas/respuestaspregunta1.html#RespuestaD";
        } else {
            resultado.innerHTML = 'Por favor, responde todas las preguntas.';
            imagen.style.display = "block";



        }
    }
});


