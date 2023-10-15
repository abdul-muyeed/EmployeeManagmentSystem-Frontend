import { useState } from 'react'
import {FaSort} from 'react-icons/fa'
export default function Home() {
    const [ageSort, setAgeSort] = useState(true)
    const [nameSort, setNameSort] = useState(true)
    const [positionSort, setPositionSort] = useState(true)
    const [officeSort, setOfficeSort] = useState(true)
    const [dateSort, setDateSort] = useState(true)
    const [salarySort, setSalarySort] = useState(true)
    const tablefields = [
        "name",
        "position",
        "office",
        "age",
        "start date",
        "salary"

    ]
    const [tableData,setTableData]  = useState([
        {
            name: 'Tiger Nixon',
            position: 'System Architect',

            office: 'Edinburgh',
            age: 61,
            date: '2015/04/25',
            salary: 3800,
        },
        {
            name: 'ABC',
            position: 'System Architect',

            office: 'Edinburgh',
            age: 50,
            date: '2011/04/25',
            salary: 20800,
        },
        {
            name: 'XYZ',
            position: 'System Architect',

            office: 'Edinburgh',
            age: 18,
            date: '2010/04/25',
            salary: 321800,
        }
    ])

    
    function handleSort(e) {
        const index = e.target.id
        console.log(index)
        
        if(index === '0'){
            setNameSort(!nameSort)
            nameSort ? tableData.sort((a, b) => a.name.localeCompare(b.name)) : tableData.sort((a, b) => b.name.localeCompare(a.name))
        }
        if(index === '1'){
            setPositionSort(!positionSort)
            positionSort ? tableData.sort((a, b) => a.position.localeCompare(b.position)) : tableData.sort((a, b) => b.position.localeCompare(a.position))
        }
        if(index === '2'){
            setOfficeSort(!officeSort)
            officeSort ? tableData.sort((a, b) => a.office.localeCompare(b.office)) : tableData.sort((a, b) => b.office.localeCompare(a.office))
        }
        if(index === '3'){
            setAgeSort(!ageSort)
            ageSort ? tableData.sort((a, b) =>  a.age - b.age ) : tableData.sort((a, b) =>  b.age- a.age  )
        }
        if(index === '4'){
            setDateSort(!dateSort)
            dateSort ? tableData.sort((a, b) => a.date.localeCompare(b.date)) : tableData.sort((a, b) => b.date.localeCompare(a.date))
        }
        if(index === '5'){
            setSalarySort(!salarySort)
            salarySort ? tableData.sort((a, b) => a.salary-b.salary) : tableData.sort((a, b) => b.salary-a.salary)
        }

        setTableData([...tableData])
    }
    
  return (
    <>
      <div className="w-full  mx-auto px-2 flex justify-start items-center">






<div id='recipients' className="p-8 m-5 w-fit  border rounded shadow-lg bg-white">

        <h1 className="text-lg text-center text-slate-800 font-semibold">Employee Data Table</h1>
        <div className="text-right my-3 mx-1 space-x-1">
            
            <span>Search: </span>
            <input type="text" className="bg-gray-100 p-1 outline-blue-100" />
            
        </div>


    <table id="example" className="stripe hover" >
        <thead className="border-b border-gray-800">
            <tr >
                {
                    tablefields.map((item, index) => {
                        return (    
                            <th onClick={handleSort} key={index}  className="p-2 cursor-pointer"  ><span className='flex justify-center items-center gap-3'  id={index}>{item} <FaSort size={12} color='gray'/></span></th>
                        )
                    })
                }
                
            </tr>
        </thead>
        <tbody className="border-b border-gray-300">
            {
                tableData.map((item, index) =>{
                    return (
                        <tr key={index} className=" text-center rows">
                            <td >{item.name}</td>
                            <td >{item.position}</td>
                            <td >{item.office}</td>
                            <td >{item.age}</td>
                            <td >{item.date}</td>
                            <td >${item.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
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


</div>
    </>
  )
}