
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
            if (jugadaMaquina == "tijera") { ganaJugador = true; motivo = "piedra rompe tijeras"}
            if (jugadaMaquina == "lagarto") { ganaJugador = true; motivo = "piedra aplasta a lagarto"}
            if (jugadaMaquina == "spock") { ganaMaquina = true; motivo = "Spock desintegra piedra"}
            break;
        case "papel":
            if (jugadaMaquina == "piedra") { ganaJugador = true; motivo = "papel envuelve a piedra"}
            if (jugadaMaquina == "tijera") { ganaMaquina = true; motivo = "tijeras cortan papel"}
            if (jugadaMaquina == "lagarto") { ganaMaquina = true; motivo = "lagarto se come papel" }
            if (jugadaMaquina == "spock") { ganaJugador = true; motivo = "papel desautoriza Spock"}
            break;
        case "tijera":
            if (jugadaMaquina == "piedra") { ganaMaquina = true; motivo = "piedra rompe tijeras"}
            if (jugadaMaquina == "papel") { ganaJugador = true; motivo = "tijeras cortan papel" }
            if (jugadaMaquina == "lagarto") { ganaJugador = true; motivo= "tijeras decapitan al lagarto"}
            if (jugadaMaquina == "spock") { ganaMaquina = true; motivo = "Spock rompe tijeras"}
            break;
        case "lagarto":
            if (jugadaMaquina == "piedra") { ganaMaquina = true; motivo = "piedra aplasta a lagarto"}
            if (jugadaMaquina == "papel") { ganaJugador = true; motivo = "lagarto se come papel"}
            if (jugadaMaquina == "tijera") { ganaMaquina = true; motivo = "tijeras decapitan al lagarto"}
            if (jugadaMaquina == "spock") { ganaJugador = true; motivo = "lagarto envenena a Spock"}
            break;
        case "spock":
            if (jugadaMaquina == "piedra") { ganaJugador = true; motivo = "Spock desintegra piedra"}
            if (jugadaMaquina == "papel") { ganaMaquina = true; motivo = "papel desautoriza Spock"}
            if (jugadaMaquina == "tijera") { ganaJugador = true; motivo = "Spock rompe tijeras"}
            if (jugadaMaquina == "lagarto") { ganaMaquina = true; motivo = "lagarto envena a Spock"}
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

    console.log(motivo);

    mostrarMensaje("Ha ganado " + ganador + " porque " + motivo);

    if (divPuntos.children.length == 10) {
       
        alert("Ha ganado " + ganador)
        
        resetearPartida(ganador);
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