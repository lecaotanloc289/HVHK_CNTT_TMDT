import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectMongoDB } from "./src/db/db.js";
import routes from "./src/routes/routes.js";
import bodyParser from "body-parser";
// config
dotenv.config();
const app = express();

// connect database
connectMongoDB();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// routes api
app.use("/api", routes);
app.use("/", (request, response) => {
  response.status(200).json({ message: "WELCOME TO API FOR PRODUCT!" });
});

// run server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
