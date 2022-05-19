// 流动的类型
// 复制类型和值 仅适用于类型和变量
namespace importing {
  export class Foo190 {}
}

import Bar190 = importing.Foo190;
let bar190 = Bar190;

class Foo190_1 {
  foo: number = 1;
}

declare let _foo190_1: Foo190_1;
let bar190_1: typeof _foo190_1.foo;