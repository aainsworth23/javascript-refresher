function handleClick(id) {
    console.log(id);

    if (id == 'player0RollButton') {
        console.log('Roll');
        //  ??
    } else { 
        handlePass();

        
}
//if(document.getElementById('player0RollButton'

function handlePass() {
    console.log('Pass');

let myElement = document.getElementById('player0');
myElement.setAttribute('w3-card w3-container w3-dark-gray w3-round-large', 'w3-card w3-container w3-gray w3-round-large')
} 