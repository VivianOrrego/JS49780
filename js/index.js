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
        precio:25
    },
    { 
        id: 2,
        img: "img/camisetas1.jpg",
        producto:"Camisetas",
        precio:15
    },
    { 
        id: 3,
        img: "img/imanes1.jpg",
        producto:"Imanes",
        precio:10
    },
    { 
        id: 4,
        img: "img/poncho1.jpeg",
        producto:"ponchos",
        precio:85
    },
    { 
        id: 5,
        img: "img/pulseras1.jpg",
        producto:"pulseras",
        precio:20
    },
    { 
        id: 6,
        img: "img/hamaca1.jpeg",
        producto:"hamacas",
        precio:40
    },
    { 
        id: 7,
        img: "img/taza.jpeg",
        producto:"tazas",
        precio:12
    },
    { 
        id: 8,
        img: "img/vestido.jpeg",
        producto:"vestidos",
        precio:40
    },
    { 
        
        id: 9,
        img: "img/sandalias.jpg",
        producto:"sandalias",
        precio:25
    },
    { 
        id: 10,
        img: "img/gorras.jpeg",
        producto:"gorras",
        precio:20
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
                    <button class="btn btn-grad form-control mb-3" onclick="agregarAlCarrito(${producto.id},'${producto.producto}', ${producto.precio})"> Añadir al Carrito </button>
                </div>
            </aside>
        
        `;
        CONTENEDOR_PRODUCTOS.appendChild(PRODUCTOS_ELEMENTOS)
    })

;}


// Funcion Agregar al Carrito

function agregarAlCarrito(id,producto,precio){
    
    const carrito= JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({id, producto, precio});
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

    listaProductos.innerHTML = '';

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${producto.producto}</span>
            <span>$${producto.precio}</span>
        `;
        listaProductos.appendChild(listItem);
        
        total += producto.precio;
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

