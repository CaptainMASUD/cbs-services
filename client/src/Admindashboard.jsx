import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AllForms from "./components/AllFroms";
import EmployeeForms from "./components/EmployeeFroms";
import Clients from "./components/Clients";
import LoanStatistics from "./components/LoanStatistics";
import EmployeeAnalysis from "./components/EmployeeAnalysis";
import LoanHistory from "./components/LoanHistory";
import CreateAdmin from "./components/CreateAdmin";
import AdministrationForManagers from "./components/AdministrationForManagers";
import { FaBars, FaUser, FaLock } from "react-icons/fa"; // React Icons

function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAdminLogin = (username, password) => {
    if (username === "admin" && password === "123") {
      setIsAdmin(true);
      setShowModal(false);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
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
      case "createAdmin":
        return <CreateAdmin />;
      case "administrationForManagers":
        return <AdministrationForManagers />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-gray-800 text-white p-2 rounded-md"
        >
          <FaBars />
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
          isAdmin={isAdmin}
          switchToAdmin={() => setShowModal(true)}
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

      {/* Admin Login Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg w-96">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              Admin Login <FaUser className="ml-2" />
            </h2>
            <div className="mb-4">
              <label htmlFor="username" className="text-white text-lg">
                Username
              </label>
              <div className="flex items-center border-b border-white mt-2">
                <FaUser className="text-white mr-3" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  className="w-full py-2 px-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-white text-lg">
                Password
              </label>
              <div className="flex items-center border-b border-white mt-2">
                <FaLock className="text-white mr-3" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="w-full py-2 px-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="text-white px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-500"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="text-white px-4 py-2 bg-purple-500 rounded-md hover:bg-purple-600"
                onClick={() =>
                  handleAdminLogin(
                    document.getElementById("username").value,
                    document.getElementById("password").value
                  )
                }
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
