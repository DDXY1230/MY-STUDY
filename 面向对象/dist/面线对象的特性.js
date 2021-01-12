//抽象
//抽象主要是方法的使用,不关心内部如何实现
var UserInfo = /** @class */ (function () {
    function UserInfo(name) {
        this.name = name;
    }
    return UserInfo;
}());
var u1 = new UserInfo('zhangsan');
console.log(u1.name);
