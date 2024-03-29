interface IPoint {
  x: number;
  y: number;
}

class Point implements IPoint {
  x: number;
  y: number;
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point) : number;

function distance(x1: any, y1: any, x2?: number, y2?: number) : number {
  if (y2 === undefined || x2 === undefined) {
    return Math.sqrt(
      (x1.x - y1.x) ** 2 + (x1.y - y1.y) ** 2
    )
  }

  return Math.sqrt(
    (x1 - x2) ** 2 + (y1 - y2) ** 2
  )
}

let p1 : IPoint = new Point(3, 3)
let p2 : IPoint = new Point(4, 4)
console.log(distance(p1, p2))
console.log(distance(3,3,4,4))
