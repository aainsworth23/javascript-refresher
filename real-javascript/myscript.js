console.log("today is a good day");
window.alert("whats up?")


let pElement = (document.getElementById("myPTag"));
console.log(pElement);

function change() {
    let firstName = document.getElementById('nameInput').value;
    pElement.innerHTML = "Hello " + firstName;
}