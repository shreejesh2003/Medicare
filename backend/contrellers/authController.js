import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import  jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'


const generateToken=user=>
{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SCRET_kEY,{
        expiresIn:'900d'
    });
};

export const register=async(req,res) => {
    const {email,password,name,role,photo,gender}=req.body
    try{
        let user=null;
        if(role==='patient'){
            user=await User.findOne({email});
        }
        else if(role==='doctor'){
            user = await Doctor.findOne({email});
        }

        //check user exist

        if(user){
            return res.status(400).json({message:'User alredy exist'});

        }

        //hash password
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt)
        if(role==='patient'){
            user=new User({
                name,email,password:hashPassword,photo,gender,role
            })
        }
        if(role==='doctor'){
            user=new Doctor({
                name,email,password:hashPassword,photo,gender,role
            })
        }
        await user.save()
        res.status(200).json({sucess:true,message:'User sucessfully Created'})



    }catch(err){
        res.status(200).json({sucess:false,message:'Internal server error,Try again'})
    }
};
export const login=async(req,res) => {
    const {email}=req.body
    try{
        let user=null        
        const patient=await User.findOne({email})
        const doctor=await Doctor.findOne({email})
        if(patient){
            user=patient;
        }
        if(doctor){
            user=doctor;
        }
        //check if user exist or not
        if(!user){
            return  res.status(404).json({message:"User Not found"})}
            
            // comapre password
            // console.log(user.password);
            // console.log(req.body.password);
            const isPassowrdMatch = await bcrypt.compare(req.body.password,user.password);
            if (!isPassowrdMatch) {
                return res.status(400).json({status:false, message: "Invalid Credentials!" });
            }
        // get token
        const token=generateToken(user);
        const {password,role,appointments,...rest}=user._doc
        res.status(200).json({status:true, message: "Sucessfully login",token,data:{...rest},role});
        

    }catch(err){
        console.log(err)
        res.status(500).json({status:false, message: "Failed login!" });
    }
};  