let pElement = (document.getElementById("myPTag"));
console.log(message);

function change() {
    let firstName = document.getElementById('name').value;
    let animalType = document.getElementById('animal').value;
   document.getElementById("message").innerHTML = "Hello " + firstName + ". Don't you wish you were a " + animalType + "?";
}