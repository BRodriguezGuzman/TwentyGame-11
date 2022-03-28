// functions

function askn() {
    var username = prompt(`Hi and welcome to the twenty game revamped. what is your name?`);
    return username
}

function rng() {
    var rng = Math.floor(Math.random() * 10) + 1;
    return rng
}

function botn() {
    var botn = 0;
    alert(`It's the bot's turn`);

    do {
        var r = rng();
        botn = botn + r;
    } while (botn < 16)
    console.log(botn);
    alert(`The bot has ${botn}!`);
    return botn
}

function usern() {
    var usern = 0
    alert(`It's your turn!`);
    do {
        var r = rng();
        usern = usern + r;
        
        alert(`You got ${r}. Your total number is ${usern}.`);

        var cont = prompt("If you want to draw, press any key. To stop getting numbers, press n")
    } while ((cont != `n`) || (usern > 20))
    return usern
}

function play() {
    var botp = 0;
    var userp = 0;
    do {
        var a = botn();

        if (a > 20) {
            alert(`The bot has bust and you won!`);
            userp = userp + 1;
        } else {
            var b = usern();
            if (b > 20) {
                alert(`You bust and the bot has won!`);
                botp = botp + 1;
            } else if (b == a) {
                alert(`You both tied and both earned one point!`);
                botp = botp + 1;
                userp = userp + 1;
            } else if (b < a) {
                alert(`You lost by having a lower number than the bot!`);
                botp = botp + 1;
            } else if (b > a) {
                alert(`You won by having a higher number than the bot!`);
                userp = userp + 1;
            }
        }

        var cont = prompt(`Thank you for playing! If you want to continue playing press any key. If you don't want to just press n.`);
    } while (cont != `n`)

    if (botp == userp) {
        if (botp == 1) {
            alert(`You and the bot tied with ${botp} point.`);
        } else {
            alert(`You and the bot tied with ${botp} points.`);
        }
    } else if (botp > userp) {
        var t = botp - userp;
        if (t == 1) {
            alert(`You lost to the bot by ${t} point.`);
        } else {
            alert(`You lost to the bot by ${t} points.`);
        }
    } else if (botp < userp) {
        var t = userp - botp;
        if (t == 1) {
            alert(`You won against the bot by ${t} point.`);
        } else {
            alert(`You won against the bot by ${t} points.`);
        }
    }
}

// play

alert(`Hi ${askn()}!`);
play()