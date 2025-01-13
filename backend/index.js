const express = require("express");
const errorHandler = require("./Middleware/UserMiddleWare");
const connectDB = require("./Config/ConnectDB");

const app = express();
const cors = require('cors')
require("dotenv").config();
require("colors");

app.use(cors());

// connect DB
connectDB();

// console.log('MONGO_URL', process.env.MONGO_URL)

// middle ware parse

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", require("./Routes/UserRoutes"));

// middleware

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT.cyan}`)
);
