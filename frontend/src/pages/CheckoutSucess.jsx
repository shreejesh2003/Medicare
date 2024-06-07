

import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const CheckoutSuccess = () => {
  return (
   
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
        {/* <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
          <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.814,0,0,0,12,20,6.927,6.927,0,0,1,5.764,13.769,6.927,6.927,0,0,1,1,12a1.011,1.011,0,0,1-.072-1.425l4.686-5.791L1,0,1.25-1.562,4.076,3.261,6.227-.451,1,0,1,0,1,18.927,8.22Z"/>
        </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
  <circle cx="12" cy="12" r="11" fill="currentColor"/>
  <path fill="#fff" d="M8.5 12.793l-1.207-1.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L8.5 12.793z"/>
</svg>









        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-980 font-semibold text-center">Payment Done!</h3>
          <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
          <p>Have a great day!</p>
          <Link to="/home">
            <div className="py-10 text-center">
              <button className="px-12 bg-buttonBgColor text-white font-semibold py-3">Go Back To Home</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
