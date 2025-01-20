import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaWpforms, FaUsers, FaDollarSign } from "react-icons/fa"
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

const barData = [
  { name: "Jan", loans: 4000, amount: 2400 },
  { name: "Feb", loans: 3000, amount: 1398 },
  { name: "Mar", loans: 2000, amount: 9800 },
  { name: "Apr", loans: 2780, amount: 3908 },
  { name: "May", loans: 1890, amount: 4800 },
  { name: "Jun", loans: 2390, amount: 3800 },
]

const lineData = {
  monthly: [
    { name: "Jan", clients: 100, loans: 4000, amount: 2400000 },
    { name: "Feb", clients: 120, loans: 3000, amount: 1398000 },
    { name: "Mar", clients: 130, loans: 2000, amount: 9800000 },
    { name: "Apr", clients: 140, loans: 2780, amount: 3908000 },
    { name: "May", clients: 150, loans: 1890, amount: 4800000 },
    { name: "Jun", clients: 160, loans: 2390, amount: 3800000 },
  ],
  yearly: [
    { name: "2018", clients: 1000, loans: 40000, amount: 24000000 },
    { name: "2019", clients: 1200, loans: 30000, amount: 13980000 },
    { name: "2020", clients: 1300, loans: 20000, amount: 98000000 },
    { name: "2021", clients: 1400, loans: 27800, amount: 39080000 },
    { name: "2022", clients: 1500, loans: 18900, amount: 48000000 },
    { name: "2023", clients: 1600, loans: 23900, amount: 38000000 },
  ],
}

function Dashboard() {
  const [timeFrame, setTimeFrame] = useState("monthly")

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaWpforms className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Total Forms</h3>
          <p className="text-3xl font-bold">1,234</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaUsers className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Total Clients</h3>
          <p className="text-3xl font-bold">567</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaDollarSign className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Total Loan Amount</h3>
          <p className="text-3xl font-bold">$10,234,567</p>
        </motion.div>
      </div>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-4">Loan Statistics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
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
      </motion.div>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Company Growth</h3>
          <select value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)} className="border rounded p-2">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData[timeFrame]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="clients" stroke="#8884d8" name="Number of Clients" />
            <Line yAxisId="right" type="monotone" dataKey="amount" stroke="#82ca9d" name="Total Loan Amount ($)" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}

export default Dashboard

