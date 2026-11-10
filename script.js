

const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu-principal");

/* ---------- FUNCIÓN TRADICIONAL ----------
   Abre y cierra (toggle) el menú desplegable en dispositivos móviles. */
function alternarMenu() {
    const abierto = menu.classList.toggle("abierto");

    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    botonMenu.querySelector("i").className = abierto
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
}

botonMenu.addEventListener("click", alternarMenu);

/* ---------- FUNCIONES FLECHA ---------- */

// Cierra el menú al elegir una opción (solo si está abierto)
const cerrarMenu = () => {
    if (menu.classList.contains("abierto")) {
        alternarMenu();
    }
};

menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
});

// Alerta interactiva de los botones de compra
const avisarCompra = (evento) => {
    const producto = evento.currentTarget.closest("article");
    const nombre = producto.querySelector("h3").textContent;
    const precio = producto.querySelector(".precio").textContent;

    alert(`¡Añadiste "${nombre}" al carrito por ${precio}!`);
};

document.querySelectorAll(".comprar").forEach((boton) => {
    boton.addEventListener("click", avisarCompra);
});

// Alerta al enviar el formulario de contacto
const enviarContacto = (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    alert(`¡Gracias, ${nombre}! Recibimos tu mensaje y te respondemos a la brevedad.`);

    evento.target.reset();
};

document
    .getElementById("formulario-contacto")
    .addEventListener("submit", enviarContacto);

const inputFiltro = document.getElementById("buscador");

const filtrarProductos = (evento) => {
    const textoBusqueda = evento.target.value.toLowerCase().trim();
    const tarjetas = document.querySelectorAll(".productos article");

    tarjetas.forEach((tarjeta) => {
        const nombre = tarjeta.querySelector("h3").textContent.toLowerCase();

        
        tarjeta.style.display = nombre.includes(textoBusqueda) ? "" : "none";
    });
};

inputFiltro.addEventListener("input", filtrarProductos);