import { useEffect, useState } from "react";

export default function useAuth() {
  const [auth, setAuth] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [user, setUser] = useState();

  const getAuth = () => {
    try {
        // geting user data from local storage
      const raw_data = localStorage.getItem("user_data");
      if (raw_data) {
        const data = JSON.parse(raw_data);
        setAuth(true);
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingAuth(false);
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  return { auth, loadingAuth, user };
}
