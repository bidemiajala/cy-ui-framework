function User (email, password, first, last) {
    this.email = email;
    this.password = password;
    this.firstName = first;
    this.lastName = last;
};

const faker = require('faker');
const johnSmith = new User("admin@yourstore.com", "admin", "John", "Smith");
const randomUser = new User(faker.internet.email(), faker.internet.password(), faker.name.firstName(), faker.name.lastName());

module.exports = {
    johnSmith,
    randomUser,
};