var Point = /** @class */ (function () {
    function Point(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Point.prototype.findDistance = function (otherPoint) {
        return Math.sqrt(Math.pow((this.x - otherPoint.x), 2) + Math.pow((this.y - otherPoint.y), 2) + Math.pow((this.z - otherPoint.z), 2));
    };
    return Point;
}());
var WaterPathFinder = /** @class */ (function () {
    function WaterPathFinder() {
    }
    WaterPathFinder.prototype.findPath = function (p1, p2) {
        return [p1, p2];
    };
    return WaterPathFinder;
}());
var EarthPathFinder = /** @class */ (function () {
    function EarthPathFinder() {
    }
    EarthPathFinder.prototype.findPath = function (p1, p2) {
        return [p1, p2];
    };
    return EarthPathFinder;
}());
var GeoMap = /** @class */ (function () {
    function GeoMap(pathFinder) {
        this.pathFinder = pathFinder;
    }
    GeoMap.prototype.doGeoJob = function () {
        // path = this.pathFinder.findPath(this.startPoint, this.endPoint);
        /*
         * Отрисовать там, найденные точки, взятые из полей
         */
    };
    return GeoMap;
}());
