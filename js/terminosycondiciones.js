
    // Función para mostrar la alerta
    function mostrarAlerta() {
        // Mostrar la alerta con un mensaje
        var respuesta = window.confirm("Aviso de Privacidad Simplificado. La Facultad de Medicina Veterinaria y Zootecnia de la Universidad Nacional Autónoma de México (UNAM), es responsable del tratamiento de sus datos personales para el registro de usted en calidad de alumno, docente, administrativo, conferencista, invitado externo a la Universidad (nacional o extranjero), visitante, proveedor o cliente de cualquiera de los servicios que preste la Facultad de Medicina Veterinaria y Zootecnia de la UNAM. Para cumplir las finalidades necesarias anteriormente descritas u otras exigidas legalmente o por cualquier autoridad competente se podrán transferir sus datos personales. Podrá ejercer sus derechos ARCO en la Unidad de Transparencia de la UNAM, o a través de la: Plataforma Nacional de Transparencia. El aviso de privacidad integral se puede consultar en el sitio web: http://www.fmvz.unam.mx");

        // Verificar la respuesta del usuario
        if (respuesta) {
            alert("Has aceptado. Puedes continuar.");
        } else {
            alert("Has cancelado. No puedes continuar.");
            // Puedes agregar aquí más acciones si el usuario ha cancelado
        }
    }

    // Llamar a la función cuando se carga la página
    mostrarAlerta();
