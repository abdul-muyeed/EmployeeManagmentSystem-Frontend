import { Outlet } from "react-router-dom"

export default function HomeLayout() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Employees', path: '/employees' },
        { name: 'Departments', path: '/departments' },
        { name: 'Roles', path: '/roles' },
    ]
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
                                        return(<li key={index} className=" py-2 hover:text-blue-200 hover:underline"><a href={item.path}>{item.name}</a></li>)

                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <section className="w-5/6 bg-gray-100">
                        <Outlet />
                    </section>
                </div>
            </section>
            
        </>
    )
}