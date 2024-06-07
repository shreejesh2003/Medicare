import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  
  if (loading && !error) {
    return <Loading />;
  }

  if (error && !loading) {
    return <Error errMessage={error} />;
  }

 
  if (!error && !loading && appointments.length===0 ) {
    return <Error errMessage={'You did not book any doctor yet!'} />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {appointments.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor._id} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;


