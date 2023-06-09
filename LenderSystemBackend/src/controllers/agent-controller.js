const { AgentService } = require("../services/index");

const agentService = new AgentService();

const getAllAgents = async (_, res) => {
  try {
    const response = await agentService.getAllAgents();
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch agents",
      err: error,
    });
  }
};

const createAgent = async (req, res) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      mobileNo: req.body.mobileNo,
      password: req.body.password,
    };
    const response = await agentService.createAgent(data);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully created the agent",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create an agent",
      err: error,
    });
  }
};

const updateAgent = async (req, res) => {
  try {
    const response = await agentService.updateAgent(req.query.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated the agent detail",
      err: {},
    });
  } catch (error) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "not able to update the agent",
      err: error,
    });
  }
};

const softDelete = async (req, res) => {
  try {
    const response = await agentService.softDelete(req.query.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated the deleted status",
      err: {},
    });
  } catch (error) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "not able to change the value",
      err: error,
    });
  }
};
module.exports = {
  getAllAgents,
  createAgent,
  updateAgent,
  softDelete,
};
