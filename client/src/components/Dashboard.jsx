import React from "react"
import { motion } from "framer-motion"
import { FaWpforms, FaUsers, FaDollarSign } from "react-icons/fa"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", loans: 4000, amount: 2400 },
  { name: "Feb", loans: 3000, amount: 1398 },
  { name: "Mar", loans: 2000, amount: 9800 },
  { name: "Apr", loans: 2780, amount: 3908 },
  { name: "May", loans: 1890, amount: 4800 },
  { name: "Jun", loans: 2390, amount: 3800 },
]

function Dashboard() {
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
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-4">Loan Statistics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
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
    </div>
  )
}

export default Dashboard

