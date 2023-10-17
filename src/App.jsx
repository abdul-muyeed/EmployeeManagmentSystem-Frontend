import { Route, Routes } from 'react-router-dom'
import  Employeetable from './pages/EmployeeTable'
import HomeLayout from './pages/HomeLayout'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeLayout />} >
        <Route index element={<Dashboard/>} />
        <Route path='table/' element={<Employeetable/>} >
          <Route path=':page' element={<Employeetable/>} />
        </Route>


      </Route>
      
    </Routes>
      
    </>
  )
}

export default App
