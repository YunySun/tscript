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
type Index180_5 = 'a' | 'b' | 'c';
type FromIndex180_5 = { [k in Index180_5]?: number }

const good180_5: FromIndex180_5 = { b: 1, c: 2}

// const bad180_5: FromIndex180_5 = { a: 1, b: 2, c: 3, d: 4} // 对象文字可以只指定已知属性，并且“d”不在类型“FromIndex180_5”

// 同时拥有string和number类型的索引标签
interface stringOrNumberType180_5 {
  [key: string]: number|string;
  [param: number]: string;

  length: number
}

const stringOrNumberType180_5: stringOrNumberType180_5 = {
  length: 4,
  a: '4',
  1: '2',
  // 2: 2
}

// 设计模式:索引签名的嵌套
interface NestedCSS {
  color?: string; // strictNullChecks=false 时索引签名可为 undefined
  [selector: string]: string | undefined |NestedCSS;
}

const nestedCss: NestedCSS = {
  color: 'red',
  '.subclass': {
    color: 'green'
  }
}
console.log(nestedCss)

const failSilently:NestedCSS = {
  colorful: 'green'
}

console.log(failSilently)

interface NewNestedCSS {
  color?: string;
  nest?: {
    [selector: string]: string | NewNestedCSS;
  }
}

const newNestedCSS: NewNestedCSS = {
  color: 'red',
  nest: {
    '.subclass': {
      color: 'green'
    }
  }
}

// const newFailingCSS: NewNestedCSS = {
//   colorful: 'red'
// }

// 索引标签中排除某些属性
type FieldState = {
  value: string;
}

// type FromState = {
//   isValid: boolean;
//   [filename: string]: FieldState;
// }

type FromState = { isValid: boolean;} & { [filename: string]: FieldState}

// declare const foo180_6: FromState;

// const isValidBool = foo180_6.isValid;
// const somethingFieldState = foo180_6.something;
// console.log(isValidBool, somethingFieldState)

// const bar180_6: FromState = { isValid: false, }