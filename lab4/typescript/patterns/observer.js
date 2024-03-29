var LoginButton = /** @class */ (function () {
    function LoginButton() {
        this.observers = [];
        this.state = 0;
    }
    LoginButton.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer_1 = _a[_i];
            observer_1.update(this);
        }
    };
    LoginButton.prototype.clickEvent = function () {
        this.state += 1;
        this.notify();
    };
    LoginButton.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    LoginButton.prototype.detach = function (observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    };
    LoginButton.prototype.getState = function () {
        return this.state;
    };
    return LoginButton;
}());
var StateObserver = /** @class */ (function () {
    function StateObserver() {
    }
    StateObserver.prototype.update = function (button) {
        console.log(button.getState());
    };
    return StateObserver;
}());
var observer = new StateObserver();
var button = new LoginButton();
console.log("OBSERVER POC");
button.attach(observer);
button.clickEvent();
button.clickEvent();
button.clickEvent();
button.clickEvent();
button.clickEvent();
console.log("OBSERVER POC END");
