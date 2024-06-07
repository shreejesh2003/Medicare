import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";


export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updateUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ sucess: true, message: 'Sucessfully Updated', data: updateUser })
    } catch (err) {
        res.status(500).json({ sucess: flase, message: 'Failed to Updated' })
    }
};
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id,);
        res.status(200).json({ sucess: true, message: 'Sucessfully Deleted' })
    } catch (err) {
        res.status(500).json({ sucess: flase, message: 'Failed to Delete' })
    }
};
export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id,).select('-password');
        res.status(200).json({ sucess: true, message: 'User found', data: user, });
    } catch (err) {
        res.status(404).json({ sucess: flase, message: 'No user found' })
    }
};
export const getAllUser = async (req, res) => {
    // const id =req.params.id
    // console.log("Hello")
    try {
        const users = await User.find({}).select('-password');
        res.status(200).json({ sucess: true, message: 'Users found', data: users });
    } catch (err) {
        res.status(404).json({ sucess: flase, message: 'Not found' })
    }
};
export const getUserProfile = async (req, res) => {
    const userId = req.userId
    
    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" })
        }
        // console.log(user._doc)
        const { password, ...rest } = user._doc;

        // console.log(others)
        res.status(200).json({ success: true, message: 'Profile info is getting', data: {...rest} })
        // res.status(200).json({ success: true, message: 'Profile info is getting', data: { name:'shree' } })
    }

    catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong cannot get' })

    }
};

export const getMyAppointments = async (req, res) => {
    try {
        //step 1:retrive appointments from booking for specific user
        const bookings = await Booking.find({ user: req.userId });


        // step 2:extract doctor ids from appointment bookings
        const docIds = bookings.map(el => el.doctor.id)


        //step 3: retrive doctors using doctor ids
        const doctors = await Doctor.find({ _id: { $in: docIds } }).select('-password');
        // console.log(doctors)
        res.status(200).json({ success: true, message: 'Appointment are getting', data: doctors })



    } catch (error) {
        res.status(500).json({ sucess: false, message: 'Something went wrong cannot get' })

    }
}