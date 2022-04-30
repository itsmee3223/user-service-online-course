"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Ramanda Ajisaka Asyraf",
        profession: "Backend Developer",
        role: "admin",
        email: "ramandaajisakaa@gmail.com",
        password: await bcrypt.hash("123456", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yein",
        profession: "Front End Developer",
        role: "student",
        email: "yein@mail.com",
        password: await bcrypt.hash("rahasiaku123", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
