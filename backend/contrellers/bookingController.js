import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'
import Stripe from 'stripe'

export const getCheckoutSesion = async (req, res) => {
    try {
        //get currently booked doctor
        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userId)
        // console.log(user)
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
        
        //create stripe checkout session
        
// 4000003560000008 CARD NUMBER⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-sucess`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            
            customer_email: user.email,
            
            client_reference_id: req.params.doctorId,
            billing_address_collection: 'required', // This line collects customer name and address
            line_items: [{
                price_data: {
                    currency: 'inr',
                    unit_amount: doctor.ticketPrice*100,
                    product_data: {
                        name: doctor.name,
                        description: doctor.bio,
                        images: [doctor.photo]
                        
                    }
                },
                quantity: 1
            }]
        });



        // const customer = await stripe.customers.create({
        //     email: user.email,
        //   });
          
        //   // Create a test payment method using the card number
        //   const paymentMethod = await stripe.paymentMethods.create({
        //     type: 'card',
        //     card: {
        //       number: '4000003560000008',
        //       exp_month: 12,
        //       exp_year: 2023,
        //       cvc: '123',
        //     },
        //   });
          
        //   // Attach the payment method to the customer
        //   await stripe.paymentMethods.attach(paymentMethod.id, {
        //     customer: customer.id,
        //   });
          
        //   const session = await stripe.checkout.sessions.create({
        //       payment_method_types: ['card'],
        //       mode: 'payment',
        //       success_url: `${process.env.CLIENT_SITE_URL}/checkout-sucess`,
        //       cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
        //       customer: customer.id, // Use the customer ID
        //       client_reference_id: req.params.doctorId,
        //       billing_address_collection: 'required', 
        //       line_items: [{
        //           price_data: {
        //               currency: 'inr',
        //               unit_amount: doctor.ticketPrice,
        //               product_data: {
        //                   name: doctor.name,
        //                   description: doctor.bio,
        //                   images: [doctor.photo]
        //               }
        //           },
        //           quantity: 1
        //       }]
        //   });
          
        

        const booking=new Booking({
            doctor:doctor._id,
            user:user._id,
            ticketPrice:doctor.ticketPrice,
            session:session.id
        })
        await  booking.save()
        res.status(200).json({sucess:true,message:'Sucessfully paid',session})

    } catch (err) {
        console.log(err);
        res.status(500).json({sucess:false,message:'Error creating checkout session'})

    }
}