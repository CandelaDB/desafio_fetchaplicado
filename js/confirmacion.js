actualizarBotonCarrito();

const carrito = JSON.parse(localStorage.getItem("carrito"));
const datos_formulario = JSON.parse(localStorage.getItem("datos_formulario"));
const resumen_compra = document.getElementById("resumen_compra");
let total_pagar = 0;

let contenido = `<div class='col-md-6 bg-light p-3'>
<h3>Productos</h3>
<ul class="list-group list-group-flush bg-light">`;

for (let producto of carrito) {
    contenido += `<li class="list-group-item bg-light">${producto.nombre} - $${producto.precio}</li>`;
    total_pagar += producto.precio;
}

contenido += `</ul>
<p class='list-group-item bg-light'>Total a Pagar: <b>$${total_pagar}</b></p>
</div>`;
contenido += `<div class='col-md-6 bg-light p-3'>
<h3>Datos del Comprador</h3>
<ul class="list-group list-group-flush">
<li class="list-group-item bg-light">Nombre: <b>${datos_formulario.usuario_nombre}</b></li>
<li class="list-group-item bg-light">Email: <b>${datos_formulario.usuario_email}</b></li>
<li class="list-group-item bg-light">Teléfono: <b>${datos_formulario.usuario_telefono}</b></li>
<li class="list-group-item bg-light">Dirección: <b>${datos_formulario.usuario_direccion}</b></li>
<li class="list-group-item bg-light">Localidad: <b>${datos_formulario.usuario_localidad}</b></li>
<li class="list-group-item bg-light">Provincia: <b>${datos_formulario.usuario_provincia}</b></li>
</ul>
</div>
<div class='col-md-12 text-center p-5'>
<button class='btn'>Finalizar Compra</button>
</div>`;
resumen_compra.innerHTML = contenido;