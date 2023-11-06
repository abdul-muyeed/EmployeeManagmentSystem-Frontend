import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function Deleted() {
    const {id} = useParams()
    const navigate = useNavigate()

    const handleDelete = async () => {
        try{
            // deleting employee
            const res = await axios.delete('/api/employee/delete/'+id)   
            if(res.status == 204){
                alert("Employee Deleted")
                navigate('/')
            }else if(res.status == 401){
                alert("You are not authorized. plz Login")
                navigate('/login')
            }else{
                alert("Employee Not Deleted")
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="m-auto mt-10">
            <h1 className="font-bold text-2xl"> Confirm Deletion</h1>
            <div className="flex justify-center mt-5">
                <Link to='/'><button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">No</button></Link>
                
                <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={handleDelete}>Yes</button>
            </div>
        </div>
    )
}