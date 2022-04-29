/**
 * 函数
 */

// 参数注解
function foo2(params: { bar: number }) {}

// 返回类型注解
interface Foo{
  foo: string
}

function foo3(params: Foo): Foo {
  return params
}

// 可选参数
function foo4(bar: number, foo?: string): void {}

// 重载 当函数传参参数数量有所约束的时候，可以使用重载
function padding(all: number): object;
function padding(topAndBottom: number, leftAndRight: number): object;
function padding(top: number, left: number, bottom: number, right: number): object;
function padding(top: number, left?: number, bottom?: number, right?: any) {
  if(left === undefined || bottom === undefined || right === undefined) {
    left = bottom = right = top;
  } else if (bottom === undefined || right === undefined) {
    bottom = top;
    right = left;
  }
  return {
    top,
    left,
    bottom,
    right
  }
} 

console.log(padding(1))
console.log(padding(1,2));
console.log(padding(1,2,3,4));
// padding(1,2,3); //没有需要 3 参数的重载，但存在需要 2 或 4 参数的重载。

// 函数声明
type LongHand = {
  (a: number): number;
}

type ShortHand = (a: number) => number;

// 重载的时候只能用第一种方法
type LongHandAllowsOverloadDeclarations = {
  (a: number): number;
  (a: string): string;
}

