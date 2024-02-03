const eleccion={
    1: "Rock",
    2: "Paper",
    3: "Scissors"
};
let eleccionJugador;
let eleccionCpu;
let scorePlayer=0;
let scoreCpu=0;
const arma=document.querySelectorAll('button');
const puntuacion=document.querySelector(".score");
const resultadoMatch=document.querySelector(".match");

arma.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        eleccionJugador=Number(boton.id);
        eleccionCpu=getComputerChoice();
        imprimir(resultado(eleccionJugador,eleccionCpu));
    });
});
function imprimir(rs){
    console.log("entro");
    switch(rs){
        case 0:
            resultadoMatch.textContent="Empate";
        break;
        case 1:
            scorePlayer++;
            resultadoMatch.textContent="Ganaste";
        break;
        case 2:
            scoreCpu++;
            resultadoMatch.textContent="Perdiste";
    }
    resultadoMatch.textContent+=`\n
    La maquina escogio ${eleccion[eleccionCpu]}\n
    Elige tu arma`
    puntuacion.textContent=`Jugador ${scorePlayer} - ${scoreCpu} Maquina`;
}
function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}
function resultado(eJ,eM){//0 es empate - 1 ganaste - 2 perdiste
    console.log(eJ);
    console.log(eM);
    if(eJ==eM){
        return 0;
    }
    eJ=Number(eJ);
    switch(eJ){
        case 1:
            return eM==2? 2:1;
        break;
        case 2:
            return eM==1? 1:2;
        break;
        case 3:
            return eM==1? 2:1;
    }
}