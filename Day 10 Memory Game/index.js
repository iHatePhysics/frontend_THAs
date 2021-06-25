const memoryGame = document.querySelector('.memory-game');
var nos =['computer','energy','fire','game-console','gamepad','headphones','laptop','palm-tree','sunny','sword'];
var deck = [...nos,...nos];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(deck);
console.log(deck[1]);
for (i=0;i<20;i++){
    let memoryCard = document.createElement('div');
    memoryCard.setAttribute("class","memory-card");
    memoryCard.setAttribute("data-id",`${deck[i]}`);
    let frontFace = document.createElement('div');
    frontFace.setAttribute("class","front-face");
    frontFace.style.backgroundImage = `url('images/${deck[i]}.png')`;
    let backFace = document.createElement('div');
    backFace.setAttribute("class","back-face");
    memoryCard.appendChild(frontFace);
    memoryCard.appendChild(backFace);
    memoryGame.appendChild(memoryCard);
}

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var matches = 0;
var moves =0;

function flipcard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }else{
        hasFlippedCard = false;
        secondCard = this
        //console.log(firstCard.dataset.id);
        //console.log(secondCard.dataset.id);
        checkForMatch();
    }
};

function checkForMatch(){
    if(firstCard.dataset.id === secondCard.dataset.id){
        disableCards();
        matches += 1;
        moves += 1;
        document.querySelector('.matches').innerHTML = matches;
        document.querySelector('.moves').innerHTML = moves;
        if(matches === 10){
            finishGame();
        }
    }
    else{
        unFlip();
        moves +=1
        document.querySelector('.moves').innerHTML = moves;
    }
}

function disableCards(){
    firstCard.removeEventListener('click',flipcard);
    secondCard.removeEventListener('click',flipcard);
}

function unFlip(){
    lockBoard = true;

    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        //lockBoard = false;
        resetBoard();
    },750);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false,false];
    [firstCard,secondCard]=[null,null];
}

cards.forEach(card => card.addEventListener('click', flipcard));

function finishGame(){
    document.querySelector('.game-won').style.display = "flex";
}
// if(matches === 10){
//     alert("game won!")
// }
// console.log(matches)