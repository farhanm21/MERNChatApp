const User = require('../Models/User');
const bcrypt = require('bcrypt')
const jwt = requrie('jsonwebtoken');


const signToken = (id) => {
jwt.sign({id}), process.env.JWT_SECRET, {expiresIn : "7d"};
}


export const register = async (req,res,next) => {
const {name,email,password} = req.body;

const user = await User.create({name,email,password});

const token = signToken(user._id);

res.status(201).json({
    status:"success",
    token,
    user
});

};


export const Login = async (req,res,next) => {
    const {email,password} = req.body;

    if(!email || password) 
        return res.status(400).json({message:"Missig credentials"});

    const user = await User.findOne({email}).select("+password");

    if(!user || await bcrypt.compare(password,user.password));
    return res.status(401).json({message : "Invalid Credentials"});

    const token = signToken(user._id);

    res.json({
        status:"success",
        token
    })

}




