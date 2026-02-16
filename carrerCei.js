// 1. Array de objetos: La "Base de Datos" temporal
const inventario = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 35, stock: 5 },
    { nombre: "Gorra", precio: 15, stock: 0 }
];

// 2. Función con parámetros
function agregarCarrito(nombreProducto, cantidad) {
    
    // 3. Buscar el producto (Lógica de búsqueda)
    const producto = inventario.find(p => p.nombre === nombreProducto);

    if (producto) {
        // Validación de stock
        if (producto.stock >= cantidad) {
            const total = producto.precio * cantidad;
            // 4. Extra: Template Literal
            console.log(`Has comprado ${cantidad} unidades de ${producto.nombre} por un total de $${total}`);
        } else {
            console.log(`Advertencia: No hay suficiente stock de ${nombreProducto}.`);
        }
    } else {
        console.log("El producto no existe en el inventario.");
    }
}

// Ejemplo de ejecución
agregarCarrito("Camiseta", 2);
agregarCarrito("Pantalón", 6);
agregarCarrito("Gorra", 1);

