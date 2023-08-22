require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
//const parser = require("body-parser");
const version1UserRouter = require("./version1/routes/userRoutes");
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();
const PORT = process.env.PORT | process.env.HOST;

app.use(express.json());
app.use("/api/v1/users", version1UserRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
