import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaFileAlt, FaChartBar, FaCog } from "react-icons/fa"; // Icons
import Dashboard from "./Dashboard";
import Applications from "./Applications";
import Reports from "./Reports";
import Settings from "./Settings";
import { BsFillArrowRightCircleFill } from "react-icons/bs"; // Updated icon

function EmployeePanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "applications":
        return <Applications />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(false); // Close the sidebar when a tab is clicked
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-gray-800 text-white p-2 rounded-md mt-14"
        >
          <BsFillArrowRightCircleFill size={24} />
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)} // Close sidebar when overlay is clicked
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50 md:z-0`}
      >
        <aside className="w-64 h-full bg-green-700 text-white p-6">
          <h2 className="text-2xl font-bold mb-6">Employee Panel</h2>
          <nav>
            <NavItem
              icon={<FaUser />}
              label="Dashboard"
              onClick={() => handleTabClick("dashboard")}
              active={activeTab === "dashboard"}
            />
            <NavItem
              icon={<FaFileAlt />}
              label="Applications"
              onClick={() => handleTabClick("applications")}
              active={activeTab === "applications"}
            />
            <NavItem
              icon={<FaChartBar />}
              label="Reports"
              onClick={() => handleTabClick("reports")}
              active={activeTab === "reports"}
            />
            <NavItem
              icon={<FaCog />}
              label="Settings"
              onClick={() => handleTabClick("settings")}
              active={activeTab === "settings"}
            />
          </nav>
        </aside>
      </div>

      {/* Main Content */}
      <motion.main
        className="flex-1 p-6 overflow-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.main>
    </div>
  );
}

function NavItem({ icon, label, onClick, active }) {
  return (
    <button
      className={`flex items-center w-full py-2 px-4 mb-2 rounded transition-colors ${
        active ? "bg-green-600" : "hover:bg-green-600"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
}

export default EmployeePanel;
