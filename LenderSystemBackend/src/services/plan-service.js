const { PlanRepository } = require("../repository/index");

class PlanService {
  constructor() {
    this.planRepository = new PlanRepository();
  }

  async getPlans() {
    try {
      const Plans = await this.planRepository.getPlans();
      return Plans;
    } catch (error) {
      console.log("something went wrong in the plan service");
      throw { error };
    }
  }
}

module.exports = PlanService;
