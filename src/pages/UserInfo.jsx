// import { useParams } from "react-router-dom"
import { Link, useParams } from "react-router-dom";
import useEmployeeInfo from "../hooks/useEmployeeInfo";

export default function UserInfo() {
  const { id } = useParams();
  const { userData, loading } = useEmployeeInfo(id);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="w-full">
        <div className="p-8 m-5 dashbox border rounded shadow-lg bg-white">
          <h1 className="text-xl font-semibold ">User Information</h1>
          <div className="w-40 h-40 my-5">
            <img
              className="rounded-full"
              src={"https://picsum.photos/200"}
              alt=""
            />
          </div>
          <span className="text-lg font-semibold">
            {userData?.firstName + " " + userData?.lastName}
          </span>
          <span className="text-gray-600 mt-1">{userData?.position}</span>
        </div>
        <div className="m-5 flex rounded flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2 gap-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700">
                    {userData?.firstName + " " + userData?.lastName}
                  </span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Age:</span>
                  <span className="text-gray-700">{userData?.age}</span>
                </li>

                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Positon:</span>
                  <span className="text-gray-700">{userData?.position}</span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Department:</span>
                  <span className="text-gray-700">{userData?.department}</span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Joined:</span>
                  <span className="text-gray-700">
                    {userData?.joiningDate?.slice(0, 10)}
                  </span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Salary:</span>
                  <span className="text-gray-700">{userData?.salary}</span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700">{userData?.email}</span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Phone:</span>
                  <span className="text-gray-700">{userData?.phone}</span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Address:</span>
                  <span className="text-gray-700">{userData?.address}</span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Skills:</span>
                  <span className="text-gray-700">
                    {userData?.skills &&
                      userData?.skills.map((item, index) => {
                        if (index === userData?.skills.length - 1) {
                          return <span key={index}>{item}</span>;
                        }
                        return <span key={index}>{item}, </span>;
                      })}
                  </span>
                </li>
                <li className="flex border-b py-2 gap-2">
                  <span className="font-bold w-24">Education:</span>
                  <span className="text-gray-700">
                    {userData?.education && userData?.education[0]?.degree}
                    {userData?.education[0]?.degree && <> from </>}{" "}
                    {userData?.education && userData?.education[0]?.university}{" "}
                    {userData?.education[0]?.university && <> in </>}{" "}
                    {userData?.education &&
                      userData?.education[0]?.graduationYear}
                  </span>
                </li>
              </ul>
              <Link to={`../edit/${id}`} className=" mt-5 flex justify-end items-center">
                      <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-1  transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
                        Edit
                      </button>
                    </Link>
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  );
}
