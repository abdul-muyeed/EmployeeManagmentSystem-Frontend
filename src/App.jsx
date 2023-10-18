import { Route, Routes } from 'react-router-dom'
import  Employeetable from './pages/EmployeeTable'
import HomeLayout from './pages/HomeLayout'
import Dashboard from './pages/Dashboard'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeLayout />} >
        <Route index element={<Dashboard/>} />
        <Route path='table/' element={<Employeetable/>} >
          <Route path=':page' element={<Employeetable/>} />
        </Route>
        <Route path='employee'>
          <Route index element={<UserInfo/>} />
        </Route>


      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />

      
    </Routes>
      
    </>
  )
}

export default App
