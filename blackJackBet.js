var count = 0;
function countCard(card) {
    switch (card) {
        case 1:
        case 2:
        case 3:
        case 4:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
            count--;
            break;
    }
    var betHold = "Bet";
    if (count < 0) {
        betHold = "Hold";
    }
    return `${count}: ${betHold}`;
}

countCard(3); countCard("J"); countCard("K");
console.log(countCard("Q"));