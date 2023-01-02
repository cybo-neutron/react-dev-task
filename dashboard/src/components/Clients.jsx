import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MdFilterList } from "react-icons/md";

function Clients() {
  return (
    <div className="w-full  mt-2 h-full">
      <div className="w-full bg-white rounded-[5px] px-3 py-[1px] shadow-sm">
        <h2 className="text-lg font-semibold">Clients</h2>
        <p className="text-xs text-slate-600">Total 1240 "All Records"</p>
      </div>

      <nav className="w-full bg-white flex justify-around gap-x-1 px-1 py-1 mt-4 h-10 rounded-[5px] shadow-sm">
        <Button title="All" />
        <Button active={true} title="Sell" />
        <Button title="Buy" />
        <Button title="Rent" />
        <Button title="Lease" />
      </nav>
      <div className="flex mt-2 px-5 py-1 text-sm font-semibold rounded-md items-center justify-self-end bg-white w-fit ml-auto ">
        <MdFilterList /> Filter
      </div>
      <Table />
    </div>
  );
}

function Button({ title, active }) {
  return (
    <button
      type="button"
      className={`w-full  rounded-md font-semibold h-full 
            ${active ? "bg-slate-900 text-white" : ""}
            `}
    >
      {title}
    </button>
  );
}

function Table() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    };
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div className=" relative shadow-md w-full overflow-hidden rounded-t-md mt-2 bg-white ">
      <table className="w-full text-sm text-left text-white ">
        <thead className="text-xs text-white  bg-slate-900">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                {/* <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label> */}
              </div>
            </th>
            <th scope="col" className="px-1">
              Name
            </th>
            <th scope="col" className="px-1">
              Type
            </th>
            <th scope="col" className="px-1">
              Email
            </th>
            <th scope="col" className="px-1">
              Valuation
            </th>
            <th scope="col" className="px-1">
              Contact
            </th>
            <th scope="col" className="px-1">
              Branch
            </th>
            <th scope="col" className="px-1 pr-3">
              PRM
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr className="border-b text-slate-900" key={index}>
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {/* <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label> */}
                  </div>
                </td>
                <td className="px-1">{user.firstName}</td>
                <td className="px-1">{user.gender}</td>
                <td className="px-1">{user.email}</td>
                <td className="px-1">{user.height}</td>
                <td className="px-1">{user.phone}</td>
                <td className="px-1">{user.university}</td>
                {/* <td className="px-1">{user.ssn}</td> */}
                <td className="px-1 pr-3">
                  <select
                    name="prm"
                    id=""
                    className="bg-slate-200 rounded-sm py-1 outline-none"
                  >
                    <option value="assign">Assign</option>
                    <option value="assign">Assign</option>
                    <option value="assign">Assign</option>
                  </select>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="text-sm flex items-center gap-x-2 w-fit ml-auto py-3 pr-4">
        Showing 1-50 of 1240
        <button
          type="button"
          disabled
          className=" bg-slate-900 disabled:bg-slate-300 px-1 text-center font-bold text-white"
        >
          &lt;
        </button>
        <p>1</p>
        <button
          type="button"
          className="bg-slate-900 px-1 text-white font-bold"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
export default Clients;
