const express = require("express");
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");
const { router } = require("./routes/userRoutes");

dotenv.config();
connectDB(); 
const app = express();
app.use(express.json());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(cors());


const PORT = process.env.PORT || 5000;
app.use("/api/user",router)
// app.get("/", (req, res) => {
//   res.send("Api working fine");
// });

// app.get("/chat", (req, res) => {
//   res.json({ datas: chats, message: "data getting successfully" });
// });

// app.get("/chat/:id", async (req, res) => {
//   const queryParams = req?.params?.id;
//   const particularData = chats?.find((item) => item?._id == queryParams);
//   res.json({ data: particularData });
// });

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
