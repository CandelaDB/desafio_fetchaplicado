/*Swal.fire({
    icon: 'warning',
    title: 'error',
    text: '¿Queres continuar?',
    confirmButtonText:'Ok,gracias!',
    })*/
function mostrarErrorCampo(campo) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Complete el campo ' + campo,
        confirmButtonText:'Aceptar',
        });
}

function mostrarFormEnviado(){
    Swal.fire({
        icon: 'success',
        title: 'Gracias',
        text: 'Su consulta fue enviada correctamente, gracias!',
        confirmButtonText:'Aceptar',
        });
}





function validarFormulario() {
    let campo_nombre = document.getElementById("nombre").value;
    let campo_email = document.getElementById("email").value;
    let campo_tel = document.getElementById("tel").value;

    if (campo_nombre.length == 0) {
        mostrarErrorCampo("nombre");
            return false;
    }

    if (campo_email.length == 0) {
        mostrarErrorCampo("email");
            return false;
    }
    if (campo_tel.length == 0) {
        mostrarErrorCampo("tel");
            return false;
    }
    mostrarFormEnviado();
}
document.getElementById("boton").addEventListener("click", validarFormulario);