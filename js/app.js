//array to stores all cards
const cardsHtml = ['<i class="fa fa-diamond"></i>','<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-anchor"></i>',
                    '<i class="fa fa-bolt"></i>','<i class="fa fa-cube"></i>','<i class="fa fa-anchor"></i>',
                    '<i class="fa fa-leaf"></i>','<i class="fa fa-bicycle"></i>','<i class="fa fa-diamond"></i>',
                    '<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-bolt"></i>','<i class="fa fa-cube"></i>',
                    '<i class="fa fa-leaf"></i>','<i class="fa fa-bicycle"></i>','<i class="fa fa-bomb"></i>','<i class="fa fa-bomb"></i>'];

const cards = document.querySelectorAll('.card');
let openCards = [];

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


//initian function
function game(){

    addShuffledCards();
    cards.forEach(card => {

        card.addEventListener('click',function(){

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
                    }else {
                        //cards did not match
                        setTimeout(function(){
                            //
                            card.classList.remove('match','open','show');
                            openCards[0].classList.remove('match','open','show');
                            openCards = [];
                            },500);

                    }
                    }
            }
        });
    });
}


//start the game
game();