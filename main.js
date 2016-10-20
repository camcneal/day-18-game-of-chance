//create a constructor that builds objects reperesenting using playing cards
//playin card should keep track os suit and vallue (ace-king)

function CardConstruct(suit, value) {

    this.suit = suit;
    this.value = value;
}

var newCard = new CardConstruct("Spade", 9);
var newCard = new CardConstruct("Hearts", "jack");

console.log(newCard);

function DieConstruct(value) {
    this.value = value;
    this.roll = function() {
        //have the object output a different value after the roll

        //have the value be between 1-6

        //and change this.value to a new number between 1-6
        this.value = Math.ceil(Math.random() * 6);
        //function should return a number between 1-6
        return this.value;
    };
}

var dice = new DieConstruct();


console.log(dice.roll());

var die1 = new DieConstruct();
var die2 = new DieConstruct();
function getProbabilities() {
    var rollResults = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i <= 1000; i++) {
        die1.roll();
        die2.roll();
        var dieResults = die1.value + die2.value;
        rollResults[dieResults - 2]++;
    }
    return rollResults;
}
console.log(getProbabilities());
