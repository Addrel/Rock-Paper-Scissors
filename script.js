const eleccion={
    1: "Rock",
    2: "Paper",
    3: "Scissors"
};
let eleccionJugador;
let eleccionMaquina;

function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}
function resultado(eJ,eM){
    if(eJ==eM){
        return "Empate";
    }
    eJ=Number(eJ);
    switch(eJ){
        case 1:
            return eM==2? "Perdiste": "Ganaste";
        break;
        case 2:
            return eM==1? "Ganaste":"Perdiste";
        break;
        case 3:
            return eM==1? "Perdiste":"Ganaste";
    }
}
while(true){
    eleccionJugador=prompt(`Pon el numero de tu eleccion:
    1. Piedra
    2. Papel
    3. Tijeras`);
    Number(eleccionJugador);
    if(eleccionJugador<1||eleccionJugador>3){
        break;
    }
    eleccionMaquina=getComputerChoice();
    alert(`Resultado del juego
    Jugador     vs      Maquina
    ${eleccion[eleccionJugador]}                    ${eleccion[eleccionMaquina]}
            ${resultado(eleccionJugador,eleccionMaquina)}`)
}