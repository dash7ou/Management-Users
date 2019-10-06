const hashPassword = require("bcryptjs");

//create admin to our server
exports.up = function(knex) {
  return knex("users").insert({
    id: 1,
    email: "mohammed@mohammed.com",
    password: "$2a$10$nMELJ93j7hMvBjp0C2VwBu6C5JhIbD3Wg4oVrCCGu2/Hpzk7O4nRa", //mohammedmohammed
    age: "20",
    address: "gaza, zourob street",
    userType: "admin",
    isAccept: true,
    block: false
  });
};

exports.down = function(knex) {
  return;
};
