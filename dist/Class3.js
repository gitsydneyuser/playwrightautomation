"use strict";
class User {
    constructor(userName, password, role, id) {
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.id = id;
    }
    login() {
        // Simulate a login check
        return this.password === "Admin123";
    }
}
let user1 = new User("JohnDoe", "Admin123", "Admin", 1);
user1.login();
console.log(user1.userName); // Accessible
