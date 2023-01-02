import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

function MainContent(props) {
  const { children } = props;
  return (
    <section className="flex-1 h-screen">
      <TopNav />
      {children}
    </section>
  );
}

function TopNav() {
  return (
    <nav className="flex items-center gap-x-2 mt-2 h-8">
      <button
        type="button"
        className="bg-white rounded-md h-full w-8 flex justify-center items-center "
      >
        <IoArrowBackCircleSharp className="text-xl " />
      </button>

      <div className="flex items-center flex-grow bg-white rounded-md overflow-hidden h-full">
        <CiSearch className="text-xl ml-1" />
        <input
          type="text"
          className="w-full p-1 outline-none"
          placeholder="Search Clients,Properties,Services"
        />
      </div>

      <button
        type="button"
        className="bg-slate-900 text-white rounded-md text-sm flex items-center gap-x-1 h-full px-2"
      >
        <AiFillPlusCircle />
        Add client
      </button>
      <button
        type="button"
        className="bg-white p-1 rounded-md h-full w-8 flex justify-center items-center"
      >
        <MdNotifications className="text-xl" />
      </button>

      <div>
        <img
          src="images/keanu.jpg"
          alt=""
          className="rounded-full h-10 w-10 object-cover p-1"
        />
      </div>
    </nav>
  );
}

export default MainContent;
