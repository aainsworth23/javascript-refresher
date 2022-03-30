console.log("hello world");
var message = "how are you today?";
var name = "Bob";
var age = 13;
console.log("In 10 years you'll be " + (age + 10));

//part 2

if (name == 'Bob') {
    console.log('I knew it was you,' + name + '!');
} else {
    console.log("Hey " + name + "you're no \"Bob.\"")
}
if (1 === '1') {
    console.log(true);
}

let iAmWearingABelt = true;
let iAmWearingGlasses = false;
console.log(iAmWearingABelt, iAmWearingGlasses)

if (iAmWearingABelt && iAmWearingGlasses) {
    console.log('Probably not Mr. Gorton')
} else if (iAmWearingABelt && !iAmWearingGlasses) {
    console.log('Probably is Mr. Gorton');
}
// part 3
for (let i = 0; i < 6; i++) {
    console.log('cs is awesome');
}
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("You are " + (age) + " years old")


