// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function LoginAdmin(){
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {email, password} = e.target;
        const user = {email: email.value, password: password.value}
        console.log(user)
        const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
    
        })
        
        if(res.status === 200){
            alert("Login Successful")
        //    window.location.href = '/'
        }else{
            alert("Login Failed")
        }
        

   
    }
  return(
    <>
    
    <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <div className="h-max mx-auto flex flex-col items-center">
            <h1 className="text-xl font-bold text-center pb-10">Login as Admin</h1>
            
            <div className="bg-white shadow-xl p-10 flex flex-col text-sm">
            <form className="space-y-3" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="email">Email</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="mehedi@jaman.com"/>
                </div>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="password">Password</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******"/>
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
                <div className="text-center">Login as Employee. <Link to={'/login'} className="text-blue-700">Here.</Link> </div>
                </form>
            </div>
            
            </div>
    </div>
    </>
  )
}