// ThisType 只有在noImplicitThis 的选项下才有效
type Point21 = {
  x: number;
  y: number;
  moveBy(dx: number, dy: number): void;
}

let p21: Point21 = {
  x: 10,
  y: 20,
  moveBy(dx, dy) {
    this.x += dx;
    this.y += dy;
    console.log(this);
  }
}

p21.moveBy(3, 4);

let foo21 = {
  x: 'hello', 
  test() {
    console.log(this)
  }
}

foo21.test();

let bar21 = {
  x: 'hello', test(this: {message: string}) { console.log(this) }
}

type objType21 = {
  f: () => void;
}

var obj21 = {} as objType21;
obj21.f = function () {
  console.log(this)
}
obj21.f()

type ObjectDescriptor21<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; 
}

function makeObject<D, M>(desc: ObjectDescriptor21<D, M>): D & M {
  let data = desc.data;
  let methods = desc.methods;
  return Object.assign(data, methods) as D & M;
}

let obj21_1 = makeObject({
  data: {x: 1, y: 2},
  methods: {moveBy(dx: number, dy: number) {this.x+=dx; this.y+=dy; console.log(this)}}
})

obj21_1.moveBy(3, 4);