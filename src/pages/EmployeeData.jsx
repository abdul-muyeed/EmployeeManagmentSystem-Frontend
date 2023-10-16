
export default async function EmployeeData(){

    const res = await fetch('api/employee');
    const data = await res.json();
    // console.log(data)
    return data
    
}