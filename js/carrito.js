function buscarProducto(id) {
    let productos = cargarProductosLS();

    return productos.find(x => x.id == id);
}

function cargarProductosCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }

    return [];
}

function agregarAlCarrito(id) {
    let productos_carrito = cargarProductosCarrito();
    const posicion_carrito = productos_carrito.findIndex(elemento => elemento.id == id);

    if (posicion_carrito === -1) {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    } else {
        productos_carrito[posicion_carrito].cantidad += 1;
    }    

    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
    actualizarBotonCarrito();
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}

function actualizarBotonCarrito() {
    let productos_carrito = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn position-relative"><img src="../imagenes/bag-heart-fill.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${productos_carrito.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}


function agregarProducto(id) {
    let productos_carrito = cargarProductosCarrito();
    const posicion_carrito = productos_carrito.findIndex(elemento => elemento.id == id);
    productos_carrito[posicion_carrito].cantidad += 1;
    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}

function eliminarProducto(id) {
    let productos_carrito = cargarProductosCarrito();
    const posicion_carrito = productos_carrito.findIndex(elemento => elemento.id == id);
    productos_carrito[posicion_carrito].cantidad -= 1;

    if (productos_carrito[posicion_carrito].cantidad == 0) {
        productos_carrito = productos_carrito.filter(x => x.id != id);
    }
    
    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}

function cargarProductosSeleccionados() {
    if (document.getElementById("productos_seleccionados")) {
        let productos = cargarProductosCarrito();
        let productos_seleccionados = document.getElementById("productos_seleccionados");
        let contenido = "";

        if (productos.length == 0) {
            contenido = "<p class='text-center bg-light p-3'>No se encontraron Productos seleccionados!</p>";
            productos_seleccionados.innerHTML = contenido;
        } else {
            let total_pagar = 0;
            let total_mililitros = 0;
            contenido = `<table class="table table-hover">
            <tr>
            <th>&nbsp;</th>
            <th class='text-start'>Nombre</th>
            <th class='text-center'>Cantidad</th>
            <th class='text-center'>mililitros</th>
            <th class='text-center'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const producto of productos) {
                contenido += `<tr>
                <td><img src='../imagenes/${producto.imagen}' width='48' alt='${producto.nombre}' title='${producto.nombre}'></td>
                <td class='text-start'>${producto.cantidad} x ${producto.nombre}</td>
                <td class='text-center'><button class='btn' onclick='eliminarProducto(${producto.id});' title='Eliminar Producto'>-</button> <b>${producto.cantidad}</b> <button class='btn' onclick='agregarProducto(${producto.id});' title='Agregar Producto'>+</button></td>
                <td class='text-center'>${producto.mililitros * producto.cantidad} ml</td>
                <td class='text-center'><b>$${producto.precio * producto.cantidad}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${producto.id});'><img src='../imagenes/trash-fill.svg' alt='Eliminar' width='24'></button></td>
                </tr>`;
                total_mililitros += producto.mililitros * producto.cantidad;
                total_pagar += producto.precio * producto.cantidad;
            }

            contenido += `<tr class="bg-light">
            <td>&nbsp;</td>
            <td colspan='2'>Total</td>
            <td class='text-center'>${total_mililitros} ml</td>
            <td class='text-center'><b>$${total_pagar}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            productos_seleccionados.innerHTML = contenido;
        }
    }
}

document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);