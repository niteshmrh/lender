"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plan.init(
    {
      planName: { type: DataTypes.STRING, allowNull: false },
      planPeriod: { type: DataTypes.INTEGER, allowNull: false },
      rateOfInterest: { type: DataTypes.FLOAT, allowNull: false },
      minimumInvestmentAmount: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Plan",
    }
  );
  return Plan;
};
