import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";

// REGISTER
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.json({ success: false, message: 'Missing details' });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.json({ success: false, message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // ✅ secure only in production
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // ✅ None for cross-origin
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, user: { email: newUser.email, name: newUser.name } });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: { _id: user._id, email: user.email, name: user.name },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// IS AUTH
export const isAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    return res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    });

    return res.json({ success: true, message: "Logged out" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
