const { UserDetail, User, sequelize } = require("../models/index");

class UserDetailsRepository {
  async createUserDetail(data) {
    try {
      const userDetail = await UserDetail.create(data);
      return userDetail;
    } catch (error) {
      console.log("something went wrong in the user detail repository");
      throw { error };
    }
  }

  async updateUserDetail(userId, data) {
    try {
      const userDetail = await UserDetail.update(data, {
        where: {
          userId: userId,
        },
      });
      return userDetail;
    } catch (error) {
      console.log("something went wrong in the user detail repository");
      throw { error };
    }
  }

  async getUserDetail(userId) {
    try {
      const userDetail = await UserDetail.findOne({
        where: {
          uid: userId,
        },
      });
    } catch (error) {
      console.log("something went wrong in the user detail repo");
      throw { error };
    }
  }
  async getUserData(userId) {
    try {
      const [result, metadata] = await sequelize.query(
        `SELECT * FROM UserDetails as UserDetail JOIN Users as User ON User.uid = UserDetail.userId where uid = ${userId};`
      );
      return result;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }
  async getAllUserdata() {
    try {
      const [result, metadata] = await sequelize.query(
        "SELECT * FROM UserDetails as UserDetail JOIN Users as User ON User.uid = UserDetail.userId;"
      );
      return metadata;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = UserDetailsRepository;
