/**
 * @TypeScript 联合类型 希望属性可以为多种类型
 */
function formatCommandLine(command: string[]|string) {
  let line = '';
  if(typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }
  return line
}

let format1 = formatCommandLine(['node', 'tsc', 'hello.ts']);
console.log(format1);

let format2 = formatCommandLine('node tsc hello.ts');
console.log(format2);

/**
 * @TypeScript 交叉类型 将2个对象创建出一个新的对象 并且新的对象具有两个对象的所有功能
 */
function assignObject<F extends object, S extends object>(first: F, second: S): F & S {
  let newObj = <F & S>{};
  for(let key in first) {
    (<F>newObj)[key] = first[key];
  }
  for(let key in second) {
    if(!newObj.hasOwnProperty(key)) {
      (<S>newObj)[key] = second[key];
    }
  }
  return newObj;
}

var newAssignObj = assignObject({a: '1'}, {b: 2});
console.log(newAssignObj);

/**
 * @TypeScript 元组类型 将多个类型组合成一个类型
 */
let nameNumber: [string, number];
nameNumber = ['1', 1];
// nameNumber = [1, 2]; // error

const [str1, num1] = nameNumber;
console.log(str1, num1);

/**
 * TypeScript 类型别名
 */
type strOrNum = string | number;
let strOrNum2: strOrNum;
strOrNum2 = '1';
strOrNum2 = 1;

type Text2 = string | {text: string};
let tx2: Text2;
tx2 = '1';
tx2 = { text: '1' };