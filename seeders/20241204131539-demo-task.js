'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        id: 1,
        taskName: 'Complete project report',
        status: false,
        userId: 1,
        tags: [2],
        subTasks: [3],
        due: new Date('2024-12-10T10:00:00.000Z'),
        completedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        taskName: 'Prepare for presentation',
        status: true,
        userId: 2,
        tags: [2, 3],
        subTasks: [1],
        due: new Date('2024-12-12T14:00:00.000Z'),
        completedAt: new Date('2024-12-11T16:00:00.000Z'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        taskName: 'Code review for feature X',
        status: false,
        userId: 1,
        tags: [2, 3],
        subTasks: [2],
        due: new Date('2024-12-15T18:00:00.000Z'),
        completedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
