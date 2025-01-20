import React, { useState } from "react"
import { motion } from "framer-motion"
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
import { FaExclamationTriangle } from "react-icons/fa"

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
                <button onClick={() => setSelectedEmployee(employee)} className="text-blue-500 hover:underline">
                  {employee.name}
                </button>
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
        {selectedEmployee && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4">{selectedEmployee.name}'s Annual Performance</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={selectedEmployee.yearlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="loans" stroke="#8884d8" name="Number of Loans" />
                <Line yAxisId="right" type="monotone" dataKey="amount" stroke="#82ca9d" name="Loan Amount ($)" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default EmployeeAnalysis

