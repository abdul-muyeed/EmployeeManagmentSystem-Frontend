import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employeetable from "./pages/EmployeeTable";
import HomeLayout from "./components/HomeLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import UserInfo from "./pages/UserInfo";
import ReqireLogin from "./private/ReqireLogin";
import Deleted from "./pages/Deleted";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* need login to enter these routes */}
          <Route element={<ReqireLogin />}>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="edit/:id" element={<EditEmployee />} />
              <Route path="employees/" element={<Employeetable />} />
              <Route path="employee/:id" element={<UserInfo />} />
              <Route path="delete/:id" element={<Deleted />} />
            </Route>
            <Route path="/add" element={<AddEmployee />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
