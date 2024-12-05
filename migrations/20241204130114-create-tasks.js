'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taskName: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },

      // foreign keys

      userId: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',  // Action on update
        onDelete: 'CASCADE',  // Action on delete
      },

      // tagId not needed here -> removed in next migration file
      tagId: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tags',
          key: 'id',
        },
        onUpdate: 'CASCADE',  // Action on update
        onDelete: 'CASCADE',  // Action on delete
      },

      // array fields
      tags: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },

      subTasks: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },

      due: {
        type: Sequelize.DATE
      },
      completedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};