import React, { useEffect, useState } from "react";
import { token } from "../../config.js";

const useFetchData = (url) => {
  const [data, setData] = useState([]); // <-- Initializing data as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // console.log("inside fetch hook")
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message + "🤢");
        }
        // console.log(token);
        setData(result.data); // <-- Setting data to result.data
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    data, // <-- Returning the data state
    loading,
    error,
  };
};
export default useFetchData;
