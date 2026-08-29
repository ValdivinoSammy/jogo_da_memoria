let front = document.querySelectorAll(".front");
let piece = document.querySelectorAll(".card");
let winScream = document.getElementById("winScream");

function again(){
// colocando as imagens no "verso" da carta
front.forEach(element => {
    element.innerHTML = `<img alt="frente da carta" class="imageCards" ${imagens[embaralhado[i]]} ></img>`;
    i++;
});

// Adicionando o evento de click nos cards
piece.forEach(element => {
    element.addEventListener("click", flip);
});
};
again();

// flipar a carta

function flip(event) {
    if(!lockedMode){
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
    if(!localStorage.getItem("record") || localStorage.getItem("record") > moves ){
    localStorage.setItem("record", moves);};
    let record = localStorage.getItem("record");
    setTimeout(() => {
        winScream.classList.add("winDiv");
        winScream.innerHTML = `<h1>Parabéns, você venceu o Jogo.</h1><p>Recorde de movimentos: ${record}</p><p>Movimentos realizados: ${moves} </p><div id="reset" onclick="restart()">Restart</div>`;
    }, 600);
};

function winRemove(){
    winScream.classList.remove("winDiv");
    winScream.innerHTML = '';
};

// desviando as cartas para recomeçar
function flipDown(){
    piece.forEach(element => {
    element.style.animation = "flipDown 600ms forwards";
})
};