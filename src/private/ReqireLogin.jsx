import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ReqireLogin() {
  const { auth, loadingAuth } = useAuth();
  const location = useLocation();

  if (loadingAuth) return <h1>Loading...</h1>;

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
}
