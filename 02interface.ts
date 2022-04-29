/**
 * @TypeScript 接口
 * 
 * interface [接口名] { [属性名]: [类型] }
 */

interface Name {
  first: string;
  second: string;
}

/**
 * @TypeScript 变量声明
 * 
 * let [变量名] : [类型] = [初始值]
 * 用name作为变量名时会出现Cannot redeclare block-scoped variable 'name'.报错
 * npm/node_modules/typescript/lib/lib.dom.d.ts:17330:15
 * ts 将DOM typings作为全局的运行环境 所以当申明name的时候 DOM中的全局变量window对象下的name属性出现了重名
 * 
 * 解决方法 
 * 句末加export {}
 */
let name2: Name;

// name = {
//   first: 'Tom', // 类型 "{ first: string; }" 中缺少属性 "second"，但类型 "Name" 中需要该属性。
// }

// name = {
//   first: 'Tom',
//   second: 9, // 属性 "second" 的类型与类型 "Name" 中的类型不匹配。
// }


/**
 * @TypeScript 特殊类型 any
 */

let power: any;

// 赋值任意类型
power = '123';
power = 123;

power = true;

// 还可以兼容其他的类型
let num2: number = 2;
power = num2;
num2 = power;

/**
 * @TypeScript null 和 undefined
 */
let numb2: number;
let str2: string;

// numb = null;
// str = undefined; 报错了 虽然文档说可以

/**
 * @TypeScript void 表示一个函数没有返回值
 */
function log(message: string): void {
  console.log(message);
}

// 类实现接口 如果希望类中使用必须要遵循的接口或者别人的定义的对象结构 可以使用implements
interface Biology {
  name: string;
  age: number;
}

class Person implements Biology {
  name: string = '';
  age: number = 0; // 设置默认值 否则会提示红色错误
}

let mick:Biology = new Person();
mick.name = 'mick';
mick.age = 18;
console.log(mick);

// interface Crazy {
//   new() : {
//     hello: number
//   }
// }

// class CrazyClass implements Crazy { // error
//   constructor() {
//     return { hello: 123 };
//   }
// }

// const crazy = new CrazyClass(); 

// export {}