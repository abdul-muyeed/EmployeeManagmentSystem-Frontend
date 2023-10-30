
const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, position, department, joinDate, Salary, password } = e.target;
    const user = {email: email.value, position: position.value, department: department.value, joinDate: joinDate.value, Salary: Salary.value, password: password.value };
    console.log(user)
    const res = await fetch('/api/add', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)

    })

    if(res.status === 201){
        alert("User Created Successfully")
    //    window.location.href = '/'
    }else{
        alert("User Creation Failed" + res.json() + res.status + res.statusText + res.body)
    }
    
        
        
}

export default function AddEmployee() {
    return(
        <>
        
        <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
            <div className="h-max mx-auto flex flex-col items-center">
                <h1 className="text-xl font-bold text-center pb-10">Login to your account</h1>
                
                <div className="bg-white shadow-xl p-10 flex flex-col text-sm">
                <form className="space-y-3" method="POST" onSubmit={handleSubmit}>
                <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="id">ID Number</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="number" name="id" placeholder="mehedi@jaman.com"/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="email">Email</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="mehedi@jaman.com"/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="position">Position</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="position" placeholder="mehedi@jaman.com"/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="department">Department</label> 
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="department" placeholder="mehedi@jaman.com"/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="joinDate">Date of Joining</label>        
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"  type="date" name="joinDate"  placeholder="yyyy-mm-dd"/>
                    </div>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-1" htmlFor="number">Salary</label>
                        <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="number" name="Salary" placeholder="mehedi@jaman.com"/>
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
                    </form>
                </div>
                
                </div>
        </div>
        </>
      )
}