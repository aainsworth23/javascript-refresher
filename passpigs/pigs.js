let playerTurn = 0;

function handleClick(id) {
    console.log(id);

    if (id == 'player0RollButton') {
        console.log('Roll');
        //  ??
    } else {
        handlePass();


    }
    //if(document.getElementById('player0RollButton'

}

function handlePass() {
    console.log('Pass player' + playerTurn);

   // document.getElementById() = 'player' + playerTurn

    let playersdiv = document.getElementById('player' + playerTurn);
    playersdiv.setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')

    let playerdiv = document.getElementById('player' + (playerTurn + 1)%4);
    playerdiv.setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')

    playerTurn = playerTurn + 1

    if(playerTurn == 4){
        playerTurn = 0;
    }
}

function rollInput(){
   
    let playersPig = 0;
    let pElement = (document.getElementById("player" + playersPig + "pig1"));
    let  = document.getElementById(playersPig).value;
    pElement.innerHTML = "hello"

}
