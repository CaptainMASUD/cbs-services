import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWpforms, FaUsers, FaDollarSign, FaChartLine, FaSearch } from "react-icons/fa";
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
} from "recharts";

const barData = [
  { name: "Jan", loans: 4000, amount: 2400 },
  { name: "Feb", loans: 3000, amount: 1398 },
  { name: "Mar", loans: 2000, amount: 9800 },
  { name: "Apr", loans: 2780, amount: 3908 },
  { name: "May", loans: 1890, amount: 4800 },
  { name: "Jun", loans: 2390, amount: 3800 },
];

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
};

function Dashboard() {
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { icon: FaWpforms, title: "Total Forms", value: "1,234", color: "blue" },
            { icon: FaUsers, title: "Total Clients", value: "567", color: "green" },
            { icon: FaDollarSign, title: "Total Loan Amount", value: "$10.2M", color: "yellow" },
            { icon: FaChartLine, title: "Growth Rate", value: "15%", color: "purple" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-2">
                <item.icon className={`text-2xl text-${item.color}-500 mr-2`} />
                <h3 className="text-sm font-semibold text-gray-700">{item.title}</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Loan Statistics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip contentStyle={{ backgroundColor: "#f7fafc", border: "none", borderRadius: "8px" }} />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
                <Bar yAxisId="left" dataKey="loans" fill="#8884d8" name="Number of Loans" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="amount" fill="#82ca9d" name="Loan Amount ($)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Company Growth</h3>
              <select
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                className="border rounded-md p-2 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData[timeFrame]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip contentStyle={{ backgroundColor: "#f7fafc", border: "none", borderRadius: "8px" }} />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="clients"
                  stroke="#8884d8"
                  name="Number of Clients"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="amount"
                  stroke="#82ca9d"
                  name="Total Loan Amount ($)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
        <motion.div
          className="bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Search</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search clients, loans, or forms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
