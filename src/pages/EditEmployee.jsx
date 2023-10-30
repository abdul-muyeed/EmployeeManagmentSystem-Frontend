import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useEmployeeInfo from "./useEmployeeInfo"


export default function EditEmployee() {
    const {id} = useParams()  
    const {userData,loading} = useEmployeeInfo(id)
    const [userData1,setUserData] = useState()  
    // console.log(userData)
    


    
    
    
    
    
    


    
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/edit/${userData1._id}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData1)
        })

        if(res.status === 201){
            alert("User Updated Successfully")
        //    window.location.href = '/'
        }else{
            alert("User Creation Failed" + res.status + res.statusText + res.body)
        }
        
    }
    useEffect(() => {
        if(userData){
            // console.log(userData)
            setUserData(userData)
            // console.log(userInfo)
        }
        
        
    },[userData])
    if(loading) return <h1>Loading...</h1>

    const {firstName, lastName, age, position, department, joiningDate, salary,email, phone,address,skills, education, admin} = userData1 ? userData1 : userData
    


    
    

       
        
    return (
        <>
        <div className="w-full">
        <div className="p-8 m-5 dashbox border rounded shadow-lg bg-white">
            <h1 className="text-xl font-semibold ">User Information</h1>
            <div className="w-40 h-40 my-5">
                <img  className="rounded-full" src="https://picsum.photos/200" alt="" />
            </div>
            <span className="text-lg font-semibold">{firstName +" "+lastName}</span>
            <span className="text-gray-600 mt-1">{position}</span>  

        </div>
            <div className="m-5 flex rounded flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col 2xl:w-1/3">
                <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                    <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                    <form method="POST" onSubmit={handleSubmit}>
                    <ul className="mt-2 text-gray-700">
                        
                        <li className="flex border-y py-2 gap-2">
                            <span className="font-bold w-24">First name:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text" name="fname" onChange={(e)=>setUserData({...userData1, firstName: e.target.value})} value={firstName} />
                        </li>
                         <li className="flex border-y py-2 gap-2">
                            <span className="font-bold w-24">Last name:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text" name="lname" onChange={(e)=>setUserData({...userData1, lastName: e.target.value})} value={lastName} />
                            
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Age:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text"name="age" onChange={(e)=>setUserData({...userData1, age: e.target.value})}  value={age} />
                        </li>
                        { admin && <>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Positon:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text" name="position" onChange={(e)=>setUserData({...userData1, position: e.target.value})} value={position} />
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Department:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text" name="department" onChange={(e)=>setUserData({...userData1, department: e.target.value})} value={department} />
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Joined:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="date" name="joiningDate" onChange={(e)=>setUserData({...userData1, joiningDate: e.target.value})} value={joiningDate} />
                        </li>
                        
                                <li className="flex border-b py-2 gap-2">
                                <span className="font-bold w-24">Salary:</span>
                                <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="number" name="salary" onChange={(e)=>setUserData({...userData1, salary: e.target.value})} value={salary} />
                            </li></>
                        }
                        
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Email:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text" name="email" onChange={(e)=>setUserData({...userData1, email: e.target.value})} value={email} />
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Phone:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text" name="phone" onChange={(e)=>setUserData({...userData1, phone: e.target.value})} value={phone} />
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Address:</span>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text" name="address" onChange={(e)=>setUserData({...userData1, address: e.target.value})} value={address} />
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Skills:</span>
                            <input className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" type="text" name="skills" onChange={(e)=>setUserData({...userData1, skills: e.target.value.split(',')})} value={skills} />  
                        </li>
                        {education && <>
                            <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Education:</span>
                            <input type="text" className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 " name="degree" onChange={(e)=>setUserData({...userData1,education: userData1.education.map((education)=>({...education, degree: e.target.value}))})} value={education[0].degree} />
                            <input type="text" className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 " name="university" onChange={(e)=>setUserData({...userData1,education: userData1.education.map((education)=>({...education, university: e.target.value}))})} value={education[0].university} />
                            <input type="number" className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 " name="graduationYear" onChange={(e)=>setUserData({...userData1,education: userData1.education.map((education)=>({...education, graduationYear: e.target.value}))})} value={education[0].graduationYear} />
                        </li>
                        </>
                            

                        }
                        
                        <li className="flex border-b py-2 gap-2">
                            <input className=" w-32  bg-blue-300 rounded-md py-2 px-3  hover:bg-blue-500 text-white" type="submit" value="submit"/>  
                        </li>  
                    </ul>
                    </form>
                </div>
                
            </div>
            
        </div>
        </div>
            
        </>
    )

    

}