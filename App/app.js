// external import
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");
// internal import 
const {errorHandler,notFoundError} = require("../middleware/errorHandler");
const userRouter = require("../routes/user.route")
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser(process.env.COOKIE_SECRET))

// route
app.use("/api/v1/user", userRouter)
// check server
app.get("/", (req, res) => {
  res.send("nexus server running");
});
app.get("/health", (req, res) => {
  res.send("health ok");
});

// not found err handler
app.use(notFoundError);

// default err handler 
app.use(errorHandler);

module.exports = app;
