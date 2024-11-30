import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
import userIcon from "../../image/User-icon.png";
import homeIcon from "../../image/Home.png";
import timerIcon from "../../image/timer.png";
import settingIcon from "../../image/setting.png";
import { IoClose, IoMenu } from "react-icons/io5";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
    console.log("toggleSidebar");
  };

  const menuItems = [
    { name: "Home", icon: homeIcon, path: "/" },
    { name: "Timer", icon: timerIcon, path: "/timer" },
    { name: "Setting", icon: settingIcon, path: "/setting" },
    { name: "User", icon: userIcon, path: "/user" },
  ];

  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path); // Navigate first
    setTimeout(() => {
      setIsSidebarOpen(false); // Then close the sidebar
      document.body.style.overflow = "auto";
    }, 200); // Add a slight delay
  };

  return (
    <div className="relative block mt-4">
      {/* Mobile Hamburger Icon */}
      <button
        className="text-white-800 fixed p-2 top-4 left-4 z-50 lg:hidden lg:left-0"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-35 bg-[#161717] transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col items-center p-1 md:p-0">
          {/* Logo */}
          <div className="mb-8">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-16 h-16" />
            </Link>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col z-[99] relative">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(index, item.path)}
                className={`flex items-center lg:px-4 lg:py-3 mb-3 text-gray-800 rounded-md cursor-pointer ${
                  activeIndex === index
                    ? "bg-[#0C3C61] border-[1px] border-[#636AE8]"
                    : "bg-transparent"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 mr-3 md:m-auto"
                />
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile view */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
