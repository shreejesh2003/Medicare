import express from  'express';
import {authenticate} from './../auth/verifyToken.js'
import { getCheckoutSesion } from '../contrellers/bookingController.js';


const  router = express.Router()

router.post('/checkout-session/:doctorId',authenticate,getCheckoutSesion)
export default router
