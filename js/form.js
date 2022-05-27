function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let localidad = document.getElementById("localidad").value;
    let provincia = document.getElementById("provincia").value;
    let resultado_form = document.getElementById("resultado_form");

    if (nombre.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Nombre!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }

    if (email.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Email!</div>";
        return false;
    } else if (email.indexOf("@") == -1) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese correctamente el Email para el campo Email!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }

    if ((telefono.length != 14)) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese correctamenteun valor para el campo Telefono! Debe tener 13 caracteres.</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }

    if (direccion.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Dirección!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }
    
    //Creo un objeto con los datos del usuario
    let datos_formulario = {usuario_nombre:nombre, usuario_email:email, usuario_telefono:telefono, usuario_direccion:direccion, usuario_localidad:localidad, usuario_provincia:provincia};
    //Creo una localStorage con los datos del formulario en un array
    localStorage.setItem("datos_formulario", JSON.stringify(datos_formulario));
    //Redireccionar mi pagina carrito.html a confirmacion.html
    document.location = "confirmacion.html";
}

document.getElementById("boton_enviar").addEventListener("click", validarFormulario);