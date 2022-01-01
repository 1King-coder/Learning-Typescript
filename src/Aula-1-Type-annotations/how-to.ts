/* eslint-disable */

// Basic types (Here we can have type inference)
// let name: string = 'Vitor';
let age: number = 18;
let adult: boolean = true;
let symbol: symbol = Symbol('anySymbol');
// let big: bigint = 10n;

// Arrays
let numberArray: Array<number> = [10, 20, 30];
let stringsArray: Array<string> = ['Vitor', 'Mi', 'B'];

let numberArray2: number[] = [10, 20, 30];
let stringsArray2: string[] = ['Vitor', 'Mi', 'B'];

// Objects                         here "?" means optional
let person: {name: string, age: number, adult?: boolean} = {
  name: 'Vitor',
  age: 18,
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}
const result = sum(5, 10); // type inference

//        (       params type   return type )
const sum2: (x: number, y: number) => number = (x, y) => x + y;
