# Shoffl

Implementations of random shuffle algorithms in Typescript for fun.

Currently included:

* Durstenfeld
* Fisher-Yates

## Usage

```
import { fisherYates, durstenfeld } from 'ts-shoffl';

let myArray = [
  'a',
  'b',
  'c',
  'd',
]

let myRandomArray = durstenfeld(myArray);

console.log(myRandomArray);
```

## Testing

```
npm run test
```
