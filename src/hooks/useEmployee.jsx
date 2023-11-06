import axios from "axios";
import { useEffect, useState } from "react";

export default function useEmployee() {
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [Agecols, setAgeCols] = useState([]);
  const [userData, setUserData] = useState();
  // const [userData,setUserData] = useState()
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  // const [employeeData, setEmployeeData] = useState([])

  const getEmployees = async () => {
    try {
      // getting all employee data
      const res = await axios.get("/api/employee");
      const data = res.data.filter((item) => item.firstName !== undefined);
      setEmployees(data);
      let suma = data.reduce((acc, item) => acc + item.age, 0);
      setAge(Math.round(suma / data.length));
      let sums = data.reduce((acc, item) => acc + item.salary, 0);
      setSalary(Math.round(sums / data.length));
      let row = data.map((item) => item.firstName + " " + item.lastName);
      let col = data.map((item) => item.salary);
      let agecol = data.map((item) => item.age);
      setAgeCols(agecol);
      setRows(row);
      setCols(col);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const employeeinfo = async (id) => {
    try {
        // getting a certain employee data
      const res = await fetch("api/employee/" + id);
      const data = await res.json();

      setUserData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return {
    employees,
    userData,
    employeeinfo,
    loading,
    rows,
    cols,
    age,
    Agecols,
    salary,
  };
}
