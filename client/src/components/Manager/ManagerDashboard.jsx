// ManagerDashboard Component
import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./ManagerSidebar";
import Dashboard from "../Dashboard";
import AllForms from "../AllFroms";
import EmployeeForms from "../EmployeeFroms";
import Clients from "../Clients";
import LoanStatistics from "../LoanStatistics";
import EmployeeAnalysis from "../EmployeeAnalysis";
import LoanHistory from "../LoanHistory";
import { FaBars } from "react-icons/fa"; // React Icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function ManagerDashboard() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isManager, setIsManager] = useState(true);

  const handleLogout = () => {
    setIsManager(false);
    setActiveComponent("dashboard");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;
      case "allForms":
        return <AllForms />;
      case "employeeForms":
        return <EmployeeForms />;
      case "clients":
        return <Clients />;
      case "loanStatistics":
        return <LoanStatistics />;
      case "employeeAnalysis":
        return <EmployeeAnalysis />;
      case "loanHistory":
        return <LoanHistory />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-gray-800 text-white p-2 rounded-md mt-14"
        >
          <BsFillArrowRightCircleFill size={24} />
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50 md:z-0`}
      >
        <Sidebar
          setActiveComponent={setActiveComponent}
          closeSidebar={() => setIsSidebarOpen(false)}
          isManager={isManager}
          logout={handleLogout}
        />
      </div>
      <motion.main
        className="flex-1 p-6 overflow-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderComponent()}
      </motion.main>
    </div>
  );
}

export default ManagerDashboard;
