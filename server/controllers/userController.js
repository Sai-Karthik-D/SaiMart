import { response } from "express";
import User from "../models/User.js";
//register user : /api/user/register
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { decrypt } from "dotenv";

export const register = async (req,res)=>{
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.json({success: false, message : 'missing details'})
        }

        const existingUser =await User.findOne({email})
        if(existingUser)
            return res.json({success: false, message : 'User Already exists'})
        
        const hashedPassword =await bcrypt.hash(password,10)

        const newUser = await User.create({ name, email, password: hashedPassword });


        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
});

return res.json({
    success: true,
    user: { email: newUser.email, name: newUser.name }
});

    }
    catch(error){
        console.log(error.message)
        res.json({success: false,message : error.message})
    }
}

//Login User :/api/user/login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find the user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2. Check password (you can adjust for hashing)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3. Create JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 4. ✅ Set cookie correctly (cross-site safe)
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,             // ⬅️ important for HTTPS
      sameSite: "None",         // ⬅️ allows cross-origin cookie
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
//ceck Auth : /api/user/is-auth
export const isAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


//Logout user : /api/user/logout
export const logout = async (req,res) =>{
    try{
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.json({success: true , message : "Logged Out"})
    }
    catch(error){
        console.log(error.message)
        res.json({success: false,message : error.message})
    }
}