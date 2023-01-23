const express = require("express");
const app = express();
const PORT = 3001;
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/userRoutes")

connectDB();
//middleware
app.use(express.json());
app.use(express.static("content"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/v1/users", userRoutes)

app.listen(PORT, () => {
  console.log("server is running at", PORT);
});