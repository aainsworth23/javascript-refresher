const card1 = {rank:"Ace", suit:"Hearts"};
const card2 = {rank: 7, suit:"Diamonds"};
const card3 = {rank: "King", suit:"Spades"};

console.log('You are holding the ' + card1.rank + ' of ' + card1.suit + ' ' + 'and the' + ' ' + card2.rank + ' of ' + card2.suit);

const deck =  [card1, card2, card3];

for(let i = 0; i < deck.length; i++) {
    console.log(deck[i].rank + ' of ' + deck[i].suit);
}
//exorcise2

listCards("Hearts") 
listCards("Spades")
listCards("Clovers")
listCards("Diamonds")

function listCards(suit) {
    let cards = {rank: 'Ace', suit: 'suit'};
    for (let i = 2; i < 11; i++) {
        deck.push(cards)
        console.log(i + ' of ' + suit);
    }
    console.log('Jack of ' + suit);
    console.log('King of ' + suit);
    console.log('Queen of ' + suit);
}

