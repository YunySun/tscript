/** 类型推断
 * 
 */

// 定义变量
let foo140 = 140;
let bar140 = '140';

// foo140 = bar140; // 不能将类型“"140"”分配给类型“number”

// 函数返回类型
function add140(a: number, b: number) {
  return a+b
}

// 赋值
type Adder140 = (a: number, b: number) => number;
let adder140: Adder140 = (a, b) => {
  // a = 'hello'; // 不能将类型“string”分配给类型“number”
  return a+b
}; 

// 结构化
const foo141 = {
  a: 123,
  b: 456
}
// foo141.a = '123'; // 不能将类型“"123"”分配给类型“number” foo141的类型被推断为{a: number; b: number;}
const bar141 = [1, 2, 3, 4, 5];
// bar141[0] = 'hello'; // 数组也一样

// 解构
const foo142 = {
  a142: 123, 
  b142: 456
}

let { a142 } = foo142;
// a142 = '123' // 不能将类型“"123"”分配给类型“number”

const bar143 = [1, 2];
let [a143, b142] = bar143;
// a143 = '123';
