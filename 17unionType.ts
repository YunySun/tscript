/**
 * 辨析联合类型
 */
interface Square {
  kind: 'square',
  size: number
}

interface Rectangle {
  kind: 'rectangle',
  width: number,
  height: number
}

interface Circle {
  kind: 'circle',
  radius: number
}

type Shape = Square | Rectangle | Circle;

function area170(s: Shape) {
  if(s.kind === 'square') {
    return s.size * s.size
  } else if(s.kind === 'rectangle') {
    return s.width * s.height
  } else if (s.kind === 'circle') {
    return Math.PI * s.radius ** 2
  } else {
    const _exhaustiveCheck: never = s;
  }
  // else {
  //   // const _exhaustiveCheck: never = s; // 不能将类型“Circle”分配给类型“never”
  // }
}

function areaBySwitch170(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height;
    case 'circle':
      return Math.PI * s.radius ** 2;
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}