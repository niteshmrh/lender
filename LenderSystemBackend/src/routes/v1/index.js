const express = require("express");

const userController = require("../../controllers/user-controller");
const userDetailController = require("../../controllers/userDetail-controller");
const investmentController = require("../../controllers/investment-controller");
const agentController = require("../../controllers/agent-controller");
const lenderController = require("../../controllers/lender-controller");
const planController = require("../../controllers/plan-controller");
const { AuthRequestValidator } = require("../../middlewares/index");
const router = express.Router();

// these apis for do changes in the user table
router.delete("/user/:id", userController.destroy);
router.get("/user/:id", userController.get);
router.get("/user", userController.getAll);
router.patch("/user/:id", userController.update);

//Api for signin and signup in the application
router.post(
  "/signup",
  AuthRequestValidator.validateUserAuth,
  userController.create
);
router.post("/signin", userController.signIn);

//api to check that the user is authenticated
router.get("/isAuthenticated", userController.isAuthenticated);

// this api only for registration(KYC)
router.patch("/register/:id", userDetailController.update);

//this api will give you the union of all detail from the user and userdetail table
router.get("/combinedUserData", userDetailController.getAllUserData);
router.get("/combinedUserData/:id", userDetailController.getUserData);

//for investment table
router.post("/investment", investmentController.create);

//this api to check that the user is admin or not [NOT IN USE]
router.get("/isAdmin", userController.isAdmin);

//this api to update the roles of  the user
router.patch("/updateUserRole", userController.updateRole);

//API FOR AGENT
//fetch Users as Agent Access
router.get("/allAgentData", agentController.getAllAgents);
router.post("/createAgent", agentController.createAgent);
router.patch("/updateAgent", agentController.updateAgent);

//API FOR LENDERS
router.get("/getAllLender", lenderController.getAllLender);
router.patch("/deleteAgent", agentController.softDelete);

//API FOR PLANS
router.get("/getPlans", planController.getPlans);

module.exports = router;

/*
firstName
lastName
emailId
aadharId
mobileNo
EmpType
address
postOffice
city
pincode
District
state
bankAccountNumber
ifscCode
createdAt
createdBy
updatedAt
updatedBy
isDeleted
*/
