import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { FaExclamationTriangle, FaChevronDown, FaSearch } from "react-icons/fa"

const employeeData = [
  {
    name: "John",
    weekly: { loans: 3, amount: 37500 },
    monthly: { loans: 12, amount: 150000 },
    annual: { loans: 144, amount: 1800000 },
    performance: "good",
    yearlyPerformance: [
      { year: 2018, loans: 120, amount: 1500000 },
      { year: 2019, loans: 130, amount: 1625000 },
      { year: 2020, loans: 140, amount: 1750000 },
      { year: 2021, loans: 144, amount: 1800000 },
    ],
  },
  {
    name: "Jane",
    weekly: { loans: 5, amount: 62500 },
    monthly: { loans: 20, amount: 250000 },
    annual: { loans: 240, amount: 3000000 },
    performance: "excellent",
    yearlyPerformance: [
      { year: 2018, loans: 200, amount: 2500000 },
      { year: 2019, loans: 220, amount: 2750000 },
      { year: 2020, loans: 230, amount: 2875000 },
      { year: 2021, loans: 240, amount: 3000000 },
    ],
  },
  {
    name: "Bob",
    weekly: { loans: 1, amount: 12500 },
    monthly: { loans: 4, amount: 50000 },
    annual: { loans: 48, amount: 600000 },
    performance: "poor",
    yearlyPerformance: [
      { year: 2018, loans: 60, amount: 750000 },
      { year: 2019, loans: 55, amount: 687500 },
      { year: 2020, loans: 50, amount: 625000 },
      { year: 2021, loans: 48, amount: 600000 },
    ],
  },
  {
    name: "Alice",
    weekly: { loans: 4, amount: 50000 },
    monthly: { loans: 16, amount: 200000 },
    annual: { loans: 192, amount: 2400000 },
    performance: "good",
    yearlyPerformance: [
      { year: 2018, loans: 180, amount: 2250000 },
      { year: 2019, loans: 185, amount: 2312500 },
      { year: 2020, loans: 190, amount: 2375000 },
      { year: 2021, loans: 192, amount: 2400000 },
    ],
  },
  {
    name: "Charlie",
    weekly: { loans: 2, amount: 25000 },
    monthly: { loans: 8, amount: 100000 },
    annual: { loans: 96, amount: 1200000 },
    performance: "average",
    yearlyPerformance: [
      { year: 2018, loans: 90, amount: 1125000 },
      { year: 2019, loans: 92, amount: 1150000 },
      { year: 2020, loans: 94, amount: 1175000 },
      { year: 2021, loans: 96, amount: 1200000 },
    ],
  },
]

function EmployeeAnalysis() {
  const [timeFrame, setTimeFrame] = useState("monthly")
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const chartData = employeeData
    .filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((employee) => ({
      name: employee.name,
      loans: employee[timeFrame].loans,
      amount: employee[timeFrame].amount,
      performance: employee.performance,
    }))

  const performanceColors = {
    poor: "bg-red-100 text-red-800",
    average: "bg-yellow-100 text-yellow-800",
    good: "bg-green-100 text-green-800",
    excellent: "bg-blue-100 text-blue-800",
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <motion.h2
        className="text-4xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Employee Analysis
      </motion.h2>
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 md:mb-0">Employee Performance</h3>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="fill-current h-4 w-4" />
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pl-10 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" stroke="#718096" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="loans" fill="#8884d8" name="Number of Loans" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="amount" fill="#82ca9d" name="Loan Amount ($)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h4 className="text-xl font-semibold mb-4 text-gray-700">Employee Performance Summary</h4>
        <ul className="space-y-3">
          <AnimatePresence>
            {chartData.map((employee, index) => (
              <motion.li
                key={employee.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <button
                  onClick={() => setSelectedEmployee(employeeData.find((e) => e.name === employee.name))}
                  className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none"
                >
                  {employee.name}
                </button>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    performanceColors[employee.performance]
                  }`}
                >
                  {employee.performance}
                  {employee.performance === "poor" && (
                    <FaExclamationTriangle className="inline-block ml-2" title="Requires attention" />
                  )}
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>
      <AnimatePresence>
        {selectedEmployee && (
          <motion.div
            key={selectedEmployee.name}
            className="mt-8 bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-gray-700">{selectedEmployee.name}'s Annual Performance</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={selectedEmployee.yearlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#718096" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="loans"
                  stroke="#8884d8"
                  name="Number of Loans"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="amount"
                  stroke="#82ca9d"
                  name="Loan Amount ($)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EmployeeAnalysis
