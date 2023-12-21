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
        
            <aside class="card" style="width:300px">
                <img class="card-img-top" src="${producto.img}">
                <div class="card-body">
                    <p class="card-text">${producto.producto}</p>
                    <p class="card-text">${producto.precio}</p>
                    <button class="btn btn-grad form-control mb-3" onclick="agregarAlCarrito(${producto.id},${producto.producto}, ${producto.precio}),${producto.cantidad}"> Añadir al Carrito </button>
                </div>
            </aside>
        
        `;
        CONTENEDOR_PRODUCTOS.appendChild(PRODUCTOS_ELEMENTOS)
    })

;}


// Funcion Agregar al Carrito

function agregarAlCarrito(id,producto,precio,cantidad){
    
    const carrito= JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(carrito);
    carrito.push({id, producto, precio, cantidad});
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    
}
;

//funcion mostrar los productos en el carrito

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito'))|| [];
    const listaProductos = document.getElementById('lista-productos');
    const totalElement = document.getElementById('total');
    let total = 0;
    let count = 0;
    let totalOfProducts = 0;

    listaProductos.innerHTML = '';

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <div class="info-cart-product ">
            <span>${producto.id}</span>
            <span>${producto.producto}</span>
            <span>$${producto.precio}</span>
            <span>$${producto.cantidad}</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
            >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
            />
            </svg>
            </div>
        `;
        listaProductos.appendChild(listItem);
        count += producto;    
        total += producto.precio;

        // total =
		// 	total + parseInt(producto.cantidad * producto.precio.slice(1));
		// totalOfProducts = totalOfProducts + producto.precio;

        localStorage.setItem("total", JSON.stringify(total));
    });
    
    totalElement.textContent = total;
};

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
}

