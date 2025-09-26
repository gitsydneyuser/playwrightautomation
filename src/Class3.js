var User = /** @class */ (function () {
    function User(userName, password, role, id) {
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.id = id;
    }
    User.prototype.login = function () {
        // Simulate a login check
        return this.password === "Admin123";
    };
    return User;
}());
var user1 = new User("JohnDoe", "Admin123", "Admin", 1);
user1.login();
console.log(user1.userName); // Accessible
