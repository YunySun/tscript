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
