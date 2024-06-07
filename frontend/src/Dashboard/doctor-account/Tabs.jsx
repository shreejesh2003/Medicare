import {useContext} from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, setTab }) => {
    const {dispatch}=useContext(authContext)
    const navigate=useNavigate()
    const handleLogout=() => {
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
  //   const handleDeleteAccount = async () => {
  //     if (window.confirm("Are you sure you want to delete your account?")) {
  //         try {
  //             // Make an API call to delete the user from the database
  //             await axios.delete("/api/user"); // Replace "/api/user" with the actual endpoint
  //             // Dispatch action to delete the account locally
  //             dispatch({ type: 'DELETE_ACCOUNT' });
  //             // Redirect the user to a different page after deleting the account
  //             navigate('/goodbye');
  //         } catch (error) {
  //             console.error("Error deleting account:", error);
  //             // Handle error appropriately, e.g., display an error message to the user
  //         }
  //     }
  // };
    
    
  // console.log("inside tab")
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          className={`${
            tab === "overview" // Check if the current tab is "overview"
              ? "bg-indigo-100 text-primaryColor" // If true, apply active styles
              : "bg-transparent text-headingColor" // If false, apply inactive styles
          } w-full btn mt-0 rounded-md`}
          onClick={() => setTab("overview")} // Update tab state to "overview" when button is clicked
        >
          Overview
        </button>
        <button
          className={`${
            tab === "appointments" // Check if the current tab is "appointments"
              ? "bg-indigo-100 text-primaryColor" // If true, apply active styles
              : "bg-transparent text-headingColor" // If false, apply inactive styles
          } w-full btn mt-0 rounded-md`}
          onClick={() => setTab("appointments")} // Update tab state to "appointments" when button is clicked
        >
          Appointments
        </button>
        <button
          className={`${
            tab === "profile" // Check if the current tab is "profile" (not "settings")
              ? "bg-indigo-100 text-primaryColor" // If true, apply active styles
              : "bg-transparent text-headingColor" // If false, apply inactive styles
          } w-full btn mt-0 rounded-md`}
          onClick={() => setTab("profile")} // Update tab state to "profile" when button is clicked
        >
          Profile
        </button>
        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600  p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Logout
          </button>
          {/* <button onClick={handleDeleteAccount} className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
            Delete account
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
