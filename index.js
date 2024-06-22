const { connectToDataBase } = require("./connection");
const express = require("express");
const {corsMiddle} = require("./middlewares/cors.js")
require("dotenv").config();

// Define our Express Instance
const app = express();
// We choose the port based on the mode
let PORT;
process.env.STATUS === "dev"
  ? (PORT = process.env.DEV_PORT)
  : (PORT = process.env.PROD_PORT);

// We define our Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddle)



// Connecting to Database returns a promise and prints an error if occured
let DB_URL;
process.env.STATUS === "dev"
  ? (DB_URL = process.env.MONGO_URL_DEV)
  : (DB_URL = process.env.MONGO_URL_PROD);
connectToDataBase(DB_URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("There Was an error", err);
  });

// We define our api routes
const {userRouter} = require("./routes/userRouter.js");
const eventRouter = require("./routes/eventRouter.js");
const domainRouter = require("./routes/domainRouter.js");
const venueRouter = require("./routes/venueRouter.js");
const recordRouter = require("./routes/recordRouter.js");

// This deals with all user activities
app.use("/user",userRouter)

// This deals with all event operations
app.use("/event",eventRouter)

// This deals with all domain operations
app.use("/domain",domainRouter)

// This deals with all venue operations
app.use("/venue",venueRouter)

// This deals with all record operations
app.use("/record",recordRouter)

// Server starts listening on the given port with the above config
process.env.STATUS === "dev"
  ? app.listen(PORT, () => console.log(`Listening on ${PORT}`))
  : app.listen(PORT);