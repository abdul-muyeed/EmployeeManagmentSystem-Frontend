export default async function User() {
    const res = await fetch('api/employee/652aa1d33b49d57593503b9b');
    const data = await res.json();
    // console.log(data)
    return data
}