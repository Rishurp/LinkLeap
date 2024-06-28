const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getUserById = catchAsync(async (req, res) => {
  let user = await userService.getUser(req.params.id);
  return res.status(200).send(user);
});

module.exports = {
  getUserById,
};
