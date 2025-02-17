import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'


export const authenticate = async (req, res, next) => {
    // get token from header
    const authToken = req.headers.authorization

    // check token is exists
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({ sucess: false, message: 'No token,authorization denied' })
    }
    try {
        const token = authToken.split(" ")[1]
        // verify the token

        const decoded = jwt.verify(token, process.env.JWT_SCRET_KEY)
        req.userId = decoded.id
        req.role = decoded.role


        next();//must be call next function

    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).send({ success: false, message: "Token is Expired" })
        }
        return res.status(401).send({ success: false, message: "Invalid Token" })

    }
}

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId
    let user;
    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)
    // console.log("hello")
    if (patient) {
        user = patient;
    }
    if (doctor) {
        user = doctor;
    }
    if (!roles.includes(user.role)) {
        // console.log("hello")
        return res.status(401).json({ success: false, message: "You are not authorized" })
    }
    next();
}