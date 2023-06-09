const { UserDetailService } = require("../services/index");

const userDetailService = new UserDetailService();

// const create = async (req, res) => {
//   try {
//     const detail = {
//       uid: req.body.id,
//       panId: req.body.panId,
//     };
//     const response = await userDetailService.createUserDetail(detail);
//     return res.status(200).json({
//       data: response,
//       success: true,
//       message: "successfully registered",
//       err: {},
//     });
//   } catch (error) {
//     return res.status(500).json({
//       data: {},
//       success: false,
//       message: "not able to register the user detail",
//       err: error,
//     });
//   }
// };

const update = async (req, res) => {
  try {
    const detail = {
      fatherName: req.body.fatherName,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      panId: req.body.panId,
      aadharId: req.body.aadharId,
      EmpType: req.body.EmpType,
      address: req.body.address,
      postOffice: req.body.postOffice,
      city: req.body.city,
      pincode: req.body.pincode,
      District: req.body.District,
      state: req.body.state,
      bankAccountNumber: req.body.bankAccountNumber,
      ifscCode: req.body.ifscCode,
    };
    const response = await userDetailService.updateUserDetails(
      req.params.id,
      detail
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully registered",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to update the user detail",
      err: error,
    });
  }
};

const getAllUserData = async (req, res) => {
  try {
    const response = await userDetailService.getAllUserdata();
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to get data",
      err: error,
    });
  }
};

const getUserData = async (req, res) => {
  try {
    const response = await userDetailService.getUserData(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to get data",
      err: error,
    });
  }
};

module.exports = {
  update,
  getAllUserData,
  getUserData,
};
