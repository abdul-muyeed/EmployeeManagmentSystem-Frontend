import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";

import { Link } from "react-router-dom";
import useEmployee from "../hooks/useEmployee";
import useAuth from "../hooks/useAuth";
export default function EmployeeTable() {
  const { user } = useAuth();
  const [page, setPage] = useState(0);
  const { employees, loading } = useEmployee();
  const [ageSort, setAgeSort] = useState(false);
  const [nameSort, setNameSort] = useState(false);
  const [positionSort, setPositionSort] = useState(false);
  const [deptSort, setdeptSort] = useState(false);
  const [dateSort, setDateSort] = useState(false);
  const [salarySort, setSalarySort] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableData1, setTableData1] = useState([]);
  const departmens = ["IT", "HR", "Sales", "Marketing", "Engineering"];
  const positions = [
    "Web Developer",
    "Team Lead",
    "Senior Developer",
    "Junior Developer",
    "Intern",
  ];

  function handleSort(e) {
    const index = e.target.id;

    console.log(index);

    if (index === "0") {
      setNameSort(!nameSort);
      nameSort
        ? tableData.sort((a, b) => a.firstName.localeCompare(b.firstName))
        : tableData.sort((a, b) => b.firstName.localeCompare(a.firstName.name));
    }
    if (index === "1") {
      setAgeSort(!ageSort);
      ageSort
        ? tableData.sort((a, b) => a.age - b.age)
        : tableData.sort((a, b) => b.age - a.age);
    }
    if (index === "2") {
      setPositionSort(!positionSort);
      positionSort
        ? tableData.sort((a, b) => a.position.localeCompare(b.position))
        : tableData.sort((a, b) => b.position.localeCompare(a.position));
    }
    if (index === "3") {
      setdeptSort(!deptSort);
      deptSort
        ? tableData.sort((a, b) => a.department.localeCompare(b.department))
        : tableData.sort((a, b) => b.department.localeCompare(a.department));
    }
    if (index === "4") {
      setDateSort(!dateSort);
      dateSort
        ? tableData.sort((a, b) => a.joiningDate.localeCompare(b.joiningDate))
        : tableData.sort((a, b) => b.joiningDate.localeCompare(a.joiningDate));
    }
    if (index === "5") {
      setSalarySort(!salarySort);
      salarySort
        ? tableData.sort((a, b) => a.salary - b.salary)
        : tableData.sort((a, b) => b.salary - a.salary);
    }

    setTableData1([...tableData]);
  }

  const handlefilter = () => {
    let search = document.getElementById("search").value;
    let department = document.getElementById("department").value;
    let position = document.getElementById("postion").value;
    console.log(search, department, position);

    let data = tableData.filter((item) => {
      let name = item.firstName + " " + item.lastName;
      if (name.toLowerCase().includes(search)) {
        if (
          item.department.includes(department) &&
          item.position.includes(position)
        ) {
          return item;
        }
      }
    });

    setTableData1([...data]);
  };

  useEffect(() => {
    if (employees) {
      setTableData([...employees]);
      setTableData1([...employees]);
    }
  }, [employees]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="p-8 m-5 w-fit  border rounded shadow-lg bg-white">
        <h1 className="text-lg text-center text-slate-800 font-semibold">
          Employee Data Table
        </h1>
        <div className="flex justify-between  my-3 mx-1 ">
          <div className="flex gap-x-3">
            <div className="">
              <span className="mr-2">Filter By :</span>
              <select
                onChange={handlefilter}
                className="bg-gray-100 border text-center border-gray-300 py-1 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500   outline-none shadow-sm"
                id="department"
              >
                <option value="">Department</option>
                {departmens.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="">
              <select
                onChange={handlefilter}
                className="bg-gray-100 border text-center border-gray-300 py-1 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500   outline-none shadow-sm"
                id="postion"
              >
                <option value="">Position</option>
                {positions.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div>
            <span>Search: </span>
            <input
              onChange={handlefilter}
              id="search"
              type="text"
              className="bg-gray-100 p-1 outline-blue-100"
            />
          </div>
        </div>

        <table>
          <thead className="border-b border-gray-800">
            <tr>
              <th onClick={handleSort} className="p-2 cursor-pointer">
                <span className="flex justify-center items-center gap-3" id="0">
                  Name
                  <FaSort size={12} color="gray" />{" "}
                </span>
              </th>
              <th onClick={handleSort} className="p-2 cursor-pointer">
                <span className="flex justify-center items-center gap-3" id="1">
                  Age
                  <FaSort size={12} color="gray" />{" "}
                </span>
              </th>
              <th onClick={handleSort} className="p-2 cursor-pointer">
                <span className="flex justify-center items-center gap-3" id="2">
                  Position
                  <FaSort size={12} color="gray" />{" "}
                </span>
              </th>
              <th onClick={handleSort} className="p-2 cursor-pointer">
                <span className="flex justify-center items-center gap-3" id="3">
                  Department
                  <FaSort size={12} color="gray" />{" "}
                </span>
              </th>
              <th onClick={handleSort} className="p-2 cursor-pointer">
                <span className="flex justify-center items-center gap-3" id="4">
                  Joining Date
                  <FaSort size={12} color="gray" />{" "}
                </span>
              </th>
              <th onClick={handleSort} className="p-2 cursor-pointer">
                <span className="flex justify-center items-center gap-3" id="5">
                  Salary
                  <FaSort size={12} color="gray" />{" "}
                </span>
              </th>
              <th className="p-2 cursor-pointer">
                <span className="flex justify-center items-center gap-3">
                  Action
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="border-b border-gray-300">
            {tableData1.slice(page * 5, page * 5 + 5).map((item, index) => {
              return (
                <tr key={index} className=" text-center rows">
                  <td>
                    <Link to={`../employee/${item._id}`}>
                      {item.firstName + " " + item.lastName}{" "}
                    </Link>
                  </td>

                  <td>{item.age}</td>
                  <td>{item.position}</td>
                  <td>{item.department}</td>
                  <td>{item.joiningDate?.slice(0, 10)}</td>
                  <td>
                    {" "}
                    {item.salary
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td className="space-x-2">
                    <Link to={`../edit/${item._id}`}>
                      <button className="border border-green-500 bg-green-500 text-white rounded-md px-2 py-1 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
                        Edit
                      </button>
                    </Link>
                    {item._id !== user._id && (
                      <Link to={`../delete/${item._id}`}>
                        <button className="border border-red-500 bg-red-500 text-white rounded-md px-2 py-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                          Delete
                        </button>
                      </Link>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-5">
          <div>Total Entries: {tableData1.length}</div>
          <div className="space-x-3">
            <span
              className="p-2 bg-blue-400 rounded cursor-pointer"
              onClick={() => setPage(0)}
            >
              First
            </span>
            {page > 0 && (
              <span
                className="p-2 bg-blue-400 rounded cursor-pointer"
                onClick={() => setPage(page - 1)}
              >
                Pre
              </span>
            )}
            <span className="p-2 bg-blue-400 rounded cursor-pointer">
              {page + 1}
            </span>
            {page < Math.ceil(tableData1.length / 5 - 1) && (
              <span
                className="p-2 bg-blue-400 rounded cursor-pointer"
                onClick={() => setPage(page + 1)}
              >
                Next
              </span>
            )}
            <span
              className="p-2 bg-blue-400 rounded cursor-pointer"
              onClick={() => setPage(Math.ceil(tableData1.length / 5 - 1))}
            >
              Last
            </span>
          </div>
          <div>
            <Link to="/add">
              <button className="bg-blue-500 text-white p-2 rounded">
                Add Employee
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
