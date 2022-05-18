/**
 * 类型兼容性
 */

let str150: string = 'Hello, world!';
let num150: number = 123;

// str150 = num150; // 不能将类型“123”分配给类型“string”  

// 安全性
let foo150: any = 123;
foo150 = '123';

// 结构化
interface Point150 {
  x: number;
  y: number;
}

class Point2D150 {
  constructor(public x: number, public y: number) {}
}

let p150: Point150;
p150 = new Point2D150(1, 2);

console.log(p150)

interface Point2D151 {
  x: number;
  y: number;
}

interface Point3D151 {
  x: number;
  y: number;
  z: number;
}

const point2d151: Point2D151 = {x: 0, y: 0};
const point3d151: Point3D151 = {x: 1, y: 2, z: 3};

function iTakePoint2D(point: Point2D151) {}

iTakePoint2D(point2d151);
iTakePoint2D(point3d151);
// iTakePoint2D({x: 0}); // 类型“{ x: number; }”的参数不能赋给类型“Point2D151”的参数。类型 "{ x: number; }" 中缺少属性 "y"，但类型 "Point2D151" 中需要该属性。

// 变体

// 函数
// 返回类型
// 协变 返回类型必须包含足够的数据
let iMakePoint2D152 = (): Point2D151 => ({x:0, y:0});
let iMakePoint3D152 = (): Point3D151 => ({x:0, y:0, z:2})

iMakePoint2D152 = iMakePoint3D152
// iMakePoint3D152 = iMakePoint2D152

// 参数数量
// 保证足够的函数被使用
const iTakeSomethingAndPassItAnErr153 = (x: (err: Error, data: any) => void) => {

}
iTakeSomethingAndPassItAnErr153(() => null);
iTakeSomethingAndPassItAnErr153((err) => null);
iTakeSomethingAndPassItAnErr153((err, data) => null);
// iTakeSomethingAndPassItAnErr153((err, data, more) => null);

// 可选的rest参数
// 可选的（预先确定的）和Rest参数都是兼容的
let foo154 = (x: number, y: number) => {}
let bar154 = (x?: number, y?: number) => {}
let bas154 = (...args: number[]) => {}

// foo154 = bar154 = bas154 报错

// 函数参数类型
// 双向协变 支持常见的事件处理方案

// 事件等级
interface Event155 {
  timestamp: number;
}

interface MouseEvent155 extends Event155 {
  x: number;
  y: number;
}

interface KeyEvent155 extends Event155 {
  keyCode: number;
}

// 简单的事件监听
enum EventType {
  Mouse,
  Keyboard
}

// console.log(EventType.MouseEvent155)
function addEventListener155(eventType: EventType, handler: (n: Event155) => void) {}

// addEventListener155(EventType.Mouse, (e: MouseEvent155) => { console.log(e.x + ',' + e.y) }) // 类型“(e: MouseEvent155) => void”的参数不能赋给类型“(n: Event155) => void”的参数

addEventListener155(EventType.Mouse, (e: Event155) => { console.log((<MouseEvent155>e).x + ',' + (<MouseEvent155>e).y)})
addEventListener155(EventType.Mouse, <(e: Event155) => void>((e: MouseEvent155) => { console.log(e.x + ',' + e.y) }))
// addEventListener155(EventType.Mouse, (e: number) => console.log(e))

let iTakePoint2D156 = (point: Point2D151) => {}
let iTakePoint3D156 = (point: Point3D151) => {}

// iTakePoint2D156 = iTakePoint3D156 // 参数必须要有足够数据
iTakePoint3D156 = iTakePoint2D156

// 枚举
enum Status157 {
  Ready,
  Waiting
}

let status157 = Status157.Ready;
let num157 = 0;
status157 = num157;
num157 = status157;

// 来自不同的枚举变量被认为不兼容的
enum Color157 {
  Red, 
  Blue, 
  Green
}

let color157 = Color157.Red;
// status157 = color157; // let status157: Status157 不能将类型“Color157.Red”分配给类型“Status157”。

// 类
class Animal157 {
  feet: number = 0;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number = 0;
  constructor(meters: number) {}
}

let a158: Animal;
let s158: Size;
// a158 = s158;
// s158 = a158;

// 泛型
interface Empty158<T> {}
let x158: Empty158<number> = 0;
let y158: Empty158<string> = '0';
x158 = y158;

interface Empty159<T> { data: T }
let x159: Empty159<number> = { data: 0 };
let y159: Empty159<string> = { data: '0' };
// x159 = y159;