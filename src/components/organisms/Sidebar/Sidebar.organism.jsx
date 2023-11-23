"use client";

import React, { useEffect, useState } from "react";
import { SidebarBottomNavigation, SidebarNavigation } from "../../molecules";
import { SidebarLogo, SidebarToggle } from "../../atoms";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='h-screen'>
      <aside
        className={`absolute left-0 top-0 z-50 flex h-screen w-[280px] shadow-md
                flex-col overflow-y-hidden bg-white duration-300 ease-linear 
                lg:static lg:translate-x-0
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className='flex items-center justify-center'>
          <SidebarLogo />
          <SidebarToggle onClick={toggleSidebar} />
        </div>
        <SidebarNavigation currentPath={currentPath} />
        <SidebarBottomNavigation currentPath={currentPath} />
      </aside>
    </div>
  );
};

export default Sidebar;
