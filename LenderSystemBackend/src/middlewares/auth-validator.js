const validateUserAuth = (req, res, next) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.emailId ||
    !req.body.mobileNo ||
    !req.body.password
  ) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "something missing in the request",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
};
