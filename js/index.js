const CANT_ARTICULO = parseInt(prompt( "Esta es la lista de nuestros articulos disponibles: 1. Pantalones / 2. Camisetas / 3. Imanes / 4. Ponchos / 5. Pulseras / 6. Hamacas / 7. Tazas / 8. Vestidos / 9. Sandalias / 10. Gorras , Cuantos desea elegir?"));

let contador = 0;
let suma = 0;
let descuento = 0;
let total = 0;
const PRECIO = 0;

while(contador < CANT_ARTICULO){

    const ARTICULO = parseInt(prompt( "1. Pantalones $25 /                2. Camisetas $15 / 3. Imanes $10 / 4. Ponchos $85 / 5. Pulseras $20 /                6. Hamacas $40 / 7. Tazas $12 / 8. Vestidos $45 / 9. Sandalias $28 /                 10. Gorras $20 / Que deseas comprar?"));
    

    if (ARTICULO == 1){
        alert("Has seleccionado los pantalones de $25");
        suma = suma + 25;
    }
    else if (ARTICULO == 2){
        alert("Has seleccionado las camisetas de $15");
        suma = suma + 15;
    }
    else if (ARTICULO == 3){
        alert("Has seleccionado las imanes de $10");
        suma = suma + 10;
    }
    else if (ARTICULO == 4){
        alert("Has seleccionado los ponchos de $85");
        suma = suma + 85;
    } 
    else if (ARTICULO == 5){
        alert("Has seleccionado las pulseras de $20");
        suma = suma + 20;
    }
    else if (ARTICULO == 6){
        alert("Has seleccionado las hamacas de $40");
        suma = suma + 40;
    }        
    else if (ARTICULO == 7){
        alert("Has seleccionado las tazas de $12");
        suma = suma + 12;
    }
    else if (ARTICULO == 8){
        alert("Has seleccionado los vestidos de $45");
        suma = suma + 45;
    }
    else if (ARTICULO == 9){
        alert("Has seleccionado las sandalias de $28");
        suma = suma + 28;
    }
    else if (ARTICULO == 10){
        alert("Has seleccionado las gorras de $20");
        suma = suma + 20;
    }        
    else{
        alert("No has seleccionado ningun articulo");
        
    } 
    contador++; 
}

const METODO_DE_PAGO = (prompt(" Que metodo de pago desea usar? 1. Efectivo / 2. Tarjeta / 3. Transferencia"))

if ( METODO_DE_PAGO == 1){
    alert("Por Seleccionar el metodo de pago de efectivo tienes un descuento del 5%");
    descuento = suma * 0.05;
    total = suma - descuento;
}

else if ( METODO_DE_PAGO == 2){
    alert("Por Seleccionar el metodo de pago de tarjeta te sumamos el 7% de impuesto");
    descuento = suma * 0.07;
    total = suma + descuento;
}

else if ( METODO_DE_PAGO == 3){
    alert("Por Seleccionar el metodo de pago de transferencia Pagas el valor neto");
    total = suma;
}

else{
    alert("No has seleccionado ningun metodo de pago");
}

alert("El subtotal de tu compra es: " + suma);
alert("El total de tu compra aplicando tu beneficio segun tu metodo de pago seleccionado es: " + total);








