
function comprobar(eleccion) {
    var ganaJugador = false;
    var ganaMaquina = false;
    var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    var aleatorio = Math.floor(Math.random() * 4) + 0;
    var jugadaMaquina = opciones[aleatorio];
    var motivo;

    switch (eleccion) {
        case "piedra":
            if (jugadaMaquina == "papel") { ganaMaquina = true; motivo = "Papel envuelve a piedra"}
            if (jugadaMaquina == "tijera") { ganaJugador = true; motivo = "Piedra rompe tijeras"}
            if (jugadaMaquina == "lagarto") { ganaJugador = true; motivo = "Piedra aplasta a lagarto"}
            if (jugadaMaquina == "spock") { ganaMaquina = true; motivo = "Spock desintegra piedra"}
            break;
        case "papel":
            if (jugadaMaquina == "piedra") { ganaJugador = true; motivo = "Papel envuelve a piedra"}
            if (jugadaMaquina == "tijera") { ganaMaquina = true; motivo = "Tijeras cortan papel"}
            if (jugadaMaquina == "lagarto") { ganaMaquina = true; motivo = "Lagarto se come papel" }
            if (jugadaMaquina == "spock") { ganaJugador = true; motivo = "Papel desautoriza Spock"}
            break;
        case "tijera":
            if (jugadaMaquina == "piedra") { ganaMaquina = true; motivo = "Piedra rompe tijeras"}
            if (jugadaMaquina == "papel") { ganaJugador = true; motivo = "Tijeras cortan papel" }
            if (jugadaMaquina == "lagarto") { ganaJugador = true; motivo= "Tijeras decapitan al lagarto"}
            if (jugadaMaquina == "spock") { ganaMaquina = true; motivo = "Spock rompe tijeras"}
            break;
        case "lagarto":
            if (jugadaMaquina == "piedra") { ganaMaquina = true; motivo = "Piedra aplasta a lagarto"}
            if (jugadaMaquina == "papel") { ganaJugador = true; motivo = "Lagarto se come papel"}
            if (jugadaMaquina == "tijera") { ganaMaquina = true; motivo = "Tijeras decapitan al lagarto"}
            if (jugadaMaquina == "spock") { ganaJugador = true; motivo = "Lagarto envenena a Spock"}
            break;
        case "spock":
            if (jugadaMaquina == "piedra") { ganaJugador = true; motivo = "Spock desintegra piedra"}
            if (jugadaMaquina == "papel") { ganaMaquina = true; motivo = "Papel desautoriza Spock"}
            if (jugadaMaquina == "tijera") { ganaJugador = true; motivo = "Spock rompe tijeras"}
            if (jugadaMaquina == "lagarto") { ganaMaquina = true; motivo = "Lagarto envena a Spock"}
            break;
        default: break;

    }

    if (ganaJugador) {
        sumarPunto("Jugador", motivo);
    } else if (ganaMaquina) {
        sumarPunto("Maquina", motivo);
    } else {
        mostrarMensaje("Empate");
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
        
    }

}

// Borra todo lo que tenga dentro de los grids y reinicia la partida
function resetearPartida() {
    var divPuntosJugador = document.getElementById("puntosJugador");
    var divPuntosMaquina = document.getElementById("puntosMaquina");

    divPuntosJugador.innerHTML = "";
    divPuntosMaquina.innerHTML = "";

}

function mostrarMensaje(texto, motivo) {
    var parrafoTexto = document.getElementById("texto");
    parrafoTexto.innerText = texto;
}