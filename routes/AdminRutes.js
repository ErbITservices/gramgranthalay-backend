const express=require('express');
const bcrypt = require("bcryptjs");
const Admin = require('../models/Admin');
const adminRouter = express.Router();
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"erbitservices@gmail.com",
        pass:"rorvwwarciklfgyw"
    }
})


adminRouter.post('/registration', async (req, res) => {
    try {
        const {username,email,role,password} = req.body;

        const userExist = await Admin.findOne({email:email});

        if(userExist){
            return res.status(400).json({msg:"email exist"});
        }
        
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password,saltRound);
        const userCreated = await Admin.create({
            username,
            email,
            role,
            password,
        });        
        res
        .status(200).json({
            message :"registration successful",

            token:await userCreated.generateToken(),
            userId:userCreated._id.toString(),
         });
         console.log('m');
         
    } catch (error) {
     console.error(error);
      res.status(500).json(err);
    }
});

adminRouter.post('/login', async (req, res) => {
    try {
        const {email,password,role}=req.body;
        const userExist = await Admin.findOne({email:email});
        console.log("finde");
        if(!userExist){
         return res.status(400).json({msg:"invalid data"});
      }
      if (userExist.role == role) {
      
        const isMatch = await userExist.comparePassword(password);
        if (isMatch) {
          res
            .status(200).json({
              message: "login successful",
              user: userExist,
              token: await userExist.generateToken(),
              userId: userExist._id.toString(),
            });
          console.log("ismatch");
        } else {
          res.status(400).json({ msg: "invalid data" });
        }
      }
      else {
                return res.status(400).json({ msg: "invalid data" });
      }
 
     } catch (error) {
         console.log("error");
         console.log(error);
     } 
})

adminRouter.post('/sendpasswordlink', async (req, res) => {
    
    const {email}= req.body;
    if(!email){
        return res.status(400).json({msg:"invalid email"});
    };
    try {
      const userfind = await Admin.findOne({ email: email });
      if (!userfind) {
        return res.status(400).json({ msg: "invalid email" });
      }
      const token = jwt.sign({ _id: userfind._id }, process.env.JWT_KEY, {
        expiresIn: "1d",
      });
      const setusertoken = await Admin.findByIdAndUpdate(
        { _id: userfind._id },
        { verifytoken: token },
        { new: true }
      );
      if (setusertoken) {
        const mailOptions = {
          form: "erbitservices@gmail.com",
          to: email,
          subject: "password reset link",
          text: `http://localhost:5173/ConfirmPassword/${setusertoken._id}/${token}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return res.status(400).json({ msg: "error sending mail" });
          } else {
            res
              .status(200)
              .json({ msg: "password reset link sent to your email" });
          }
        });
      }
      console.log("complet email send", userfind._id, token);
    } catch (error) {
        
    }
    
});

adminRouter.get('/forgotpassword/:id/:token', async (req, res) => {
    const {id,token}= req.params;
    try {
        const validuser= await Admin.findOne({_id:id,verifytoken:token})
        const verifyToken= jwt.verify(token,process.env.JWT_KEY)
        if(verifyToken._id && validuser){
            res.status(200).json({msg:"password reset link is valid",validuser});
        }else{
            res.status(400).json({msg:"invalid link"});
        }
    } catch (error) {
        res.status(400).json({msg:"invalid link"});

    }
})

adminRouter.post('/:id/:token', async (req, res) => {
    const {id,token}= req.params;
    const {password}= req.body;
    try {
        const validuser= await Admin.findOne({_id:id,verifytoken:token})
        const verifyToken= jwt.verify(token,process.env.JWT_KEY)
        if(verifyToken._id && validuser){
            const hashedpassword= await bcrypt.hash(password,10);
            const setpassword= await Admin.findByIdAndUpdate({_id:id},{password:hashedpassword},{new:true});
            setpassword.save();
            res.status(200).json({msg:"password updated successfully",setpassword});
            }else{
                res.status(400).json({msg:"invalid link"});
                }
                } catch (error) {
                    res.status(400).json({msg:"invalid link"});
                }
})

//http://localhost:5555/admin/66c4cb8d1c301bbf0efd2a7d/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM0Y2I4ZDFjMzAxYmJmMGVmZDJhN2QiLCJpYXQiOjE3MjQxNzQyNDgsImV4cCI6MTcyNDE3Nzg0OH0.ZOptVUMKa6Si_nhaiU9oqHIUcwDbv8e8wUpnZBhWl4o

module.exports = adminRouter;