const { AgentRepository } = require("../repository/index");

class AgentService {
  constructor() {
    this.agentRepository = new AgentRepository();
  }

  async getAllAgents() {
    try {
      const agent = await this.agentRepository.getAllAgents();
      return agent;
    } catch (error) {
      console.log("something went wrong in the agent service");
      throw error;
    }
  }

  async createAgent(data) {
    try {
      const user = await this.agentRepository.createAgent(data);
      return user;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in the agent service");
      throw error;
    }
  }

  async updateAgent(userId, data) {
    try {
      const response = await this.agentRepository.updateAgent(userId, data);
      return response;
    } catch (error) {
      console.log("something went wrong in the agent repo");
      throw { error };
    }
  }

  async softDelete(userId) {
    try {
      const soft_delete = await this.agentRepository.softDelete(userId);
      return soft_delete;
    } catch (error) {
      console.log("something went wrong in the agent service");
      throw {error}
    }
  }
}

module.exports = AgentService;
