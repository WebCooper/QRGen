import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    // 🔹 Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    // 🔹 Hash the password synchronously using bcrypt.hashSync
    const salt = bcrypt.genSaltSync(10);  // Create salt
    const hashedPassword = bcrypt.hashSync(password, salt);  // Hash password

    // 🔹 Create user with hashed password
    const user = await User.create({ name, email, password: hashedPassword });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: "Invalid user data" });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // 🔹 Find the user by email
    const user = await User.findOne({ email });

    // 🔹 If user exists, compare passwords using bcrypt's hashSync
    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
};

export const getProfile = async (req, res) => {
    res.json(req.user);
};
