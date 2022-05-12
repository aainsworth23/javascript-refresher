let playerTurn = 0;

function handleClick(id) {
    console.log(id);

    if (id == 'player0RollButton') {
        console.log('Roll')
        handleRoll();

        //  ??
    } else {
        handlePass();


    }
    //if(document.getElementById('player0RollButton'

}

function handleRoll() {
    let pig1label = document.getElementById('player' + playerTurn + 'Pig1');
    let pig1 = randomRoll()
    pig1label.innerHTML = pig1

    let pig2label = document.getElementById('player' + playerTurn + 'Pig2');
    let pig2 = randomRoll()
    pig2label.innerHTML = pig2;


    let rollScore = countScore(pig1, pig2);
    console.log(rollScore)
}

function randomRoll() {
    let answer
    let randomNumber = Math.random()
    if (randomNumber < 0.349) {
        answer = "dot";
    } else if (randomNumber < 0.651) {
        answer = "No Dot";
    } else if (randomNumber < 0.875) {
        answer = "Razorback";
    } else if (randomNumber < .963) {
        answer = "Trotter";
    } else if (randomNumber < .993) {
        answer = "Snouter";
    } else {
        answer = "Leaning Jowler";
    }
    return answer
}

function countScore(pig1, pig2) {
    if (pig1 == pig2) {
        if (pig1 == "dot") {
            return 1;
        } else if (pig1 == "No Dot") {
            return 1;
        } else if (pig1 == "Razorback") {
            return 20;
        } else if (pig1 == "Trotter") {
            return 20;
        } else if (pig1 == "Snouter") {
            return 40;
        } else {
            return 60;
        }

    } else {
        // not doubles
        if ((pig1 == "dot" && pig2 == "No Dot") || (pig2 == "dot" && pig1 == "No Dot")) {
            return 0;
        }
        let tempScore = 0;
        if (pig1 == "Trotter" || pig2 == "Trotter") {
            tempScore = tempScore + 5;
        }
        if (pig1 == "Razorback" || pig2 == "Razorback") {
            tempScore = tempScore + 5;
        }
        if (pig1 == "Snouter" || pig2 == "Snouter") {
            tempScore = tempScore + 10;
        }
        if (pig1 == "Leaning Jowler" || pig2 == "Leaning Jowler") {
            tempScore = tempScore + 15;
        }
        return tempScore;
    }

    function handlePass() {
        console.log('Pass player' + playerTurn);

        // document.getElementById() = 'player' + playerTurn

        let playersdiv = document.getElementById('player' + playerTurn);
        playersdiv.setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')

        let playerdiv = document.getElementById('player' + (playerTurn + 1) % 4);
        playerdiv.setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')

        playerTurn = playerTurn + 1

        if (playerTurn == 4) {
            playerTurn = 0;
        }
    }
}