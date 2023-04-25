const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(
    person
);

person.age = 51;

console.log(
    person
);

person.haircolor = 'Bleu';

console.log(
    person
);

// person = {
//     fname: 'Damien'
// };

// console.log(
//     person
// );



console.log(
    person.eyeColor
);
console.log(
    person['eyeColor']
);


const secretKey = '%$^#$%#$DFGCFV___456456';
person[secretKey] = 'Secret message';

console.log(
    person[secretKey]
);

person['haircolor'] = 'Purple';

console.log(
    person
);


delete person.eyeColor;

console.log(
    person
);

delete person[secretKey];

console.log(
    person
);

console.log(
    person.idNumber
);
console.log(
    person
);


person.idNumber = undefined;

console.log(
    person.idNumber
);

console.log(
    person
);
