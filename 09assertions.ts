// 类型断言
// const foo9 = {};
// foo.bar = 123;
// foo.bas = 'hello';

interface Foo9 {
  bar: number;
  bas: string
}

const foo9 = {} as Foo9;
foo9.bar = 123;
foo9.bas = 'hello';


const foo91 = {bar: 123, bas: 'hello', test: '123'} as Foo9;
console.log(foo91);

// 类型断言被认为是有害的 容易忘记某个属性

const foo90: Foo9 = {
  bar: 123,
  bas: 'hello'
}