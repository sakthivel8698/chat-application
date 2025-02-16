const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB(); 

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Api working fine");
});

app.get("/chat", (req, res) => {
  res.json({ datas: chats, message: "data getting successfully" });
});

app.get("/chat/:id", async (req, res) => {
  const queryParams = req?.params?.id;
  const particularData = chats?.find((item) => item?._id == queryParams);
  res.json({ data: particularData });
});

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
