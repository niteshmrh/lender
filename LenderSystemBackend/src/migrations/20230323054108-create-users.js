"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      authId: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "NotCreated",
      },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      emailId: { type: Sequelize.STRING, allowNull: false, unique: true },

      mobileNo: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      isActive: {
        type: Sequelize.STRING,
        defaultValue: "N",
        allowNull: false,
      },
      isDeleted: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "N",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdBy: {
        type: Sequelize.STRING,
        defaultValue: "user",
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedBy: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "user",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
