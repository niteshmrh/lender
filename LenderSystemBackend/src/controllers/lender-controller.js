const { LenderService } = require("../services/index");

const lenderService = new LenderService();

const getAllLender = async (req, res) => {
  try {
    const lender = await lenderService.getAllLender();
    return res.status(200).json({
      data: lender,
      success: true,
      message: "successfully fetched",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch lenders",
      err: error,
    });
  }
};

module.exports = {
  getAllLender,
};
