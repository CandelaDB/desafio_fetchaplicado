const productos = [
    {id:1, nombre:"Shampoo Restore", descripcion:"El primer paso para restaurar el cabello y romper el ciclo del daño.", mililitros:236, imagen:"a4f25c_bededaf672d84d90a3046f41abf388c4_mv2.jpg", precio:500},
    {id:2, nombre:"Acondicionador No Frizz", descripcion:"Un acondicionador ligero que desenreda, acondiciona y combate el frizz. Desarrollado con nuestra molécula patentada para un cabello sano (OFPMA), que es el mayor avance en tecnología anti-frizz en más de 30 años.", imagen:"a4f25c_0837ab15470b445f993d7ba254a062cf_mv2.jpg", mililitros:236, precio:600},
    {id:3, nombre:"Aceite de Cuidado", descripcion:"Aceite multi propósito. Línea de productos para todo tipo de cabello, libre de sulfatos surfactantes, parabenos y siliconas.", mililitros:100, imagen:"7ac9db_9c87ae94309b48f9916919ac0104b5d8_mv2.png", precio:700},
    {id:4, nombre:"Shampoo Illuminating", descripcion:"CHAMPÚ DELICADO ILUMINADOR PARA CABELLOS NORMALES. Libre de sulfatos, parabenos e ingredientes nocivos, combina los beneficios de las vitaminas y los aceites naturales para producir resultados deslumbrantes.", mililitros:250, imagen:"a4f25c_f871f812bb4e4c2d91ac8817dd056331_mv2.jpg", precio:800},
    {id:5, nombre:"Kit Fortalecedor Amplify", descripcion:"Línea para dar volumen para cabello fino o sin cuerpo, libre de sulfatos surfactantes, parabenos y siliconas. Con fórmula vegana y extracto de lima y té verde proporciona volumen y cuerpo al cabello.", mililitros:300, imagen:"7ac9db_f367b891ee7c4b04a28486a0979081dd_mv2.png", precio:900}
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function verProducto(id) {
    localStorage.setItem("ver_producto", id);
    document.location = "ver-producto.html";
}