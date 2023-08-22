const userDatabase = require("../database/userDatabase");

const createNewUserService = () => {
  return;
};

const getAllUsersService = () => {
  const allUsers = userDatabase.getAllUsersData();
  return allUsers;
};

const getOneUserService = (userId) => {
  const oneUser = userDatabase.getOneUserData(userId);
  return oneUser;
};

const updateOneUserService = () => {
  return;
};

const deleteOneUserService = () => {
  return;
};

module.exports = {
  createNewUserService,
  getAllUsersService,
  getOneUserService,
  updateOneUserService,
  deleteOneUserService,
};
