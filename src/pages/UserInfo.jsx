import { useEffect, useState } from "react"
import User from "./User"

export default function UserInfo() {
    const [userData, setUserData] = useState([])
    const getUser = async () => {
        setUserData(await User())
         
    }
    useEffect(() => {
        getUser()
    }, [])
    
    const {firstName, lastName, age, position, department, joiningDate, salary,email, phone,address,skills, education} = userData

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
                    <ul className="mt-2 text-gray-700">
                        
                        <li className="flex border-y py-2 gap-2">
                            <span className="font-bold w-24">Full name:</span>
                            <span className="text-gray-700">{firstName +" "+lastName}</span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Age:</span>
                            <span className="text-gray-700">{age}</span>
                        </li>

                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Positon:</span>
                            <span className="text-gray-700">{position}</span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Department:</span>
                            <span className="text-gray-700">{department}</span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Joined:</span>
                            <span className="text-gray-700">{joiningDate}</span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Salary:</span>
                            <span className="text-gray-700">{salary}</span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Email:</span>
                            <span className="text-gray-700">{email}</span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Phone:</span>
                            <span className="text-gray-700">{phone}</span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Address:</span>
                            <span className="text-gray-700">{address}</span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Skills:</span>
                            <span className="text-gray-700">
                            {skills && skills.map((item,index)=>{
                                        if(index===skills.length-1){
                                            return <span key={index}>{item}</span>
                                        }
                                        return <span key={index}>{item}, </span>
                                    
                                })}
                            </span>
                        </li>
                        <li className="flex border-b py-2 gap-2">
                            <span className="font-bold w-24">Education:</span>
                            <span className="text-gray-700">{education && education[0].degree} from {education && education[0].university} in {education && education[0].graduationYear}</span>
                        </li>   
                    </ul>
                </div>
                
            </div>
            
        </div>
        </div>
            
        </>
    )
}