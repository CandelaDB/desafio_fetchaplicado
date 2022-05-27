function cargarProductos() {
    let productos = cargarProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-3">
        <div class="card">
        <a href="#" onclick="verProducto(${producto.id});"><img src="../imagenes/${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></a>
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="lead">${producto.mililitros} ml</p>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">$${producto.precio}</p>
        <a href="#" class="btn btn-dark" onclick="agregarAlCarrito(${producto.id});">Agregar (+)</a>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

guardarProductosLS(productos);
cargarProductos();
actualizarBotonCarrito();