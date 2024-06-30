let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;   
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
   
    if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute('disabled');
} else { 
    if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'el numero secreto es menor');
    } else {
        asignarTextoElemento('p','el numero secreto es mayor'); 
    }
    intentos++;
    limpiarCaja();
    }
}
function limpiarCaja () {
    let valorCaja = document.querySelector('#valorUsuario').value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo +1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p','Ya se sortearon todos los numeros posibles');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }

}
function codicionesIniciales() {
    asignarTextoElemento('h1', "El juego del número secreto");
    asignarTextoElemento('p',`Meindicas un número entre 1 y ${numeroMaximo}`);   
}

function reiniciarJuego() {
limpiarCaja();
codicionesIniciales();
numeroSecreto = generarNumeroSecreto();
document.querySelector('#reiniciar').setAttribute('disabled', 'true');

};
asignarTextoElemento('h1', "El juego del número secreto");
asignarTextoElemento('p','Meindicas un número entre 1 y 10'); 

codicionesIniciales();