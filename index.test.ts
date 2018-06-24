import {fisherYates, durstenfeld} from './index';

const NO_DUPLICATE_RUNS = 100;

let exampleArray = [
  'Raymond Kenny',
  'Josephus Miller',
  'Harry Bosch',
  'Corvo Attano',
  'Ulfric Stormcloak',
  'Michael Karl Popper',
];


test('test array length of fisherYates', () => {
  let originalArrayLength = exampleArray.length;
  expect(fisherYates(exampleArray).length).toBe(originalArrayLength);
});

test(`no duplicate entries for fisherYates, ${NO_DUPLICATE_RUNS} times`, () => {
  let originalArrayLength = exampleArray.length;

  for( let i = 0; i < NO_DUPLICATE_RUNS; i++ ){
    let shuffledArray = fisherYates(exampleArray);
    let seenValues = [];

    shuffledArray.forEach(element => {
      expect(seenValues.indexOf(element)).toBe(-1);
      seenValues.push(element);
    });
  }
});

test('test array length of durstenfeld', () => {
 let originalArrayLength = exampleArray.length;
  expect(durstenfeld(exampleArray).length).toBe(originalArrayLength);
});

test(`no duplicate entries for durstenfeld, ${NO_DUPLICATE_RUNS} times`, () => {
  let originalArrayLength = exampleArray.length;

  for( let i = 0; i < NO_DUPLICATE_RUNS; i++ ){
    let shuffledArray = durstenfeld(exampleArray);
    let seenValues = [];

    shuffledArray.forEach(element => {
      expect(seenValues.indexOf(element)).toBe(-1);
      seenValues.push(element);
    });
  }
});

