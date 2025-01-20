import React, { useState } from "react"
import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { FaExclamationTriangle } from "react-icons/fa"

const employeeData = [
  {
    name: "John",
    weekly: { loans: 3, amount: 37500 },
    monthly: { loans: 12, amount: 150000 },
    annual: { loans: 144, amount: 1800000 },
    performance: "good",
  },
  {
    name: "Jane",
    weekly: { loans: 5, amount: 62500 },
    monthly: { loans: 20, amount: 250000 },
    annual: { loans: 240, amount: 3000000 },
    performance: "excellent",
  },
  {
    name: "Bob",
    weekly: { loans: 1, amount: 12500 },
    monthly: { loans: 4, amount: 50000 },
    annual: { loans: 48, amount: 600000 },
    performance: "poor",
  },
  {
    name: "Alice",
    weekly: { loans: 4, amount: 50000 },
    monthly: { loans: 16, amount: 200000 },
    annual: { loans: 192, amount: 2400000 },
    performance: "good",
  },
  {
    name: "Charlie",
    weekly: { loans: 2, amount: 25000 },
    monthly: { loans: 8, amount: 100000 },
    annual: { loans: 96, amount: 1200000 },
    performance: "average",
  },
]

function EmployeeAnalysis() {
  const [timeFrame, setTimeFrame] = useState("monthly")

  const chartData = employeeData.map((employee) => ({
    name: employee.name,
    loans: employee[timeFrame].loans,
    amount: employee[timeFrame].amount,
    performance: employee.performance,
  }))

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Employee Analysis</h2>
      <motion.div
        className="bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Employee Performance</h3>
          <select value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)} className="border rounded p-2">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="loans" fill="#8884d8" name="Number of Loans" />
            <Bar yAxisId="right" dataKey="amount" fill="#82ca9d" name="Loan Amount ($)" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Employee Performance Summary</h4>
          <ul className="space-y-2">
            {employeeData.map((employee, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{employee.name}</span>
                <span
                  className={`flex items-center ${
                    employee.performance === "poor"
                      ? "text-red-500"
                      : employee.performance === "excellent"
                        ? "text-green-500"
                        : "text-yellow-500"
                  }`}
                >
                  {employee.performance}
                  {employee.performance === "poor" && (
                    <FaExclamationTriangle className="ml-2" title="Requires attention" />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default EmployeeAnalysis

