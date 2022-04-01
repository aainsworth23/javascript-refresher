const names = ['Nathalie', 'Mattea', 'Annie', 'Masha', 'Katie', 'Alea'];

console.log(names);

names.push('Crissy');

console.log(names);

for(let i = 0; i < names.length; i++) {
console.log(names[i]);
}

for(let name of names) {
    console.log(name);
}

names.sort();

console.log(names)

names[2] = 'tuna';
console.log(names)