let i = 0;
let cardsFliped = 0;
let moves = 0;
let tamanhoDaGrid;
let imageN;
let embaralhado = [];
let flipeds = [];
let position = [];
let lockedMode = false;
let removeOurAdd = true;

let imagens = {
    cards20 :{
    "0": 'src="./imagens/Hunt.webp"',
    "1": 'src="./imagens/Nihility.webp"',
    "2": 'src="./imagens/Harmony.webp"',
    "3": 'src="./imagens/Remembrance.webp"',
    "4": 'src="./imagens/Preservation.webp"',
    "5": 'src="./imagens/Erudition.webp"',
    "6": 'src="./imagens/Destruction.webp"',
    "7": 'src="./imagens/Elation.webp"',
    "8": 'src="./imagens/Abundance.webp"',
    "9": 'src="./imagens/Voracity.webp"',},
    cards30 :{
    "0": 'src="./imagens/Hunt.webp"',
    "1": 'src="./imagens/Nihility.webp"',
    "2": 'src="./imagens/Harmony.webp"',
    "3": 'src="./imagens/Remembrance.webp"',
    "4": 'src="./imagens/Preservation.webp"',
    "5": 'src="./imagens/Erudition.webp"',
    "6": 'src="./imagens/Destruction.webp"',
    "7": 'src="./imagens/Elation.webp"',
    "8": 'src="./imagens/Abundance.webp"',
    "9": 'src="./imagens/Wind.webp"',
    "10": 'src="./imagens/Fire.webp"',
    "11": 'src="./imagens/Lightning.webp"',
    "12": 'src="./imagens/Ice.webp"',
    "13": 'src="./imagens/Imaginary.webp"',
    "14": 'src="./imagens/Quantum.webp"',}
};

let records = { 
    recordGrid20:"recordgrid20",
    recordGrid30:"recordgrid30"};

function whatIsGrid(){
   return tamanhoDaGrid === 20 ? imagens.cards20 : imagens.cards30;
}

// Embaralhando as cartas
function reembaralhar(){
for (let j = 0; j < tamanhoDaGrid; j++){
    embaralhar();
};};



function embaralhar() {
    imageN = Math.floor((Math.random()) * (tamanhoDaGrid / 2));
    rep = embaralhado.filter((valor) => valor === imageN);
    if (rep.length == 2) {
        embaralhar();
    } else {
        embaralhado.push(imageN)
    }
}


// Comparar cartas viradas

function comparar(pos1, pos2) {
    lockedMode = true;
    let piece = document.querySelectorAll(".card");
    if (flipeds[0] === flipeds[1] && flipeds[0] !== "" && flipeds[1]!== "" ) {
        embaralhado[pos1] = "";
        embaralhado[pos2] = "";
        piece[pos1].removeEventListener("click", flip);
        piece[pos2].removeEventListener("click", flip);
        voltandoAcao();
        itEnded();
    } else {
        setTimeout(() => {
            piece[pos1].style.animation = "flipDown 600ms forwards";
            piece[pos2].style.animation = "flipDown 600ms forwards";
            voltandoAcao();
        }, 600)

    }

}

// removendo lockedMode e limpando as posições e cartas flipadas

function voltandoAcao(){
    flipeds.length = 0;
    position.length = 0;
    lockedMode = false;
}

// o jogo acabou? 

function itEnded(){
    let finish = embaralhado.some((slot)=>{return (slot !== "")});
    if(finish === true){return}else{win()}
};

// recomeçar
function restart(){
    moves = 0;
    i = 0;
    embaralhado.length = 0;
    winRemove();
    flipDown();
    reembaralhar();
    again();
};

// voltar ao inicio
function inicio(){
    moves = 0;
    i = 0;
    embaralhado.length = 0;
    removeOurAdd = false;
    winRemove();
    starRemoveOurAdd()
}

// escolheu o bord
function grid20(){
    tamanhoDaGrid = 20;
    removeOurAdd = true;
    
    colocando();
    newGrid();
    reembaralhar();
    again();
    starRemoveOurAdd()
}

function grid30(){
    tamanhoDaGrid = 30;
    removeOurAdd = true;
    
    colocando();
    newGrid();
    reembaralhar();
    again();
    starRemoveOurAdd()
}