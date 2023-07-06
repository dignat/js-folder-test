// orivate modifier does not give us any protection or privacy at run time
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _b;
var _Counter_value;
var Counter = /** @class */ (function () {
    function Counter() {
        //private _value = 0;
        _Counter_value.set(this, 0);
    }
    Counter.prototype.increment = function () {
        __classPrivateFieldSet(this, _Counter_value, __classPrivateFieldGet(this, _Counter_value, "f") + 1, "f");
    };
    Counter.prototype.getCount = function () {
        return __classPrivateFieldGet(this, _Counter_value, "f");
    };
    return Counter;
}());
_Counter_value = new WeakMap();
var couter = new Counter();
couter.increment();
//couter.#value= 100;
console.log(couter.getCount());
//if we need privay before es2015 changes we can use closure
function createCounter() {
    var value = 0;
    return {
        increment: function () {
            value += 1;
        },
        get count() {
            return value;
        },
    };
}
;
var counter1 = createCounter();
counter1.increment();
console.log(counter1.count);
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    return User;
}());
var user1 = new User();
user1.setUsername('denise');
var username = (_b = (_a = user1.username) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "n/a";
console.log("Username ".concat(username));
