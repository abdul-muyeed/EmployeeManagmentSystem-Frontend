import { useEffect, useState } from 'react'
import {FaSort} from 'react-icons/fa'
import EmployeeData from './EmployeeData'
export default function EmployeeTable() {  
    const [ageSort, setAgeSort] = useState(false)
    const [nameSort, setNameSort] = useState(false)
    const [positionSort, setPositionSort] = useState(false)
    const [deptSort, setdeptSort] = useState(false)
    const [dateSort, setDateSort] = useState(false)
    const [salarySort, setSalarySort] = useState(false)
    // const [tableData,setTableData]  = useState([
    //     {
    //         firstName: "Alice",
    //         LastName: "Smith",
    //         age: 35,
    //         position: "Data Analyst",
    //         email: "alice.smith@example.com",
    //         phone: "987-654-3210",
    //         address: "456 Elm St, Townsville",
    //         image: "alice-smith.jpg",
    //         department: "Analytics",
    //         joiningDate: "2021-08-20",
    //         salary: 72000,
    //         skills: ["Python", "SQL", "Data Visualization"],
    //         education: [
    //                         {
    //                             degree: "Master's in Statistics",
    //                             university: "XYZ University",
    //                             graduationYear: 2019
    //                         }
    //                     ]
    //     },
    //     {
    //         firstName: "Bob",
    //         lastName: "Johnson",
    //         age: 29,
    //         position: "Software Developer",
    //         email: "bob.johnson@example.com",
    //         phone: "555-123-4567",
    //         address: "789 Oak St, Citytown",
    //         image: "bob-johnson.jpg",
    //         department: "Engineering",
    //         joiningDate: "2022-03-10",
    //         salary: 95000,
    //         skills: ["Java", "Spring Boot", "Ruby on Rails"],
    //         education: [
    //                         {
    //                             degree: "Bachelor's in Computer Science",
    //                             university: "ABC University",
    //                             graduationYear: 2015
    //                         }
    //                     ]
    //     }

    // ])
    const [tableData, setTableData] = useState([])
    
    const getEmployeeData = async () => {
        let data = await EmployeeData()
        setTableData(data)
    }

    
    
    
    function handleSort(e) {
        const index = e.target.id
        console.log(e.target)
        
        console.log(index)
        
        if(index === '0'){
            setNameSort(!nameSort)
            nameSort ? tableData.sort((a, b) => a.firstName.localeCompare(b.firstName)) : tableData.sort((a, b) => b.firstName.localeCompare(a.firstName.name))
        }
        if(index === '1'){
            setAgeSort(!ageSort)
            ageSort ? tableData.sort((a, b) =>  a.age - b.age ) : tableData.sort((a, b) =>  b.age- a.age  )
            
        }
        if(index === '2'){
            setPositionSort(!positionSort)
            positionSort ? tableData.sort((a, b) => a.position.localeCompare(b.position)) : tableData.sort((a, b) => b.position.localeCompare(a.position))
            
        }
        if(index === '3'){
            setdeptSort(!deptSort)
            deptSort ? tableData.sort((a, b) => a.department.localeCompare(b.department)) : tableData.sort((a, b) => b.department.localeCompare(a.department))
        }
        if(index === '4'){
            setDateSort(!dateSort)
            dateSort ? tableData.sort((a, b) => a.joiningDate.localeCompare(b.joiningDate)) : tableData.sort((a, b) => b.joiningDate.localeCompare(a.joiningDate))
        }
        if(index === '5'){
            setSalarySort(!salarySort)
            salarySort ? tableData.sort((a, b) => a.salary-b.salary) : tableData.sort((a, b) => b.salary-a.salary)
        }

        setTableData([...tableData])
    }
    useEffect(() => {
        getEmployeeData()
    }, [])
  return (
    <>
      






<div className="p-8 m-5 w-fit  border rounded shadow-lg bg-white">

        <h1 className="text-lg text-center text-slate-800 font-semibold">Employee Data Table</h1>
        <div className="text-right my-3 mx-1 space-x-1">
            
            <span>Search: </span>
            <input type="text" className="bg-gray-100 p-1 outline-blue-100" />
            
        </div>


    <table id="example" className="stripe hover" >
        <thead className="border-b border-gray-800">
            <tr >
            <th onClick={handleSort}  className="p-2 cursor-pointer"  ><span className='flex justify-center items-center gap-3' id='0'>Name<FaSort size={12} color='gray'/> </span></th>
            <th onClick={handleSort}  className="p-2 cursor-pointer"  ><span className='flex justify-center items-center gap-3' id='1'>Age<FaSort size={12} color='gray'/> </span></th>
            <th onClick={handleSort}  className="p-2 cursor-pointer"  ><span className='flex justify-center items-center gap-3' id='2'>Position<FaSort size={12} color='gray'/> </span></th>
            <th onClick={handleSort}  className="p-2 cursor-pointer"  ><span className='flex justify-center items-center gap-3' id='3'>Department<FaSort size={12} color='gray'/> </span></th>
            <th onClick={handleSort}  className="p-2 cursor-pointer"  ><span className='flex justify-center items-center gap-3' id='4'>Joining Date<FaSort size={12} color='gray'/> </span></th>
            <th onClick={handleSort}  className="p-2 cursor-pointer"  ><span className='flex justify-center items-center gap-3' id='5'>Salary<FaSort size={12} color='gray'/> </span></th>
            <th  className="p-2 cursor-pointer"><span className='flex justify-center items-center gap-3'>Action<FaSort size={12} color='gray'/> </span></th>
                
            </tr>
        </thead>
        <tbody className="border-b border-gray-300">
            {
                tableData.map((item, index) =>{
                    return (
                        <tr key={index} className=" text-center rows">
                            <td >{item.firstName +' '+ item.lastName}</td>
                            <td >{item.age}</td>
                            <td >{item.position}</td>
                            <td >{item.department}</td>
                            <td >{item.joiningDate}</td>
                            <td >${item.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            <td ><button>Delete</button></td>
                        </tr>
                    )
                } )
            }
            
        </tbody>

    </table>
    <div className='flex justify-between items-center mt-5'>
        <div>
            Total Entries: {tableData.length}
        </div>
        <div>
            1 2 3 4 5 
        </div>
    </div>


</div>


    </>
  )
}