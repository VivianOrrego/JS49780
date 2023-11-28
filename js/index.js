class Carrito {
    constructor(producto, precio) {
        this.producto = producto
        this.precio = precio

    }
}

let contador = 0;
let suma = 0;
let descuento = 0;
let total = 0;
let cantArticulo = 0;

while (true) {
    cantArticulo = parseInt(prompt("Esta es la lista de nuestros articulos disponibles: \n 1. Pantalones \n 2. Camisetas \n 3. Imanes \n 4. Ponchos \n 5. Pulseras \n 6. Hamacas \n 7. Tazas \n 8. Vestidos \n 9. Sandalias \n 10. Gorras \n 11. Consultar precios \n ¿Cuántos deseas elegir?"));

    if (isNaN(cantArticulo) || cantArticulo <= 0) {
        alert("Por favor, ingresa un número válido mayor a cero.");
    } else if (cantArticulo == 11){
        buscarPrecio();
    }
    
    else {
        break;
    }
}

miCompra = [];


function buscarPrecio() {
    const PRODUCTOS = [
        
        { 
            producto:"Pantalones",
            precio:25
        },
        { 
            producto:"Camisetas",
            precio:15
        },
        { 
            producto:"Imanes",
            precio:10
        },
        { 
            producto:"ponchos",
            precio:85
        },
        { 
            producto:"pulseras",
            precio:20
        },
        { 
            producto:"hamacas",
            precio:40
        },
        { 
            producto:"tazas",
            precio:12
        },
        { 
            producto:"vestidos",
            precio:40
        },
        { 
            producto:"sandalias",
            precio:25
        },
        { 
            producto:"gorras",
            precio:20
        }
        
    ]
    const BUSCADOR = prompt("Busca el precio de tu producto");
    // Usamos una función de callback en el método find
    const PRODUCTO_ENCONTRADO = PRODUCTOS.find((producto) =>
    producto.producto.toLowerCase().includes(BUSCADOR.toLowerCase())
    );
    if (PRODUCTO_ENCONTRADO) {
        console.log("El precio del producto es: ");
        console.table(PRODUCTO_ENCONTRADO);
    } else {
        alert("El producto no se encuentra");
    }
}


console.log(PRODUCTOS);

while (contador < cantArticulo) {
    const ARTICULO = parseInt(prompt(" 1. Pantalones $25 \n 2. Camisetas $15 \n 3. Imanes $10 \n 4. Ponchos $85 \n 5. Pulseras $20 \n 6. Hamacas $40 \n 7. Tazas $12 \n 8. Vestidos $45 \n 9. Sandalias $28 \n 10. Gorras $20 \n ¿Qué deseas comprar?"));
    
    const PRODUCTO1 = new Carrito("pantalon" , 25);
    const PRODUCTO2 = new Carrito("camiseta" , 15);
    const PRODUCTO3 = new Carrito("imanes" , 10);
    const PRODUCTO4 = new Carrito("ponchos" , 85);
    const PRODUCTO5 = new Carrito("pulseras" , 20);
    const PRODUCTO6 = new Carrito("hamacas" , 40);
    const PRODUCTO7 = new Carrito("tazas" , 12);
    const PRODUCTO8 = new Carrito("vestidos" , 45);
    const PRODUCTO9 = new Carrito("sandalias" , 28);
    const PRODUCTO10 = new Carrito("gorras" , 20);
    
    if (ARTICULO >= 1 && ARTICULO <= 11) {
        switch (ARTICULO) {
            case 1:
                alert("Has seleccionado los pantalones de $25"); 
                miCompra.push(PRODUCTO1);
                break;
            case 2:
                alert("Has seleccionado las camisetas de $15");
                miCompra.push(PRODUCTO2);
                break;
            case 3:
                alert("Has seleccionado los imanes de $10");
                miCompra.push(PRODUCTO3);
                break;
            case 4:
                alert("Has seleccionado los ponchos de $85");
                miCompra.push(PRODUCTO4);
                break;
            case 5:
                alert("Has seleccionado las pulseras de $20");
                miCompra.push(PRODUCTO5);
                break;
            case 6:
                alert("Has seleccionado las hamacas de $40");
                miCompra.push(PRODUCTO6);
                break;
            case 7:
                alert("Has seleccionado las tazas de $12");
                miCompra.push(PRODUCTO7);
                break;
            case 8:
                alert("Has seleccionado los vestidos de $45");
                miCompra.push(PRODUCTO8);
                break;
            case 9:
                alert("Has seleccionado las sandalias de $28");
                miCompra.push(PRODUCTO9);
                break;
            case 10:
                alert("Has seleccionado las gorras de $20");
                miCompra.push(PRODUCTO10);
                break;
        }
        contador++;
    } else {
        alert("Selección inválida. Por favor, elige un número del 1 al 10.");
    }

}
console.log(miCompra);

for (let precios of miCompra) {
    suma += precios.precio
}


function pagoEnEfectivo() {
    descuento = suma * 0.05;
    total = suma - descuento;
}

function pagoEnTarjeta() {
    descuento = suma * 0.07;
    total = suma + descuento;
}

while (true) {
    const METODO_DE_PAGO = parseInt(prompt("¿Qué método de pago deseas usar? \n 1. Efectivo \n 2. Tarjeta \n 3. Transferencia"));

    if (METODO_DE_PAGO === 1) {
        alert("Por seleccionar el método de pago en efectivo, tienes un descuento del 5%");
        pagoEnEfectivo();
        break;
    } else if (METODO_DE_PAGO === 2) {
        alert("Por seleccionar el método de pago con tarjeta, te sumamos el 7% de impuesto");
        pagoEnTarjeta();
        break;
    } else if (METODO_DE_PAGO === 3) {
        alert("Por seleccionar el método de pago de transferencia, pagas el valor neto");
        total = suma;
        break;
    } else {
        alert("No has seleccionado ningún método de pago");

    }
}

alert("El subtotal de tu compra es: $" + suma);
console.log(`El subtotal de tu compra es: ${suma}`);
alert("El total de tu compra aplicando tu beneficio según tu método de pago seleccionado es: $" + total);
console.log(`El total de tu compra con el beneficio aplicado es: ${total}`); 