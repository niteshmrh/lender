const { InvestmentRepository } = require("../repository/index");

class InvestmentService {
  constructor() {
    this.investmentRepository = new InvestmentRepository();
  }

  async createInvestment(data) {
    try {
      const createInvestment = await this.investmentRepository.createInvestment(
        data
      );
      return createInvestment;
    } catch (error) {
      console.log("something went wrong in the inivestment service");
      throw { error };
    }
  }

  async getByUserId(userId) {
    try {
      const response = await this.investmentRepository.getByUserId(userId);
      return response;
    } catch (error) {
      console.log("something went wrong in the inivestment service");
      throw { error };
    }
  }
}

module.exports = InvestmentService;
