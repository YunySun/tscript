// 基本注解 https://jkchao.github.io/typescript-book-chinese/typings/overview.html
const numb: number = 123;
function identity(num: number): number {
  return num;
}

/**
 * @TypeScript 变量声明
 * 
 * let [变量名] : [类型] = [初始值]
 */

// 原始类型
let num: number;
let str: string;
let bool: boolean;

num = 123;
num = 123.456;
// num = '123'; // error

str = '123';
// str = 123; // error

bool = true;
bool = false;
// bool = 'false'; // error

// 数组
let boolArray: boolean[];

boolArray = [true, false];
console.log(boolArray[0]);
console.log(boolArray.length);

boolArray[1] = true;
boolArray = [false, false];

// boolArray[0] = 'false'; // error
// boolArray = 'false' ; // error
// boolArray = [false, 'false']; // error