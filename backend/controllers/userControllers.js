const generateToken = require("../config/generateToken");
const User = require("../model/userModel");

const registerUser = async (req, res) => {
  //   console.log("register req", req);
  console.log("register req.body", req.body);

  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      pic: user.pic,
    });
  } else {
    res.status(400).json({ message: "Something failed" });
  }
};

const login = async (req, res) => {
  console.log("req.body login", req.body);

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
};

const allUsers = async (req, res) => {
  console.log("req.query", req.query);

  try {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    // const users = await User.find().select("-password");
    const users = await User.find(keyword).select("-password");
    return res
      .status(200)
      .json({ message: "user fetched successfully", data: users });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { registerUser, login, allUsers };
