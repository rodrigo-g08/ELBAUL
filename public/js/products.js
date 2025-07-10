// public/js/products.js

function initializeProductsPage() {
    console.log("✅ initializeProductsPage() ejecutada desde products.js");

    fetch('/api/productos')
        .then(res => res.json())
        .then(data => {
            console.log("🧪 Productos cargados:", data.data.productos);
            displayProducts(data.data.productos);
        })
        .catch(error => {
            console.error("❌ Error al cargar productos:", error);
        });
}

function displayProducts(productos) {
    const container = document.getElementById("products-container");
    container.innerHTML = '';

    if (!productos || productos.length === 0) {
        container.innerHTML = '<p class="text-center">No se encontraron productos.</p>';
        return;
    }

    productos.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card">
                <img src="${product.imagenes?.[0] || '/img/placeholder.jpg'}" class="card-img-top" alt="${product.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${product.titulo}</h5>
                    <p class="card-text">S/ ${product.precio}</p>
                    <a href="/productos/${product.producto_id}" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    initializeProductsPage();
});
