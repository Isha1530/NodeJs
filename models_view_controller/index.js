const express = require("express");
// const users = require("./MOCK_DATA.json");

const app = express();
const port = 3000;

const { logReqRes } = require("./middlewares");
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");

// Connect to MongoDB
connectMongoDb("mongodb://localhost:27017/userdb").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("logs.txt"));

//routes
app.use("/api/users", userRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
