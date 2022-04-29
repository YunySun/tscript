/**
 * @TypeScript 泛型 许多算法结构不会依赖对象的实际类型 但是仍然会想在每个变量里强制提供约束
 * function [函数名]<T>([传参]: T): T {}
 */
// 循环倒序数组 约束传参和函数返回值
function reverse<T>(items: T[]): T[] {
  const arr = [];
  for(let i = items.length - 1; i>=0; i--) {
    arr.push(items[i]);
  }
  return arr;
}

let reverse1 = reverse([1,2,3,4,5]);
console.log(reverse1);

// reverse1[0] = '1'; // error
// reverse1 = ['1', '2']; // error
reverse1[0] = 2;
reverse1 = [1, 2];

let reverse2 = reverse(['1', '2', '3', '4', '5']);
console.log(reverse2);

// reverse2[0] = 3;
// reverse2 = [1, 2, 3, 4, 5];

reverse2[0] = '3';
reverse2 = ['1', '2', '4'];

let numArr = [1, 2, 3];
let reversedArr = numArr.reverse();

// reversedArr[0] = '1';
reversedArr[0] = 3
