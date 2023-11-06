import axios from "axios";
import { useEffect, useState } from "react";

export default function useEmployeeInfo(id) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();

  const getInfo = async () => {
    try {
      // getting a certain employee data
      const res = await axios.get("/api/employee/" + id);
      setUserData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getInfo();
  }, []);

  return { userData, loading };
}
