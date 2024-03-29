interface IPoint {
  x: number
  y: number
  z: number
  findDistance(otherPoint: IPoint) : number
}

class Point {
  x : number;
  y : number;
  z : number;

  public constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public findDistance(otherPoint: IPoint) : number {
    return Math.sqrt(
      (this.x - otherPoint.x) ** 2 + (this.y - otherPoint.y) ** 2 + (this.z - otherPoint.z) ** 2
    );
  }
}

interface PathFinder {
  findPath(p1: IPoint, p2: IPoint) : IPoint[]
}

class WaterPathFinder implements PathFinder {
  public findPath(p1: IPoint, p2: IPoint) : IPoint[] {
    return [p1, p2];
  }
}

class EarthPathFinder implements PathFinder {
  public findPath(p1: IPoint, p2: IPoint) : IPoint[] {
    return [p1, p2];
  }
}

class GeoMap {
  private pathFinder: PathFinder;
  constructor(pathFinder: PathFinder) {
    this.pathFinder = pathFinder;
  }
  
  public doGeoJob() {
    // path = this.pathFinder.findPath(this.startPoint, this.endPoint);
    /*
     * Отрисовать там, найденные точки, взятые из полей
     */ 
  }
}
