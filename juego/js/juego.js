
function comprobar(eleccion) {
    var ganaJugador = false;
    var ganaMaquina = false;
    var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    var aleatorio = Math.floor(Math.random() * 4) + 0;
    var jugadaMaquina = opciones[aleatorio];
    var motivo;

    switch (eleccion) {
        case "piedra":
            if (jugadaMaquina == "papel") { ganaMaquina = true; motivo = "papel envuelve a piedra"}
            if (jugadaMaquina == "tijera") { ganaJugador = true; }
            if (jugadaMaquina == "lagarto") { ganaJugador = true; }
            if (jugadaMaquina == "spock") { ganaMaquina = true; }
            break;
        case "papel":
            if (jugadaMaquina == "piedra") { ganaJugador = true; }
            if (jugadaMaquina == "tijera") { ganaMaquina = true; }
            if (jugadaMaquina == "lagarto") { ganaMaquina = true; }
            if (jugadaMaquina == "spock") { ganaJugador = true; }
            break;
        case "tijera":
            if (jugadaMaquina == "piedra") { ganaMaquina = true; }
            if (jugadaMaquina == "papel") { ganaJugador = true; }
            if (jugadaMaquina == "lagarto") { ganaJugador = true; }
            if (jugadaMaquina == "spock") { ganaMaquina = true; }
            break;
        case "lagarto":
            if (jugadaMaquina == "piedra") { ganaMaquina = true; }
            if (jugadaMaquina == "papel") { ganaJugador = true; }
            if (jugadaMaquina == "tijera") { ganaMaquina = true; }
            if (jugadaMaquina == "spock") { ganaJugador = true; }
            break;
        case "spock":
            if (jugadaMaquina == "piedra") { ganaJugador = true; }
            if (jugadaMaquina == "papel") { ganaMaquina = true; }
            if (jugadaMaquina == "tijera") { ganaJugador = true; }
            if (jugadaMaquina == "lagarto") { ganaMaquina = true; }
            break;
        default: break;

    }

    if (ganaJugador) {
        sumarPunto("Jugador", motivo);
    } else if (ganaMaquina) {
        sumarPunto("Maquina", motivo);
    } else {
        mostrarMensaje("empate");
    }
    ganaJugador = false;

    ganaMaquina = false;
}

// Cuando un jugador gane un punto, se le añadirá un div en la barra de puntuaciones
function sumarPunto(ganador, motivo) {
    var divPuntos = document.getElementById("puntos" + ganador);
    var punto = document.createElement("div");
    punto.style.border = "1px solid blueviolet";
    punto.style.backgroundColor = "red";

    divPuntos.appendChild(punto);

    console.log(ganador + " " + divPuntos.children.length);

    if (divPuntos.children.length == 10) {
        mostrarMensaje("Ha ganado: " + ganador + " porque ", motivo);
        resetearPartida(ganador);
    } else {
        mostrarMensaje("Ha ganado: " + ganador + " porque ", motivo);
    }
}

// Borra todo lo que tenga dentro de los grids y reinicia la partida
function resetearPartida(ganador) {
    var divPuntosJugador = document.getElementById("puntosJugador");
    var divPuntosMaquina = document.getElementById("puntosMaquina");

    divPuntosJugador.innerHTML = "";
    divPuntosMaquina.innerHTML = "";

}

function mostrarMensaje(texto, motivo) {
    var parrafoTexto = document.getElementById("texto");
    parrafoTexto.innerText = texto;
}