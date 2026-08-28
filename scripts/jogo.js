let embaralhado = [];
let i = 0;
let imageN;
let cardsFliped = 0;
let flipeds = [];
let position = [];


let imagens = {
    "0": 'src="./imagens/html.png"',
    "1": 'src="./imagens/bootstrap.png"',
    "2": 'src="./imagens/css.png"',
    "3": 'src="./imagens/electron.png"',
    "4": 'src="./imagens/firebase.png"',
    "5": 'src="./imagens/javascript.png"',
    "6": 'src="./imagens/jquery.png"',
    "7": 'src="./imagens/mongo.png"',
    "8": 'src="./imagens/node.png"',
    "9": 'src="./imagens/react.png"',
};


// Embaralhando as cartas
function reembaralhar(){
for (let j = 0; j < 20; j++){
    embaralhar();
};};

reembaralhar();

function embaralhar() {
    imageN = Math.floor(Math.random() * 10);
    rep = embaralhado.filter((valor) => valor === imageN);
    if (rep.length == 2) {
        embaralhar();
    } else {
        embaralhado.push(imageN)
    }
}



// Comparar cartas viradas

function comparar(pos1, pos2) {
    if (flipeds[0] === flipeds[1] && flipeds[0] !== "" && flipeds[1]!== "" ) {
        embaralhado[pos1] = "";
        embaralhado[pos2] = "";
        piece[pos1].removeEventListener("click", flip);
        piece[pos2].removeEventListener("click", flip);
        itEnded();
    } else {
        setTimeout(() => {
            piece[pos1].style.animation = "flipDown 600ms forwards";
            piece[pos2].style.animation = "flipDown 600ms forwards";
        }, 600)

    }

}

// o jogo acabou? 

function itEnded(){
    let finish = embaralhado.some((slot)=>{return (slot !== "")});
    if(finish === true){return}else{win()}
};

// recomeçar
function restart(){
    i = 0;
    embaralhado.length = 0;
    winRemove();
    flipDown();
    reembaralhar();
    again();

};

