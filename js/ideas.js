function buscarTitulo() {
    const texto_busqueda = document.getElementById("texto_busqueda").value;

    if (texto_busqueda.length > 1) {
        const resultado = document.getElementById("resultado");
        const url_api = "https://imdb-api.com/en/API/SearchTitle/k_op6arefq/";

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(url_api + texto_busqueda, requestOptions)
        .then(response => response.json())
        .then((data) => {
            resultado.innerHTML = "";
            let salida = "";

            if (data.results.length == 0) {
                resultado.innerHTML = "<h3 class='text-center text-white'>No se encontraron resultados. Pruebe con otro titulo!</h3>";
            } else {
                data.results.forEach(elemento => {
    
                    if (!elemento.image.includes("nopicture.jpg")) {
                        salida += "<div class='col-md-2 mb-2' style='background-image:url(" + elemento.image + "); background-repeat:no-repeat; background-size:cover; background-position:center ; height:480px;' title='" + elemento.title + " " + elemento.description + "'></div>";
                        resultado.innerHTML = salida;
                    }            
                });
            }
        })
        .catch(error => console.log('error', error));
    }
}

function limpiarResultado() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.innerHTML = `<div class="d-flex justify-content-center">
    <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>`;
}

function buscar() {
    limpiarResultado();
    buscarTitulo();
}

document.getElementById("buscar").addEventListener("click", buscar);