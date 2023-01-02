import React from "react";
import { BiLogOut } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { BsBookmarkDashFill } from "react-icons/bs";
import { MdPhoneCallback, MdMessage } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { CgSearchLoading } from "react-icons/cg";

function SideNav() {
  return (
    <aside className="flex-1 h-4/5 bg-white rounded-r-3xl shadow-2xl flex flex-col  w-11/12">
      <img
        src="/images/logo.png"
        alt="Indiaassetz"
        className="self-center px-2 pt-2"
      />
      <div className="px-4  flex flex-col h-full">
        <hr className="bg-slate-500 h-[2px]" />
        <nav className="flex flex-col flex-grow gap-y-4 mt-2 pl-2">
          <Comp title="Dashboard" icon={<RiDashboardFill />} />
          <Comp title="Leads" icon={<FaUsers />} />
          <Comp title="Clients" icon={<FaUsers />} />
          <Comp title="Properties" icon={<ImHome />} />
          <Comp title="Orders" icon={<BsBookmarkDashFill />} />

          <Comp title="Call Back" icon={<MdPhoneCallback />} />
          <Comp title="Payments" icon={<GiWallet />} />
          <Comp title="IA - AI" icon={<CgSearchLoading />} />
          <Comp title="Red Box" icon={<MdMessage />} />
        </nav>

        <button
          className="flex items-center gap-x-1 font-semibold text-red-800 mb-10 pl-2"
          type="button"
        >
          <BiLogOut /> Log out
        </button>
      </div>
    </aside>
  );
}

function Comp(props) {
  const { icon, title } = props;
  return (
    <div className="flex items-center gap-x-2 cursor-pointer text-slate-600 hover:text-black">
      {icon} {title}
    </div>
  );
}

export default SideNav;
