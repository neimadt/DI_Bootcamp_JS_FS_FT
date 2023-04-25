const age = 5;

switch (age) {

    default: {
        console.log('Unknown');
    } break;

    case 42:
        console.log('Thats my age');
        break;

    case 18:
        console.log('Thats driving age');
        break;

    case 10:
        console.log('Thats young');
        break;
}


let fruit = 'Papayas';

switch (fruit) {

    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;

    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;

    default:
        console.log('Sorry, we are out of ' + fruit + '.');
}