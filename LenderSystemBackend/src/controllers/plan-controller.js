const { PlanService } = require("../services/index");

const planService = new PlanService();

const getPlans = async (_, res) => {
  try {
    const plans = await planService.getPlans();
    return res.status(201).json({
      data: plans,
      success: true,
      message: "successfully fetched plans",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to get Plans",
      err: error,
    });
  }
};

module.exports = {
  getPlans,
};
