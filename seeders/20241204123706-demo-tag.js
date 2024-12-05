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
   await queryInterface.bulkInsert("Tags", [
    {
      id: 1,
      tagName: "grocery",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      tagName: "hexylon",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      tagName: "self-improvement",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
