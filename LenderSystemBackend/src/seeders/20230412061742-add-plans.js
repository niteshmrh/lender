"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Plans",
      [
        {
          planName: "12 Month Plan",
          planPeriod: 12,
          rateOfInterest: 12,
          minimumInvestmentAmount: 50000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planName: "6 Month Plan",
          planPeriod: 6,
          rateOfInterest: 11,
          minimumInvestmentAmount: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planName: "3 Month Plan",
          planPeriod: 3,
          rateOfInterest: 10,
          minimumInvestmentAmount: 200000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planName: "24 Month Plan",
          planPeriod: 24,
          rateOfInterest: 8,
          minimumInvestmentAmount: 50000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planName: "36 Month Plan",
          planPeriod: 36,
          rateOfInterest: 9,
          minimumInvestmentAmount: 50000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          planName: "Freedom Plan",
          planPeriod: 0,
          rateOfInterest: 8.25,
          minimumInvestmentAmount: 300000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
