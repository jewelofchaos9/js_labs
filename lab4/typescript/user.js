var User = /** @class */ (function () {
    function User(username, age) {
        this.username = username;
        this.age = age;
    }
    User.prototype.hello = function () {
        console.log("Hi! My name is ".concat(this.username, ". And I am ").concat(this.age.toString(), " years old."));
    };
    return User;
}());
var basic_user = new User('asdf', 123);
var user2 = new User('abobus', 530);
