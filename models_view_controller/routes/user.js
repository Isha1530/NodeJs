const express = require("express");

const router = express.Router();

const {handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handlePostUserByID,
    handlePostUsers
} = require("../controllers/users");


router
  .route("/")
  .get(handleGetAllUsers)
  .post(handlePostUsers);

router
  .route("/:id")
  .get(handleGetUserByID)
  .patch(handleUpdateUserByID)
  .delete(handleDeleteUserByID)
  .post(handlePostUserByID);

module.exports = router;



//Rouutes
// router.get("/", async (req, res) => {
//   const alldbusers = await User.find();
//   const html = `
//     <html>
//     <head>
//     <title>Users</title>
//     </head>
//     <body>
//     <h1>Users List</h1>
//     <ul>
//     ${alldbusers
//       .map((user) => `<li>${user.first_name}- ${user.email}</li>`)
//       .join("")}
//     </ul>
//     </body>
//     </html>
//     `;
//   res.send(html);
// });

// API Routes













// router.get("/api/users", async(req, res) => {
//   const alldbusers = await User.find();
//   res.json(alldbusers);
// });
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
