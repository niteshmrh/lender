const { InvestmentService } = require("../services/index");

const investmentService = new InvestmentService();

const create = async (req, res) => {
  try {
    // const UserId = req.body.uid;
    const response = await investmentService.createInvestment(req.body.uid);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully created",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create the investment table",
      err: error,
    });
  }
};

module.exports = {
  create,
};
