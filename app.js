// Elements Selection
const counterP1 = document.querySelector('#counterP1');
const counterP2 = document.querySelector('#counterP2');

const topScore = document.querySelector('#topScore');

const btnP1 = document.querySelector('#btnP1');
const btnP2 = document.querySelector('#btnP2');
const btnReset = document.querySelector('#reset');

let countP1 = 0;
let countP2 = 0;
let winningScore = 5;
let gameOver = false;

// Buttons functions
btnP1.addEventListener('click', function(){
    if (!gameOver){
        countP1 ++;
        if(countP1 === winningScore){
            gameOver = true;
            counterP1.style.color = '#2a9d8f';
            counterP2.style.color = '#e76f51';
        }
        counterP1.textContent = countP1;  
    }
});

btnP2.addEventListener('click', function(){
    if (!gameOver){
        countP2 ++;
        if(countP2 === winningScore){
            gameOver = true;
            counterP2.style.color = '#2a9d8f';
            counterP1.style.color = '#e76f51';
        }
        counterP2.textContent = countP2;
    }     
});

btnReset.addEventListener('click', reset);

// Change the Winning Value
topScore.addEventListener('change', function() {
    winningScore = parseInt(topScore.value);
    reset();
});

// Reset Function
function reset(){
    gameOver = false;
    countP1 = 0;
    countP2 = 0;
    counterP1.textContent = 0;
    counterP2.textContent = 0;
    counterP1.style.color = '#264653';
    counterP2.style.color = '#264653';
};



