import { Route, Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import HomeLayout from './pages/HomeLayout'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeLayout />} >
        <Route index element={<Home />} />

      </Route>
      
    </Routes>
      
    </>
  )
}

export default App
