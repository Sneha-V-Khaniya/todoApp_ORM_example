'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init({
    taskName: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },

    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },

    subTasks: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },

    document_with_index: DataTypes.TSVECTOR,
    completedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};