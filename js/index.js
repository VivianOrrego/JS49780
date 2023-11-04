let contador = 0;
let suma = 0;
let descuento = 0;
let total = 0;

const CANT_ARTICULO = parseInt(prompt("Esta es la lista de nuestros articulos disponibles: 1. Pantalones / 2. Camisetas / 3. Imanes / 4. Ponchos / 5. Pulseras / 6. Hamacas / 7. Tazas / 8. Vestidos / 9. Sandalias / 10. Gorras, ¿Cuántos deseas elegir?"));

// while (isNaN(CANT_ARTICULO)  || CANT_ARTICULO < 1 ) {
//     alert("Por favor, ingresa un número válido mayor a cero.");
//     CANT_ARTICULO = parseInt(prompt("Esta es la lista de nuestros artículos disponibles: 1. Pantalones / 2. Camisetas / 3. Imanes / 4. Ponchos / 5. Pulseras / 6. Hamacas / 7. Tazas / 8. Vestidos / 9. Sandalias / 10. Gorras, ¿Cuántos deseas elegir?"));
// }

while (contador < CANT_ARTICULO) {
    const ARTICULO = parseInt(prompt("1. Pantalones $25 /  2. Camisetas $15 / 3. Imanes $10 / 4. Ponchos $85 / 5. Pulseras $20 / 6. Hamacas $40 / 7. Tazas $12 / 8. Vestidos $45 / 9. Sandalias $28 / 10. Gorras $20 / ¿Qué deseas comprar?"));

    if (ARTICULO >= 1 && ARTICULO <= 10) {
        switch (ARTICULO) {
            case 1:
                alert("Has seleccionado los pantalones de $25");
                suma += 25;
                break;
            case 2:
                alert("Has seleccionado las camisetas de $15");
                suma += 15;
                break;
            case 3:
                alert("Has seleccionado los imanes de $10");
                suma += 10;
                break;
            case 4:
                alert("Has seleccionado los ponchos de $85");
                suma += 85;
                break;
            case 5:
                alert("Has seleccionado las pulseras de $20");
                suma += 20;
                break;
            case 6:
                alert("Has seleccionado las hamacas de $40");
                suma += 40;
                break;
            case 7:
                alert("Has seleccionado las tazas de $12");
                suma += 12;
                break;
            case 8:
                alert("Has seleccionado los vestidos de $45");
                suma += 45;
                break;
            case 9:
                alert("Has seleccionado las sandalias de $28");
                suma += 28;
                break;
            case 10:
                alert("Has seleccionado las gorras de $20");
                suma += 20;
                break;
        }
        contador++;
    } else {
        alert("Selección inválida. Por favor, elige un número del 1 al 10.");
    }
}


const METODO_DE_PAGO = parseInt(prompt("¿Qué método de pago deseas usar? 1. Efectivo / 2. Tarjeta / 3. Transferencia"));

function pagoEnEfectivo() {
    descuento = suma * 0.05;
    total = suma - descuento;
}

function pagoEnTarjeta() {
    descuento = suma * 0.07;
    total = suma + descuento;
}

if (METODO_DE_PAGO === 1) {
    alert("Por seleccionar el método de pago en efectivo, tienes un descuento del 5%");
    pagoEnEfectivo();
} else if (METODO_DE_PAGO === 2) {
    alert("Por seleccionar el método de pago con tarjeta, te sumamos el 7% de impuesto");
    pagoEnTarjeta();
} else if (METODO_DE_PAGO === 3) {
    alert("Por seleccionar el método de pago de transferencia, pagas el valor neto");
    total = suma;
} else {
    alert("No has seleccionado ningún método de pago");
}

alert("El subtotal de tu compra es: $" + suma);
alert("El total de tu compra aplicando tu beneficio según tu método de pago seleccionado es: $" + total);







