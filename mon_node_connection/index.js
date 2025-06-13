const express = require("express");
// const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const fs = require("fs");
const { console } = require("inspector/promises");
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/userdb")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// schema for MongoDB connection
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  job_title: {
    type: String,
  },
},{timestamps: true});

const User = mongoose.model("User", userSchema);

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("middleware 1: Logging request details");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2: Logging request details");
  next();
});
//Rouutes
app.get("/users", async(req, res) => {

  const alldbusers = await User.find();
  const html = `
    <html>
    <head>
    <title>Users</title>
    </head>
    <body>
    <h1>Users List</h1>
    <ul>
    ${alldbusers
      .map((user) => `<li>${user.first_name}- ${user.email}</li>`)
      .join("")}
    </ul>
    </body>
    </html>
    `;
  res.send(html);
});

// API Routes
app.get("/api/users", async(req, res) => {
  const alldbusers = await User.find();
  res.json(alldbusers);
});

app
  .route("/api/users")
  .get((req, res) => {
    res.json(users);
  })
  .post( async (req, res) => {
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.email ||
      !body.last_name ||
      !body.gender ||
      !body.job_title
    ) {
      return res
        .status(400)
        .json({ error: "First name and email are required" });
    }

    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,

  });
  console.log("User created:", result);
  return res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: result,
  });
});

app
  .route("/api/users/:id")
  .get(async(req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  })
  .patch(async(req, res) => {
    await User.findByIdAndUpdate(req.params.id,  {last_name: "Updated Last Name"});
    return res.json(
      { status: "success" },
      { message: "This endpoint is not implemented yet." }
    );
  })
  .delete(async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json(
      { status: "success" },
      { message: "This endpoint is not implemented yet." }
    );
  });

// app.get('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id, 10);
//     const user = users.find(u => u.id === userId);

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// app.post('/api/users', (req, res) => {
//   return res.status("pending").json({ message: "This endpoint is not implemented yet." });
// });

// app.patch('/api/users/:id', (req, res) => {
//   return res.status("pending").json({ message: "This endpoint is not implemented yet." });
// });

// app.delete('/api/users/:id', (req, res) => {
//   return res.status("pending").json({ message: "This endpoint is not implemented yet." });
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
