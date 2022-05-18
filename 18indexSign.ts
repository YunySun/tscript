/**
 * 索引签名
 */
let foo180: any = {};
foo180.Hello = 'World';
console.log(foo180.Hello);

class Foo180 {
  constructor(public message: string) {}
  log() {
    console.log(this.message);
  }
}

let foo180_1: any = {}
foo180_1.Hello = new Foo180('World');
foo180_1.Hello.log();

let obj180 = {
  toString() {
    console.log('toString called');
    return 'Hello';
  }
}

let foo180_2: any = {}
foo180_2[obj180.toString()] = "world"

const foo180_3: {[username: string]: {message: string}} = {}

foo180_3.a = {message: 'something'}
// foo180_3.a = {messages: 'something'}

// 当声明一个索引签名的时候 所有明确的成员都必须符合标签签名
interface Foo180_4 {
  [key: string]: number;
  x: number;
  y: number;
}

// interface Foo180_5 {
//   [param: string]: string;
//   x: string;
//   y: number;
// }

interface Foo180_5 {
  [param: string]: number;
  x: number
}

let foo180_5: Foo180_5 = {
  x: 1, y: 2
}

console.log(foo180_5.x)

const x180_5 = 'x'
console.log(foo180_5[x180_5])

// 使用一组有限的字符串自变量 一个索引签名可以通过映射类型来使索引字符串为联合类型中的一员