var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new pokiman("Cauchin", 100, 30));
coleccion.push(new pokiman("Pokacho", 80, 50));
coleccion.push(new pokiman("Tocinauro", 120, 40));

for (var pakin of coleccion) {
    pakin.hablar();
    pakin.mostrar();
}

for (var x in coleccion[0]) {
    console.log(x);
}

console.log(coleccion);