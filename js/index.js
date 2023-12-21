let contador = 0;
let suma = 0;
let descuento = 0;
let total = 0;
let cantArticulo = 0;

const PRODUCTOS = [
        
    { 
        id: 1,
        img: "img/pantalones1.jpg",
        producto:"Pantalones",
        precio:25,
        cantidad: 1
    },
    { 
        id: 2,
        img: "img/camisetas1.jpg",
        producto:"Camisetas",
        precio:15,
        cantidad: 1
    },
    { 
        id: 3,
        img: "img/imanes1.jpg",
        producto:"Imanes",
        precio:10,
        cantidad: 1
    },
    { 
        id: 4,
        img: "img/poncho1.jpeg",
        producto:"ponchos",
        precio:85,
        cantidad: 1
    },
    { 
        id: 5,
        img: "img/pulseras1.jpg",
        producto:"pulseras",
        precio:20,
        cantidad: 1
    },
    { 
        id: 6,
        img: "img/hamaca1.jpeg",
        producto:"hamacas",
        precio:40,
        cantidad: 1
    },
    { 
        id: 7,
        img: "img/taza.jpeg",
        producto:"tazas",
        precio:12,
        cantidad: 1
    },
    { 
        id: 8,
        img: "img/vestido.jpeg",
        producto:"vestidos",
        precio:40,
        cantidad: 1
    },
    { 
        
        id: 9,
        img: "img/sandalias.jpg",
        producto:"sandalias",
        precio:25,
        cantidad: 1
    },
    { 
        id: 10,
        img: "img/gorras.jpeg",
        producto:"gorras",
        precio:20,
        cantidad: 1
    }
    
]

// Tarjeta de productos
function generarTarjetaProductos() {
    const CONTENEDOR_PRODUCTOS = document.getElementById('productos');
    PRODUCTOS.forEach(producto => {
        const PRODUCTOS_ELEMENTOS = document.createElement('div');
        PRODUCTOS_ELEMENTOS.classList.add('producto');
        PRODUCTOS_ELEMENTOS.innerHTML = `
        
            <div class="card" style="width:300px">
                <img class="card-img-top" src="${producto.img}">
                <div class="card-body">
                    <p class="card-text">${producto.producto}</p>
                    <p class="card-text">${producto.precio}</p>
                    <button class="btn btn-grad form-control mb-3" id="boton${producto.id}" > Añadir al Carrito </button>
                </div>
            </div>
        
        `;
        CONTENEDOR_PRODUCTOS.appendChild(PRODUCTOS_ELEMENTOS)
        const BOTON = document.getElementById(`boton${producto.id}`);
        BOTON.addEventListener('click', () =>{
        agregarAlCarrito(producto.id, producto.producto, producto.precio, producto.cantidad);
    
        });
    });

}
// Funcion Agregar al Carrito
//

function agregarAlCarrito(id, producto, precio, cantidad) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(item => item.id === id);
    
    if (productoEnCarrito) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        productoEnCarrito.cantidad += cantidad;
    } else {
        // Si el producto no está en el carrito, agregarlo con su cantidad
        const productoSeleccionado = PRODUCTOS.find(item => item.id === id);
        carrito.push({ id, producto, precio, cantidad, img: productoSeleccionado.img });
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}


//funcion mostrar los productos en el carrito

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaProductos = document.getElementById('lista-productos');
    const totalElement = document.getElementById('total');
    const contadorContenedor = document.getElementById('contador-productos');
    let total = 0;
    let count = 0;
    listaProductos.innerHTML = '';

    carrito.forEach(producto => {
        const card = document.createElement('div');
        // card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-6">
                <img class="img-fluid rounded-start" src="${producto.img}">
                </div>
                <div class="col-md-6">
                <div class="card-body">
                    <h3 class="card-title">${producto.producto}</h3>
                    <h6 class="card-title">Precio: $${producto.precio}</h6>
                    <h6 class="card-title"> Cantidad: ${producto.cantidad}</h6>
                    <button class="btn btn-grad form-control mb-3 mt-4" id="eliminar${producto.id}" > Eliminar </button>
                </div>
                </div>
            </div>
        </div>
        `;
        listaProductos.appendChild(card);
        total += producto.precio * producto.cantidad;
        count += producto.cantidad;
        localStorage.setItem("total", JSON.stringify(total));

        //eliminar el productoeliminar
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        });
    });

    totalElement.textContent = total.toFixed(2);
    contadorContenedor.textContent = count;
}

function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

//function para vaciar el carrito

function vaciarCarrito(){
    localStorage.removeItem('carrito');
    mostrarCarrito();

}

generarTarjetaProductos();
mostrarCarrito();

 //Funciones para los metodos de pago
function pagoEnEfectivo() {
    const suma = JSON.parse(localStorage.getItem('total'));
    descuento = suma * 0.05;
    total = suma - descuento; 
    swal("El total de tu compra aplicando tu beneficio según tu método de pago seleccionado es: $" + total);
    vaciarCarrito();
}

function pagoEnTarjeta() {
    const suma = JSON.parse(localStorage.getItem('total'));
    descuento = suma * 0.07;
    total = suma + descuento;
    swal("El total de tu compra aplicando tu beneficio según tu método de pago seleccionado es: $" + total);
    vaciarCarrito();
}

function pagoTransferencia(){
    const suma = JSON.parse(localStorage.getItem('total'));
        total = suma;
        swal("El total de tu compra aplicando tu beneficio según tu método de pago seleccionado es: $" + total);
        vaciarCarrito();
};
