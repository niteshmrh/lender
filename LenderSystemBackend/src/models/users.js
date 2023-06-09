"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.UserDetail, {
        foreignKey: "userId",
      });
      this.hasOne(models.Investment, {
        foreignKey: "uid",
      });
      this.belongsToMany(models.Role, {
        through: "User_Roles",
      });
    }
  }
  User.init(
    {
      uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      authId: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "NotCreated",
      },
      // authId: DataTypes.STRING,
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      emailId: { type: DataTypes.STRING, allowNull: false, unique: true },

      mobileNo: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      isActive: {
        type: DataTypes.STRING,
        defaultValue: "N",
        allowNull: false,
      },
      // createdOn: DataTypes.DATE,
      createdBy: {
        type: DataTypes.STRING,
        defaultValue: "user",
        allowNull: false,
      },
      // updatedOn: DataTypes.DATE,
      updatedBy: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "N",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
