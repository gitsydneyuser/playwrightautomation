class User {

public userName: string;
private password: string;
protected role : string;
readonly id: number;


constructor(userName: string, password: string, role: string, id: number) {
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.id = id;
}

login(): boolean {
    // Simulate a login check
    return this.password === "Admin123";


}
}
let user1 = new User("JohnDoe", "Admin123", "Admin", 1);
user1.login()
console.log(user1.userName); // Accessible