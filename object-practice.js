const student1 = {firstName:"jane", lastName:"doe", gpa:3.6, playsVolleyball:true};

console.log(student1);
console.log('I know ' + student1.firstName + ' ' + student1.lastName + '!');

console.log(`I know ${student1.firstName} ${student1.lastName}!`);

const student2 = {firstName:"john", lastName:"doe", gpa:2.6, playsVolleyball: false};

if (student2.playsVolleyball) {
    console.log('I know ' + student2.firstName + ' ' + student2.lastName + '!');
} else {
    console.log(student2.firstName + ' ' + student2.lastName + ' ' + ' doesn\'t play volleybally.');
}

const students = [];
students.push(student1, student2);
console.log(students);

students.push({firstName:"boris", lastName:"joe", gpa:4.6, playsVolleyball:true})
console.table(students);

console.log('I know ' + students[2].firstName + ' ' + students[2].lastName + '!');