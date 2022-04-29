/**
 * Freshness
 */

function logName(something: {name: string}) {
  console.log(something.name);
}

const person = {name: 'matt', job: 'being awesome'};
const animal10 = {name: 'cow', diet: 'vegan, but has milk of own specie'}
const randow = {note: 'I dont\'t have a name property'};

logName(person);
logName(animal10);
// logName(randow);

logName({name: 'matt'});
// logName({name: 'matt', job: 'being awesome'}); // 对象文字可以只指定已知属性，并且“job”不在类型“{ name: string; }”中

// 可选参数的问题
function logIfHasName(something: {name?: string}) {
  if(something.name) {
    console.log(something.name);
  }
}

logIfHasName(person);

// 没有对象字面量检查的话 输入错误单词并不会报错警告
// logIfHasName({neme: 'matt'}) 

// 允许额外的属性
let x10: { foo: number, [x: string]: any };
x10 = {foo: 123, test: 23, ss: 'ss'}