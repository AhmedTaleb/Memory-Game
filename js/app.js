//array to stores all cards
const cardsHtml = ['<i class="fa fa-diamond"></i>','<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-anchor"></i>',
                    '<i class="fa fa-bolt"></i>','<i class="fa fa-cube"></i>','<i class="fa fa-anchor"></i>',
                    '<i class="fa fa-leaf"></i>','<i class="fa fa-bicycle"></i>','<i class="fa fa-diamond"></i>',
                    '<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-bolt"></i>','<i class="fa fa-cube"></i>',
                    '<i class="fa fa-leaf"></i>','<i class="fa fa-bicycle"></i>','<i class="fa fa-bomb"></i>','<i class="fa fa-bomb"></i>'];

const cards = document.querySelectorAll('.card');
let openCards = []; // array of open cards.
let moves = 0;      // variable to store the number of moves a palyer made
let win   = 0;      // variable to count matched pairs if it is = 8 player wins the game

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//shuffle the deck and add each card's html
function addShuffledCards(){
const shuffledcards = shuffle(cardsHtml);
for (let i = 0; i < cards.length; i++) {

    cards[i].innerHTML = shuffledcards[i];
    //show the card
    cards[i].classList.add('show');

    setTimeout(function(){
    //show the cards for 1 second
    cards[i].classList.remove('show');
    },1000);
}
}

/**
 * increment moves
 */
const move = document.querySelector('.moves');
function addMove(){
    moves++;
    move.innerHTML = `Moves ${moves}`;
}

/**
 * start timer
 */
let count =0;
let seconds =0;
let minutes =0;
let myTimer = setInterval(function() {
  // body...
  ++count;

  minutes = parseInt(count/60);
  seconds = count % 60;
  document.querySelector('.timer').innerText= `Timer : ${minutes} : ${seconds}`;

}, 1000);

/**
 * Restart game
 */
const restart = document.querySelector('.restart i');
restart.addEventListener('click',function(){

    //
    cards.forEach(card => {
        //reset cards
        card.innerHTML = '';
        card.classList.remove('open','match','show');
    });

    game();
    moves=0;
    move.innerHTML = `Moves ${moves}`;
    count =0;
    seconds =0;
    minutes =0;
});

/**
 * Check if the game is over : the game is over if there is a winner
 */
function gameOver(){

    win++;
    if(win == 8){

        console.log('winner');
        clearInterval(myTimer);
    }

}


//initial game  function
function game(){



    addShuffledCards();

    cards.forEach(card => {

        //starting timerh

        card.addEventListener('click',function(){

            //discard open and matched cards.
            if(card.classList.length == 1){
                //open two cards at a time
                if(openCards.length < 2){
                    //display card
                    card.classList.add('open','show');
                    //add card to open cards array
                    openCards.push(card);

                    }
                    //two cards are open
                    if(openCards.length == 2){
                    //compare cards
                    if(openCards[0].innerHTML === openCards[1].innerHTML){
                        //cards did match
                        openCards.forEach(openCard => {
                            openCard.classList.add('match');
                        });

                        openCards = [];
                        addMove();
                        gameOver();
                    }else {
                        //cards did not match
                        setTimeout(function(){
                            //show cards for 500 mili seconds
                            card.classList.remove('match','open','show');
                            openCards[0].classList.remove('match','open','show');
                            openCards = [];
                            },500);

                        addMove();


                    }
                    }
            }
        });
    });
}


//start the game
game();

