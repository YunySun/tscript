// 表示返回值为string的函数
interface ReturnString {
  (): string;
}

// declare const foo8: ReturnString;
// const bar8 = foo8();

interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}

function stringOrNumber(num: number): number;
function stringOrNumber(str: string): string;
function stringOrNumber(all: any): any {
  if(typeof all === 'string') {
    return `hello ${all}`
  } else if (typeof all === 'number') {
    return all * all
  }
}

const overloaded: Overloaded = stringOrNumber;
const str8 = overloaded('micky');
const num8 = overloaded(9)
console.log(str8, num8);

const func8: (str: string) => string = str => str.toString();