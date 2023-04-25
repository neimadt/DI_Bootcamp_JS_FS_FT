let str = "Happy BirthDay";
let patt = /birthday/;

let result = str.match(patt);

console.log(result);

if (result) {

    console.log('Yes')
}
else {

    console.log('No');
}

const email = "y@email.cc";
const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

result = email.match(re);

console.log(result);

if (result) {

    console.log('Yes')
}
else {

    console.log('No');
}


let regex = /^.+@.+\..+$/;
console.log(regex.test('johndoe@gmail.cs'));


const s = '111 222 333 111 111 222';

const replacedValue = s.replace(/111/g, 'oneoneone');

console.log(replacedValue)
