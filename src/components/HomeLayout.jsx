import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function HomeLayout() {
  const { auth, loadingAuth, user } = useAuth();
  const navigate = useNavigate();

  if (loadingAuth) return <h1>Loading...</h1>;
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/employee/" + user?._id },
    { name: "Employees", path: "/employees" },
    { name: "Logout" },
  ];
  
  const handelLogout = async () => {
    try {
      const res = await axios.post("/api/auth/signout");
      if (res.status === 200) {
        localStorage.removeItem("user_data");
        alert("Logout Successfully");
        navigate("/login");
      }
    } catch (err) {
      alert("Something went wrong", err);
    }
  };

  return (
    <>
      <header>
        <div className="text-center bg-gray-800 text-white text-lg py-3 font-semibold">
          <h1>Employee Management System</h1>
        </div>
      </header>
      <section>
        <div className="flex w-full h-screen ">
          <div className="w-1/6 bg-gray-700 h-full">
            <nav>
              <ul className="text-white text-center pt-2">
                {navItems.map((item, index) => {
                  if (index === 3)
                    return (
                      auth && (
                        <li
                          key={index}
                          className=" py-2 hover:text-blue-200 hover:underline"
                        >
                          <Link onClick={handelLogout}>{item.name}</Link>
                        </li>
                      )
                    );

                  return (
                    <li
                      key={index}
                      className=" py-2 hover:text-blue-200 hover:underline"
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <section className="w-5/6 bg-gray-100 overflow-auto ">
            <div className="w-full  px-2 flex justify-start items-center">
              <Outlet />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
