import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useEmployeeInfo from "../hooks/useEmployeeInfo";
import axios from "axios";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userData, loading } = useEmployeeInfo(id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [joiningDate, setJoiningDate] = useState();
  const [salary, setSalary] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [skills, setSkills] = useState([]);
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [graduationYear, setGraduationYear] = useState(2000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        // editinging new employee
        const res = await axios.post("/api/employee/edit/" + userData._id, {
            firstName,
            lastName,
            age,
            position,
            department,
            joiningDate,
            salary,
            email,
            phone,
            address,
            skills,
            education: [
              {
                degree,
                university,
                graduationYear,
              },
            ],
          });
      
          if (res.status === 201) {
            alert("User Updated Successfully");
            navigate("/employee/" + userData._id)
          }else if(res.status === 401){
              alert("You are not authorized. plz Login")
              navigate("/login")
          } else {
            alert("User Creation Failed" + res.status + res.statusText + res.body);
          }

    }catch(err){
        console.log(err)
    }
    
  };
  useEffect(() => {
    if (userData) {
      setFirstName(userData?.firstName);
      setLastName(userData?.lastName);
      setAge(userData?.age);
      setPosition(userData?.position);
      setDepartment(userData?.department);
      setJoiningDate(userData?.joiningDate.slice(0, 10));
      setSalary(userData?.salary);
      setEmail(userData?.email);
      setPhone(userData?.phone);
      setAddress(userData?.address);
      setSkills(userData?.skills);
      setDegree(userData?.education[0]?.degree);
      setUniversity(userData?.education[0]?.university);
      setGraduationYear(userData?.education[0]?.graduationYear);
    }
  }, [userData]);
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="w-full">
        <div className="p-8 m-5 dashbox border rounded shadow-lg bg-white">
          <h1 className="text-xl font-semibold ">User Information</h1>
          <div className="w-40 h-40 my-5">
            <img
              className="rounded-full"
              src="https://picsum.photos/200"
              alt=""
            />
          </div>
          <span className="text-lg font-semibold">
            {firstName + " " + lastName}
          </span>
          <span className="text-gray-600 mt-1">{position}</span>
        </div>
        <div className="m-5 flex rounded flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <form method="POST" onSubmit={handleSubmit}>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-2 gap-2">
                    <span className="font-bold w-24">First name:</span>
                    <input
                      className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                      type="text"
                      name="fname"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      required
                    />
                  </li>
                  <li className="flex border-y py-2 gap-2">
                    <span className="font-bold w-24">Last name:</span>
                    <input
                      className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                      type="text"
                      name="lname"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      required
                    />
                  </li>
                  <li className="flex border-b py-2 gap-2">
                    <span className="font-bold w-24">Age:</span>
                    <input
                      className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                      type="text"
                      name="age"
                      onChange={(e) => setAge(e.target.value)}
                      value={age}
                      required
                    />
                  </li>
                  {true && (
                    <>
                      <li className="flex border-b py-2 gap-2">
                        <span className="font-bold w-24">Positon:</span>
                        <input
                          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                          type="text"
                          name="position"
                          onChange={(e) => setPosition(e.target.value)}
                          value={position}
                          required
                        />
                      </li>
                      <li className="flex border-b py-2 gap-2">
                        <span className="font-bold w-24">Department:</span>
                        <input
                          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                          type="text"
                          name="department"
                          onChange={(e) => setDepartment(e.target.value)}
                          value={department}
                          required
                        />
                      </li>
                      <li className="flex border-b py-2 gap-2">
                        <span className="font-bold w-24">Joined:</span>
                        <input
                          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                          type="date"
                          name="joiningDate"
                          onChange={(e) => setJoiningDate(e.target.value)}
                          value={joiningDate}
                          required
                        />
                      </li>

                      <li className="flex border-b py-2 gap-2">
                        <span className="font-bold w-24">Salary:</span>
                        <input
                          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                          type="number"
                          name="salary"
                          onChange={(e) => setSalary(e.target.value)}
                          value={salary}
                          required
                        />
                      </li>
                    </>
                  )}

                  <li className="flex border-b py-2 gap-2">
                    <span className="font-bold w-24">Email:</span>
                    <input
                      className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                      type="text"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </li>
                  <li className="flex border-b py-2 gap-2">
                    <span className="font-bold w-24">Phone:</span>
                    <input
                      className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                      type="text"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      required
                    />
                  </li>
                  <li className="flex border-b py-2 gap-2">
                    <span className="font-bold w-24">Address:</span>
                    <input
                      className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                      type="text"
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      required
                    />
                  </li>
                  <li className="flex border-b py-2 gap-2">
                    <span className="font-bold w-24">Skills:</span>
                    <input
                      className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                      type="text"
                      name="skills"
                      onChange={(e) => setSkills(e.target.value.split(","))}
                      value={skills}
                      placeholder="c++,c#,java"
                      required
                    />
                  </li>
                  {true && (
                    <>
                      <li className="flex border-b py-2 gap-2">
                        <span className="font-bold w-24">Education:</span>
                        <input
                          type="text"
                          className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "
                          name="degree"
                          onChange={(e) => setDegree(e.target.value)}
                          value={degree}
                          placeholder="Degree"
                          required
                        />
                        <input
                          type="text"
                          className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "
                          name="university"
                          onChange={(e) => setUniversity(e.target.value)}
                          value={university}
                          placeholder="University"
                          required
                        />
                        <input
                          type="number"
                          className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "
                          name="graduationYear"
                          onChange={(e) => setGraduationYear(e.target.value)}
                          value={graduationYear}
                          placeholder="2000"
                          required
                        />
                      </li>
                    </>
                  )}
                  <li className="flex border-b py-2 gap-2">
                    <input
                      className=" w-32  bg-blue-300 rounded-md py-2 px-3  hover:bg-blue-500 text-white"
                      type="submit"
                      value="submit"
                      required
                    />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
