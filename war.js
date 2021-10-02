class Card{
    static pipreads = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    static suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

    constructor(pips, suit){
        this.pips = pips;
        this.suit = suit;
    }

    equals(){

    }

    beats(){
        let c1= p1.playCard();
        let c2 = p2.playCard();
        if (c1 > c2){
            p1.awardPoint();
        } else if (c2.beats(c1)){
            p2.awardPoint();
        }
    }

    ourBeats(){

    }

    description(){
        return Card.pipreads[this.pips - 1] + ' of ' + Card.suits[this.suit];
    }

}

class Deck{
constructor(){
    this.cards = [];
    this.populate();
}

populate(){
return Card.suits.flatMap (suit => {
return Card.pipreads.map (pips => {
    return new Card(suit, pips);
})
})
}

// ourPopulate(){
// this.cards.push(new Card(1, 0));
// this.cards.push(new Card(2, 0));
// this.cards.push(new Card(3, 0));
// this.cards.push(new Card(4, 0));
// this.cards.push(new Card(5, 0));
// this.cards.push(new Card(6, 0));
// this.cards.push(new Card(7, 0));
// this.cards.push(new Card(8, 0));
// this.cards.push(new Card(9, 0));
// this.cards.push(new Card(10, 0));
// this.cards.push(new Card(11, 0));
// this.cards.push(new Card(12, 0));
// this.cards.push(new Card(13, 0));
// }

shuffle(){
    for (let i = 0; i < 52; i++){
        let tempCard = this.cards[i];
        let randomIndex = Math.floor(Math.random() * 52);
        this.cards[i] = this.cards[randomIndex];
        this.cards[randomIndex] = tempCard;
    }
}

dealToAllPlayers(players){

}
}

class Player{
constructor(name){
this.name = name;
this.hand = [];
this.points = 0;
}

takeCard(card){

}

playCard(){

}

awardPoint(){
this.points++;
}

reportHand(){

}

reportPoints(){

}
}

function playWar(){
    let d = new Deck();
    d.shuffle();
    let p1 = new Player('Ted');
    let p2 = new Player('Jorge');
    d.dealToAllPlayers( [p1, p2] );
    for(let i = 0; i < 26; i++){
        let c1= p1.playCard();
        let c2 = p2.playCard();
        if (c1.beats(c2)){
            p1.awardPoint();
        } else if (c2.beats(c1)){
            p2.awardPoint();
        }
    }
    p1.reportPoints();
    p2.reportPoints();
    if (p1.points > p2.points){
        console.log(p1.name + ' wins!');
    } else if (p2.points > p1.points){
        console.log(p2.name + ' wins!');
    } else {
        console.log('The game is a tie!');
    }
}

playWar();