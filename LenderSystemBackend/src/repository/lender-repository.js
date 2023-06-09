const { User, sequelize } = require("../models/index");

class LenderRepository {
  async getAllLender() {
    try {
      const [lender, metadata] = await sequelize.query(
        // "select * from Users Where uid in  (select UserUid from User_Roles where RoleId = 3);"
        "select * from Users u inner join UserDetails ud on u.uid = ud.userId  inner join User_Roles ur on ur.UserUid = u.uid where ur.roleid=2;"
      );
      //   UserDetail Users User_Roles
      console.log(lender);
      return lender;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in the agent repository");
      throw error;
    }
  }
}

module.exports = LenderRepository;
