const { UserDetailsRepository } = require("../repository/index");

class UserDetailService {
  constructor() {
    this.userDetailRepository = new UserDetailsRepository();
  }

  async createUserDetail(data) {
    try {
      const response = await this.userDetailRepository.createUserDetail(data);
      return response;
    } catch (error) {
      console.log("something went wrong in the user detail service");
      throw { error };
    }
  }

  async updateUserDetails(userId, data) {
    try {
      const response = await this.userDetailRepository.updateUserDetail(
        userId,
        data
      );
      return response;
    } catch (error) {
      console.log("something went wrong in the user detail service");
      throw { error };
    }
  }

  async getUserDetail(userId) {
    try {
      const response = await this.userDetailRepository.getUserDetail(userId);
      return response;
    } catch (error) {
      console.log("something went wrong in the user detail service");
      throw { error };
    }
  }

  async getAllUserdata() {
    try {
      const response = await this.userDetailRepository.getAllUserdata();
      return response;
    } catch (error) {
      console.log("something went wrong in the user detail service");
      throw error;
    }
  }

  async getUserData(userId) {
    try {
      const response = await this.userDetailRepository.getUserData(userId);
      return response;
    } catch (error) {
      console.log("something went wrong in the user detail service");
      throw error;
    }
  }
}

module.exports = UserDetailService;
