var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
function distance(x1, y1, x2, y2) {
    if (y2 === undefined || x2 === undefined) {
        return Math.sqrt(Math.pow((x1.x - y1.x), 2) + Math.pow((x1.y - y1.y), 2));
    }
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}
var p1 = new Point(3, 3);
var p2 = new Point(4, 4);
console.log(distance(p1, p2));
console.log(distance(3, 3, 4, 4));
