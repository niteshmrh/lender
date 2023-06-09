const { User, Role, User_Roles, sequelize } = require("../models/index");
const uniqid = require("uniqid");
class UsersRepository {
  #createFilter(data) {
    let filter = {};
  }

  async createUser(data) {
    try {
      const authrizationId = uniqid();
      const user = await User.create({
        // data
        ...data,
        authId: authrizationId,
      });
      const role = await Role.findByPk(2);
      await user.addRole(role);
      return user;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.destroy({
        where: { uid: userId },
      });
      return user;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async updateUser(userId, data) {
    try {
      const user = await User.update(data, {
        where: {
          uid: userId,
        },
      });
      return user;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async getUser(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      console.log("somerthing went wronog in the user repo");
      throw { error };
    }
  }

  async getAllUser(filter) {
    try {
      if (filter) {
        const filterObject = this.#createFilter(filter);
        const users = await User.findAll({
          where: filterObject,
        });
        return users;
      }
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async getByEmail(emailId) {
    try {
      const check = await User.findOne({
        where: {
          emailId: emailId,
        },
      });
      console.log("in repo", check.dataValues);
      return check;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      console.log(adminRole);
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }
  async isAgent(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "AGENT",
        },
      });
      console.log(adminRole);
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }
  async isLender(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "LENDER",
        },
      });
      console.log(adminRole);
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async getRole(userId) {
    try {
      const checkAdmin = await this.isAdmin(userId);
      if (checkAdmin) return 1;
      const checkLender = await this.isLender(userId);
      if (checkLender) return 2;
      const checkAgent = await this.isAgent(userId);
      if (checkAgent) return 3;
    } catch (error) {
      console.log("something went wrong in the getRole function");
      throw { error };
    }
  }

  async updateRole(userId, roleId) {
    try {
      const response = await sequelize.query(
        `UPDATE User_Roles as User_Role SET roleId = ${roleId} WHERE UserUid = ${userId};`
      );

      // const [result, metadata] = await sequelize.query(
      //   "SELECT * FROM UserDetails as UserDetail JOIN Users as User ON User.uid = UserDetail.userId;"
      // );

      return response;
    } catch (error) {
      console.log("in repo----", error);
      console.log("something went wrong in the update role");
      throw { error };
    }
  }
}

module.exports = UsersRepository;
