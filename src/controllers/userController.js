const userService = require("../services/userServices");
const Model = require("../database/model/model");

const createNewUserControl = async (req, res) => {
  const data = new Model({
    id: req.body.id,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    location: req.body.location,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllUsersControl = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneUserControl = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await Model.findById(userId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOneUserControl = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(userId, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOneUserControl = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await Model.findByIdAndDelete(userId);
    res.send(`Data of user ${data.username} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createNewUserControl,
  getAllUsersControl,
  getOneUserControl,
  updateOneUserControl,
  deleteOneUserControl,
};
