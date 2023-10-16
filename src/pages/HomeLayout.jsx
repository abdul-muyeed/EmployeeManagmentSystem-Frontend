import { Link, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import EmployeeData from './EmployeeData'

export default function HomeLayout() {
    const [tableData, setTableData] = useState([])
    const getEmployeeData = async () => {
        let data = await EmployeeData()
        setTableData(data)
    }
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Employees', path: '/table' },
        { name: 'Departments', path: '/departments' },
        { name: 'Roles', path: '/roles' },
    ]
    useEffect(() => {
        getEmployeeData()
    }, [])
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
                                {
                                    navItems.map((item, index) => {
                                        return(<li key={index} className=" py-2 hover:text-blue-200 hover:underline"><Link to={item.path}>{item.name}</Link></li>)

                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <section className="w-5/6 bg-gray-100 overflow-auto ">
                    <div className="w-full  px-2 flex justify-start items-center">
                    <Outlet data={tableData} />
                    </div>
                       
                    </section>
                </div>
            </section>
            
        </>
    )
}