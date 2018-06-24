import { fisherYates, durstenfeld } from './index';


let exampleArray = [
  'Raymond Kenny',
  'Josephus Miller',
  'Harry Bosch',
  'Corvo Attano',
  'Ulfric Stormcloak',
  'Michael Karl Popper',
];

console.log('shuffling with fisher - yates');
let FYShuffled = fisherYates(exampleArray);
console.log(FYShuffled);

console.log('shuffling with durstenfeld');
let DShuffled = durstenfeld(exampleArray);
console.log(DShuffled);


let myArray = [
  'a',
  'b',
  'c',
  'd',
]

let myRandomArray = durstenfeld(myArray);

console.log(myRandomArray);