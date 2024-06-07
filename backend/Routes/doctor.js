import {updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor, getDoctorProfile} from '../contrellers/doctorController.js'
import express from 'express'
import { authenticate,restrict } from '../auth/verifyToken.js';
import reviewRoute from './review.js'

const router = express.Router()

// nested route
router.use('/:doctorId/reviews',reviewRoute);

router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',authenticate,restrict(["doctor"]),updateDoctor)
router.delete('/:id',authenticate,restrict(["doctor"]),deleteDoctor)
router.get('/profile/me',authenticate,restrict(["doctor"]),getDoctorProfile)

export default router;