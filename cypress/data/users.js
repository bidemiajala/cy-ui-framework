/// <reference types = "Cypress" />

//I created a User constructor to help with interacting with user data
function User (email, password, first, last) {
    this.email = email;
    this.password = password;
    this.firstName = first;
    this.lastName = last;
    }
    
    //Following the constructor structure, email is the first element and the rest follow
    const johnSmith = new User("admin@yourstore.com", "admin", "John", "Smith");
    
    //Includes random email and password
    const randomUser = new User(((Math.floor(Math.random() * 1000)) + "@bidemi.xyz"), (Math.random().toString(36).slice(2), "John", "Doe"));

module.exports = {
    johnSmith,
    randomUser,
};