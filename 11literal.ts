function iTakeFoo(foo: 'foo') {}
// const test = {
//   someProp: 'foo'
// }
// iTakeFoo(test.someProp) // 类型“string”的参数不能赋给类型“"foo"”的参数

// const test = {
//   someProp: 'foo' as 'foo',
// }

// iTakeFoo(test.someProp)

type Test = {
  someProp: 'foo'
}

const test: Test = { someProp: 'foo' }

iTakeFoo(test.someProp)

function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
  return o.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, Object.create(null))
}

const Character = strEnum(['a', 'b', 'c']);

// type Character = keyof typeof Character;
console.log(Character.a);