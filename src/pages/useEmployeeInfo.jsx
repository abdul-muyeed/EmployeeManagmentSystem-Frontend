import { useEffect, useState } from "react"

export default function useEmployeeInfo(id) {

    const [loading, setLoading] = useState(true)
    const [userData,setUserData] = useState()

    const getInfo = async () => {
        try{
            const res = await fetch('http://localhost:3000/employee/'+id)
        const data = await res.json()
        // console.log(data)
        setUserData(data)
        
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }

    }
    useEffect(() => {
        getInfo()
    },[])
        
            return {userData,loading}
}