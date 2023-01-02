import React from "react";
import SideNav from "./SideNav";
import MainContent from "./MainContent";
import Clients from "./Clients";
import UserDetails from "./UserDetails";

function Layout() {
  return (
    <div className="flex">
      <div className="w-3/12 lg:w-[200px]">
        <SideNav />
      </div>
      <div className="flex-1 pr-2">
        <MainContent>
          {/* <Clients /> */}
          <UserDetails />
        </MainContent>
      </div>
    </div>
  );
}

export default Layout;
