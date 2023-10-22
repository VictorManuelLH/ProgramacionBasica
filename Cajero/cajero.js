class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero() {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero -= (bi.valor * papeles);
        }
    }

    if (dinero > 0) {
        resultado.innerHTML = "Soy un cajero malo y no se que hacer con esa cantidad dinero";
    } else {
        for (var e of entregado) {
            crearBilletes(e.valor, e.cantidad);
        }
    }
}

function crearBilletes(valor, numero) {
    for (var j = 0; j < numero; j++) {
        var img = document.createElement('img');
        switch (valor) {
            case 50:
                img.src =
                    'http://www.uscurrency.gov/sites/default/files/styles/bill_version/public/denominations/50_1997-2004-front.jpg?itok=yB1GwX6q';
                break;
            case 20:
                img.src =
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/US_%2420_Series_2006_Obverse.jpg/255px-US_%2420_Series_2006_Obverse.jpg';
                break;
            case 10:
                img.src =
                    'https://ca-times.brightspotcdn.com/dims4/default/1e2a56a/2147483647/strip/true/crop/2000x854+0+0/resize/840x359!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F38%2F63%2F41c5de26aa74fdb7d35633811e56%2Fhoyla-usa-billetes-de-10-dolares-tendran-rostr-001';
                break;
            case 5:
                img.src =
                    'http://www.uscurrency.gov/sites/default/files/styles/bill_version/public/denominations/5_1993-2000-front_0.jpg?itok=tqt5d-zI';
                break;
            case 1:
                img.src =
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/United_States_one_dollar_bill%2C_obverse.jpg/640px-United_States_one_dollar_bill%2C_obverse.jpg';
        }
        document.getElementById('body').appendChild(img);
    }

}


var caja = [];
var entregado = [];

caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 10));
caja.push(new Billete(1, 10));

var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);