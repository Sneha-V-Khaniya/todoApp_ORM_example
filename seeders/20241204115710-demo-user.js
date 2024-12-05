'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        userName: "John",
        email: "john@gmail.com",
        password: "john343",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userName: "Jane",
        email: "jane@gmail.com",
        password: "sdfjhsa8898",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        userName: "Michael",
        email: "michel@gmail.com",
        password: "ksdh%b^%^",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        userName: "Emily",
        email: "emily343@gmail.com",
        password: "djf8d8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        userName: "David",
        email: "david7@gmail.com",
        password: "d787878",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface,bulkDelete("Users", null, {});
  }
};
