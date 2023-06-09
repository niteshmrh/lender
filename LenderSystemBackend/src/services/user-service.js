const jwt = require("jsonwebtoken");

const { UserRepository } = require("../repository/index");

const { JWT_KEY } = require("../config/serverConfig");
class UserSerivce {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const response = await this.userRepository.createUser(data);
      return response;
    } catch (error) {
      console.log("something went wrong in the user service");
      throw { error };
    }
  }

  async deleteUser(userId) {
    try {
      const response = await this.userRepository.deleteUser(userId);
      return response;
    } catch (error) {
      console.log("something went wrong int user service");
      throw { error };
    }
  }

  async updateUser(userId, data) {
    try {
      const response = await this.userRepository.updateUser(userId, data);
      return response;
    } catch (error) {
      console.log("something went wrong int user service");
      throw { error };
    }
  }

  async getUser(userId) {
    try {
      const response = await this.userRepository.getUser(userId);
      return response;
    } catch (error) {
      console.log("something went wrong int user service");
      throw { error };
    }
  }

  async getAllUser(filter) {
    try {
      const response = await this.userRepository.getAllUser(filter);
      return response;
    } catch (error) {
      console.log("something went wrong int user service");
      throw { error };
    }
  }

  async signIn(emailId, password) {
    console.log(emailId, password);
    try {
      const check = await this.userRepository.getByEmail(emailId);
      if (password != check.password) {
        console.log("password is not matching");
        throw { error: "Incorrect Password" };
      }
      const id = check.uid;

      const roleId = await this.userRepository.getRole(id);
      //if password matches
      const newJWT = await this.createToken({
        emailId: check.emailId,
        uid: check.uid,
        firstName: check.firstName,
        lastName: check.lastName,
      });
      const result = {
        newJWT,
        id,
        roleId,
      };
      return result;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in the user service");
      throw { error };
    }
  }

  async createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("something went wrong in the user service");
      throw { error };
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { err: "Invalid Token" };
      }
      const user = await this.userRepository.getUser(response.uid);
      if (!user) {
        throw { error: "No user with corresponding token exists" };
      }
      return user.uid;
    } catch (error) {
      console.log("something went wrong in auth process");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("something went wrong in verify token");
      throw { error };
    }
  }

  //not for use right now
  async isAdmin(userId) {
    try {
      return this.userRepository.isAdmin(userId);
    } catch (error) {
      console.log("something went wrong in the isAdmin in user service");
      throw error;
    }
  }

  async updateRole(userId, roleId) {
    try {
      const response = await this.userRepository.updateRole(userId, roleId);
      return response;
    } catch (error) {
      console.log(error);
      console.log("something went  wrong in the user service");
      throw { error };
    }
  }
}

module.exports = UserSerivce;
