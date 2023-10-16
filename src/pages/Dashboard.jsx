import { useState } from "react";
import BarChart from "./BarChart";





export default function Dashboard() {
  // const [tableData,setTableData]  = useState([
  //   {
  //       firstName: "Alice",
  //       LastName: "Smith",
  //       age: 35,
  //       position: "Data Analyst",
  //       email: "alice.smith@example.com",
  //       phone: "987-654-3210",
  //       address: "456 Elm St, Townsville",
  //       image: "alice-smith.jpg",
  //       department: "Analytics",
  //       joiningDate: "2021-08-20",
  //       salary: 72000,
  //       skills: ["Python", "SQL", "Data Visualization"],
  //       education: [
  //                       {
  //                           degree: "Master's in Statistics",
  //                           university: "XYZ University",
  //                           graduationYear: 2019
  //                       }
  //                   ]
  //   },
  //   {
  //       firstName: "Bob",
  //       lastName: "Johnson",
  //       age: 29,
  //       position: "Software Developer",
  //       email: "bob.johnson@example.com",
  //       phone: "555-123-4567",
  //       address: "789 Oak St, Citytown",
  //       image: "bob-johnson.jpg",
  //       department: "Engineering",
  //       joiningDate: "2022-03-10",
  //       salary: 95000,
  //       skills: ["Java", "Spring Boot", "Ruby on Rails"],
  //       education: [
  //                       {
  //                           degree: "Bachelor's in Computer Science",
  //                           university: "ABC University",
  //                           graduationYear: 2015
  //                       }
  //                   ]
  //   }
  
  // ])
  const [userData] = useState({
    labels: ["Alice", "Bob","skjbc"],
    datasets: [
      {
        label: "Age",
        data: [35, 29,34],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  })
  return (
    <section className="w-full">
      <div className="p-8 m-5 w-fit border rounded shadow-lg bg-white">
        <h1 className="text-center my-3 font-semibold text-2xl mb-5 ">Dashboard</h1>
        <div className="flex space-x-20">
            <div className="flex flex-col justify-center items-center bg-green-600 py-7 px-10 gap-2 rounded-lg shadow-lg text-white">
                <h1 className="font-semibold">Total Employee</h1>
                <span className="text-3xl">120</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-600 py-7 px-10 gap-2 rounded-lg shadow-lg text-white">
                <h1 className="font-semibold">Avgarage Age</h1>
                <span className="text-3xl">120</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-blue-600 py-7 px-10 gap-2 rounded-lg shadow-lg text-white">
                <h1 className="font-semibold">Avgarage Salary</h1>
                <span className="text-3xl">120</span>
            </div>
        </div>
      </div>
      <div className="p-8 m-5 w-fit border rounded shadow-lg bg-white">
        <div>
          <BarChart chartData={userData} />
        </div>
      </div>
    </section>
  );
}
