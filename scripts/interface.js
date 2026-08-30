

let winScream = document.getElementById("winScream");
let start = document.getElementById("start");
let container = document.getElementById("container");

function again() {
    let front = document.querySelectorAll(".front");
    let piece = document.querySelectorAll(".card");
    let qtdc = whatIsGrid();
    // colocando as imagens no "verso" da carta
    front.forEach(element => {
        element.innerHTML = `<img alt="frente da carta" class="frontCard" ${qtdc[embaralhado[i]]} ></img>`;
        i++;
    });

    // Adicionando o evento de click nos cards
    piece.forEach(element => {
        element.addEventListener("click", flip);
    });
};

// flipar a carta

function flip(event) {
    if (!lockedMode) {
        let valor = event.currentTarget.dataset.marcador;
        if (valor === position[0]) { return }
        else {
            position.push(valor);
            event.currentTarget.style.animation = "flip 600ms forwards";
            cardsFliped++;


            for (let i in embaralhado) {
                valor === i ? flipeds.push(embaralhado[i]) : null;
            }
            if (cardsFliped === 2) {
                cardsFliped = 0;
                moves++;
                comparar(position[0], position[1]);
            } else { return };
        }
    }
};

// tela de vitoria 

function win() {
    let record;
    if(tamanhoDaGrid === 20){let record = records.recordGrid20;}else{record = records.recordGrid30};

    if (!localStorage.getItem(record) || localStorage.getItem(record) > moves) {
        localStorage.setItem(record, moves);
    };
    valorRecord = localStorage.getItem(record);
    setTimeout(() => {
        winScream.classList.add("winDiv");
        winScream.innerHTML = `<h1>Parabéns, você venceu o Jogo.</h1><p>Recorde de movimentos: ${valorRecord}</p><p>Movimentos realizados: ${moves} </p><div id="reset" onclick="restart()">Restart</div><div id="reset" onclick="inicio()">Tela inicial</div>`;
    }, 600);
};

function winRemove() {
    winScream.classList.remove("winDiv");
    winScream.innerHTML = '';
};

// desvirando as cartas para recomeçar
function flipDown() {
    let piece = document.querySelectorAll(".card");
    piece.forEach(element => {
        element.style.animation = "flipDown 600ms forwards";
    })
};

function starRemoveOurAdd() {
    if(removeOurAdd){
    start.id = "";
    start.innerHTML = "";
    } else{
    container.innerHTML = "";
    start.id = "start";
    start.innerHTML = `<h1>ESCOLHA O TAMANHO DO SEU TABULEIRO</h1><button onclick="grid20()">20 Cartas</button><button onclick="grid30()">30 Cartas</button>`;
}
}

// adicionando as cartas no HTML

function colocando() {

    for (let k = 0; k < tamanhoDaGrid; k++){
    container.innerHTML += `<div class="card" data-marcador="${k}"><div class="verse"><img alt="verso da carta" class="imageCards" src="./imagens/verso.png"></div><div class="front"></div></div>`;
}
}

// formato do tabuleiro na tela

function newGrid(){
    let piece = document.querySelectorAll(".card");
    if(tamanhoDaGrid === 30){
        container.classList.add("gridTemplate30cards");
        piece.forEach(elemeto=>{
         elemeto.classList.add("cardMenor");
        })

    }else{
        container.classList.add("gridTemplate20cards");
        piece.forEach(elemeto=>{
         elemeto.classList.add("cardMaior");
        })

    }
}

