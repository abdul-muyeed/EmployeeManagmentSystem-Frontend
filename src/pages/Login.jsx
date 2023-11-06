import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {email, password} = e.target;
        const user = {email: email.value, password: password.value}
        // Login as employee
        const res = await axios.post('/api/auth/signin', user)
        
        
        if(res.status === 200){
            localStorage.setItem('user_data', JSON.stringify(res.data) )
            
            
            
            alert("Login Successful")
            navigate('/')
        }else{
            alert("Login Failed" + res.json() + res.status + res.statusText + res.body)
        }
        }catch(err){
            console.log(err)
        }
        
        

   
    }
  return(
    <>
    
    <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <div className="h-max mx-auto flex flex-col items-center">
            <h1 className="text-xl font-bold text-center pb-10">Login</h1>
            
            <div className="bg-white shadow-xl p-10 flex flex-col text-sm">
            <form className="space-y-3" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="email">Email</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="mehedi@jaman.com" required/>
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
                {/* <div className="text-center">Login as Admin. <Link to={'../admin'} className="text-blue-700">Here.</Link> </div> */}
                </form>
            </div>
            
            </div>
    </div>
    </>
  )
}