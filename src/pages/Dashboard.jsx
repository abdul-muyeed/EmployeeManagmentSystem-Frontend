import BarChart from "./BarChart";
import useEmployee from "./useEmployee";





export default function Dashboard() {
  const {employees, loading,rows,cols,age,salary,Agecols} = useEmployee()
  
  // const getEmployeeData = async () => {
  //   let data = await EmployeeData();
  //   setEmployeeData(data);
  //   let sum = data.reduce((acc, item) => acc + item.age, 0);
  //   //setAge(sum / data.length);
  //   setAge(Math.round(sum / data.length));  
  //   sum = data.reduce((acc, item) => acc + item.salary, 0);
  //   setSalary(Math.round(sum / data.length));

  //   let row = data.map((item) => item.firstName+" "+item.lastName);
  //   let col = data.map((item) => item.salary);
  //   let agecol = data.map((item) => item.age);
  //   setAgeCols(agecol);
  //   setRows(row);
  //   setCols(col);
  // };
  // useEffect(() => {
  //   getEmployeeData();
  // },[])
  // console.log(rows, cols);

  if(loading) return <h1>Loading...</h1>
  return (
    <section className="w-full">
      <div className="p-8 m-5 dashbox border rounded shadow-lg bg-white">
        <h1 className="text-center my-3 font-semibold text-2xl mb-5 ">Dashboard</h1>
        <div className="flex space-x-20">
            <div className="flex flex-col justify-center items-center bg-green-600 py-7 px-10 gap-2 rounded-lg shadow-lg text-white">
                <h1 className="font-semibold">Total Employee</h1>
                <span className="text-3xl">{employees.length}</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-600 py-7 px-10 gap-2 rounded-lg shadow-lg text-white">
                <h1 className="font-semibold">Avgarage Age</h1>
                <span className="text-3xl">{age}</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-blue-600 py-7 px-10 gap-2 rounded-lg shadow-lg text-white">
                <h1 className="font-semibold">Avgarage Salary</h1>
                <span className="text-3xl">{salary}</span>
            </div>
        </div>
      </div>
      <div className="p-8 m-5 dashbox border rounded shadow-lg bg-white">
        <div className="w-[800px] h-96 flex justify-center items-center">
          <BarChart  chartData={
            {
              labels: rows,
              datasets: [
                {
                  label: "Salary",
                  data: cols,
                  backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
                  borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                  borderWidth: 1,
                },
              ],
            }
          } />
        </div>
      </div>
      <div className="p-8 m-5 dashbox border rounded shadow-lg bg-white">
        <div className="w-[800px] h-96 flex justify-center items-center">
          <BarChart  chartData={
            {
              labels: rows,
              datasets: [
                {
                  label: "Age",
                  data: Agecols,
                  backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
                  borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                  borderWidth: 1,
                },
              ],
            }
          } />
        </div>
      </div>
    </section>
  );
}
