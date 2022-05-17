/** Never
 * 
 */

let foo160: never;
// let foo161: never = 1;

// 作为函数返回类型的never
let bar160: never = (() => {
  throw new Error("Throw my hands in the air like I just dont care")
})()

function foo161(x: string | number): boolean {
  if(typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }

  // 如果不是一个never类型 会报错
  // 不是所有的条件都有返回值
  // 或者检查到无法访问的代码
  // 但是由于ts理解fail函数返回never类型
  // 它可以让你调用 因为你可能会在运行的时候用它做安全或者详细的检查
}