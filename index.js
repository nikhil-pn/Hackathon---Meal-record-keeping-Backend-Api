const express = require("express");

const app = express();
const PORT = 3001;
const { connectDB } = require("./config/db");

connectDB();
//middleware
app.use(express.json());
app.use(express.static("content"));
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
  console.log("server is running at", PORT);
});