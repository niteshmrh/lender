"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Investment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  Investment.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      isDeleted: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "N",
      },
    },

    {
      sequelize,
      modelName: "Investment",
    }
  );
  return Investment;
};
