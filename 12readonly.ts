/**
 * @TypeScript readonly
 */

type Foo12 = {
  readonly bar: number,
  readonly bas: number
}

const foo12: Foo12 = { bar: 123, bas: 234 }

console.log(foo12.bar)

// foo12.bar = 123; // error

type Foo120 = {
  bar: number,
  bas: number
}

type Foo120Readonly = Readonly<Foo120>

const foo120: Foo120 = { bar: 123, bas: 234 }
const foo120Readonly: Foo120Readonly = { bar: 123, bas: 234 }

foo120.bar = 123;
// foo120Readonly.bar = 123;  // error

// 索引值标记为只读
interface Foo121 {
  readonly [key: number]: number
}

const foo121: Foo121 = { 1: 123, 2: 234 };
console.log(foo121[1])
// foo121[1] = 456; // 类型“Foo121”中的索引签名仅允许读取。

// 数组只读
let foo122: ReadonlyArray<number> = [1, 2, 3];
console.log(foo122[0]);
// foo122.push(4); // 类型“readonly number[]”上不存在属性“push”。
foo122 = foo122.concat(4)
console.log(foo122);

// 自动推断
class Person120 {
  firstName: string = 'John'
  lastName: string = 'Doe'

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

let person120 = new Person120();
console.log(person120.fullName);
// person120.fullName = 'John Smith'; // error

/** 和const的不同
 *  const 用于变量 变脸不能重新赋值给其他任何事物
 *  readonly 用于属性 用于别名可以修改属性
 * */ 
const foo123 = 123;
let bar123: {
  readonly bar: number;
}

const foo124: { readonly bar: number} = { bar: 123 }

function iMutateFoo(foo: { bar: number }) {
  foo.bar = 456;
}

iMutateFoo(foo124);
console.log(foo124.bar)

interface Foo125 {
  readonly bar: number;
}

let foo125: Foo125 = {bar: 123};

// function iTakeFoo(foo: Foo) {
//   foo.bar = 345;
// }

// iTakeFoo(foo125)