const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const users = await User.find();
  return res.json(users);
}

async function handlePostUsers(req, res) {
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
}

async function handleGetUserByID(req, res) {
  const user = await User.findById(req.params.id);

  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
}

async function handleUpdateUserByID(req, res) {
  await User.findByIdAndUpdate(req.params.id, {
      last_name: "Updated Last Name",
    });
    return res.json(
      { status: "success" },
      { message: "This endpoint is not implemented yet." }
    );
}

async function handleDeleteUserByID(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json(
    { status: "success" },
    { message: "This endpoint is not implemented yet." }
  );
}

async function handlePostUserByID(req, res) {
  return res
      .status("pending")
      .json({ message: "This endpoint is not implemented yet." });
}


module.exports = {
    handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handlePostUserByID,
    handlePostUsers
};
