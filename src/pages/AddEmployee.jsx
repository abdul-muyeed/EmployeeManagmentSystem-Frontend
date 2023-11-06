import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function AddEmployee() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, position, department, joinDate, Salary, password } = e.target;
        const user = {email: email.value, position: position.value, department: department.value, joinDate: joinDate.value, Salary: Salary.value, password: password.value };
        console.log(user)
        // adding new employee
        const res = await axios.post('/api/employee', user)
    
        if(res.status === 201){
            alert("User Created Successfully")
            navigate('/')
        }else if (res.status === 401){
            alert("You are not authorized. plz Login")
            navigate('/login')
        }else{
            alert("User Creation Failed" + res.json() + res.status + res.statusText + res.body)
        }
        
            
            
    }
    
    return(
        <>
        
        <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
            <div className="h-max mx-auto flex flex-col items-center">
                <h1 className="text-xl font-bold text-center pb-10">Login to your account</h1>
                
                <div className="bg-white shadow-xl p-10 flex flex-col text-sm">
                <form className="space-y-3" method="POST" onSubmit={handleSubmit}>
                <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="id">ID Number</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="number" name="id" placeholder="1234" required/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="email">Email</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="abdul@gmail.com" required/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="position">Position</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="position" placeholder="junior Engineer" required/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="department">Department</label> 
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="department" placeholder="IT" required/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="joinDate">Date of Joining</label>        
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"  type="date" name="joinDate"  placeholder="yyyy-mm-dd" required/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="number">Salary</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="number" name="Salary" placeholder="100000" required/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="password">Password</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******" required/>
                    </div>
                    <div className="flex my-4">
                        <div className="w-1/2 flex gap-x-1">
                            <input type="checkbox" name="remeberMe"/>
                            <label htmlFor="remeberMe">Remeber me</label>
                        </div>
                        <div className="w-1/2">
                            <a className="font-bold text-blue-600" href="">Forgot password ?</a>
                        </div>
                    </div>
                    <div>
                        <input className="bg-[#3c35b8] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" />
                    </div>
                    </form>
                </div>
                
                </div>
        </div>
        </>
      )
}