import React from "react"
import { motion } from "framer-motion"
import { FaChartPie, FaWpforms, FaUsers, FaChartLine, FaUserTie, FaHistory } from "react-icons/fa"

const menuItems = [
  { id: "dashboard", icon: FaChartPie, label: "Dashboard" },
  { id: "allForms", icon: FaWpforms, label: "All Forms" },
  { id: "employeeForms", icon: FaWpforms, label: "Employee Forms" },
  { id: "clients", icon: FaUsers, label: "Clients" },
  { id: "loanStatistics", icon: FaChartLine, label: "Loan Statistics" },
  { id: "employeeAnalysis", icon: FaUserTie, label: "Employee Analysis" },
  { id: "loanHistory", icon: FaHistory, label: "Loan History" },
]

function Sidebar({ setActiveComponent, closeSidebar }) {
  const handleItemClick = (id) => {
    setActiveComponent(id)
    closeSidebar()
  }

  return (
    <motion.aside
      className="w-64 bg-gray-800 text-white p-6 h-full"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => handleItemClick(item.id)}
                className="flex items-center w-full py-2 px-4 mb-2 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                <item.icon className="mr-3" />
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  )
}

export default Sidebar

