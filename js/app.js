//array to stores all cards
const cardsHtml = ['<i class="fa fa-diamond"></i>','<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-anchor"></i>',
                    '<i class="fa fa-bolt"></i>','<i class="fa fa-cube"></i>','<i class="fa fa-anchor"></i>',
                    '<i class="fa fa-leaf"></i>','<i class="fa fa-bicycle"></i>','<i class="fa fa-diamond"></i>',
                    '<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-bolt"></i>','<i class="fa fa-cube"></i>',
                    '<i class="fa fa-leaf"></i>','<i class="fa fa-bicycle"></i>','<i class="fa fa-bomb"></i>','<i class="fa fa-bomb"></i>'];

const cards = document.querySelectorAll('.card');

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
}
}


//initian function
function game(){

    addShuffledCards();
}


//start the game
game();