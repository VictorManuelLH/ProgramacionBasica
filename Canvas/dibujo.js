var texto = document.getElementById("numero_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var colorDelUsuario = document.getElementById("color_usuario");
var seleccionarLado = document.getElementById("select");

var d = document.getElementById("dibujito");
ancho = d.width;
var lienzo = d.getContext("2d");



function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var xi, yf;
    var nxf, nyf;
    var colorin = colorDelUsuario.value;
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        yf = espacio * l;
        xi = espacio * (l + 1);
        nxf = 300 - xf;
        nyf = 300 - yf;

        if (seleccionarLado.value === "Todo") {
            dibujarLinea(colorin, 0, yi, xf, 300);
            dibujarLinea(colorin, xi, 0, 300, yf);
            dibujarLinea(colorin, 300, nyf, xf, 300);
            dibujarLinea(colorin, 0, yi, nxf, 0);
        } else if (seleccionarLado.value === "Izquierda inferior") {
            dibujarLinea(colorin, 0, yi, xf, 300);
        } else if (seleccionarLado.value === "derecha inferior") {
            dibujarLinea(colorin, 300, nyf, xf, 300);
        } else if (seleccionarLado.value === "derecha superior") {
            dibujarLinea(colorin, xi, 0, 300, yf);
        } else if (seleccionarLado.value === "izquierda superior") {
            dibujarLinea(colorin, 0, yi, nxf, 0);
        }
    }
    dibujarLinea(colorin, 1, 1, 1, 299);
    dibujarLinea(colorin, 1, 299, 299, 299);

    dibujarLinea(colorin, 299, 299, 299, 1);
    dibujarLinea(colorin, 299, 1, 1, 1);
}

dibujarLinea("black", 150, 150, 150, 120);
dibujarLinea("black", 150, 180, 150, 150);
dibujarLinea("black", 150, 150, 180, 150);
dibujarLinea("black", 120, 150, 150, 150);
dibujarLinea("black", 180, 150, 150, 120);
dibujarLinea("black", 150, 180, 180, 150);
dibujarLinea("black", 150, 180, 120, 150);
dibujarLinea("black", 120, 150, 150, 120);