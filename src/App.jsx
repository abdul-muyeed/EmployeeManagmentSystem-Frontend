import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employeetable from "./pages/EmployeeTable";
import HomeLayout from "./pages/HomeLayout";
import Dashboard from "./pages/Dashboard";
// import UserInfo from "./pages/UserInfo";
import Login from "./pages/Login";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import LoginAdmin from "./pages/LoginAdmin";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="edit/:id" element={<EditEmployee />} />
          <Route path="employees/" element={<Employeetable />}/>
          <Route path="employee/:id" element={<UserInfo/>} />
          
          {/* <Route path="employee" element={Em}/> */}
            
        </Route>
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/login" element={<Login />} />
        
            
        <Route path="/add" element={<AddEmployee />} />
        
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
