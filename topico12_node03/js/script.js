import _ from 'lodash';

let var01 = 10;

const var02 = "gravidade";

console.log(var01);

function sub(a,b) {
    return a - b;
}

console.log(sub(10,5));

let array01 = ['banana', 'morango', 'maçã']
let array02 = ['banana', 'morango', 'uva']
let difference = _.difference(array01, array02);
console.log(difference);