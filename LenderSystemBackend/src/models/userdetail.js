"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
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
  UserDetail.init(
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      fatherName: { type: DataTypes.STRING, allowNull: true },
      gender: { type: DataTypes.STRING, allowNull: true },
      dateOfBirth: { type: DataTypes.STRING, allowNull: true },
      panId: { type: DataTypes.STRING, allowNull: true, unique: true },
      aadharId: { type: DataTypes.STRING, allowNull: true, unique: true },
      EmpType: { type: DataTypes.STRING, allowNull: true },
      address: { type: DataTypes.STRING, allowNull: true },
      postOffice: { type: DataTypes.STRING, allowNull: true },
      city: { type: DataTypes.STRING, allowNull: true },
      pincode: { type: DataTypes.INTEGER, allowNull: true },
      District: { type: DataTypes.STRING, allowNull: true },
      state: { type: DataTypes.STRING, allowNull: true },
      bankAccountNumber: { type: DataTypes.STRING, allowNull: true },
      ifscCode: { type: DataTypes.STRING, allowNull: true },
      isDeleted: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "N",
      },
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  return UserDetail;
};
