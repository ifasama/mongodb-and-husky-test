const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

router.post("/user", userController.createNewUserControl);

router.get("/user", userController.getAllUsersControl);

router.get("/user/:userId", userController.getOneUserControl);

router.patch("/user/:userId", userController.updateOneUserControl);

router.delete("/user/:userId", userController.deleteOneUserControl);

module.exports = router;
