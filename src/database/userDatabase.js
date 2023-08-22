const usersDB = require("./users.json");

const createNewUserData = () => {
  return "Create new user";
};

const getAllUsersData = () => {
  return "All Users";
};

const getOneUserData = (userId) => {
  //const parsedUser = JSON.parse(usersDB.users);
  return userId;
};

const updateOneUserData = (userId) => {
  return "update user";
};

const deleteOneUserData = (userId) => {
  return "delete user";
};

module.exports = {
  createNewUserData,
  getAllUsersData,
  getOneUserData,
  updateOneUserData,
  deleteOneUserData,
};
