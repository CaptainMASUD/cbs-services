import React from "react"
import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Personal Loans", value: 400, percentage: 33.33 },
  { name: "Business Loans", value: 300, percentage: 25 },
  { name: "Mortgages", value: 300, percentage: 25 },
  { name: "Auto Loans", value: 200, percentage: 16.67 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const totalLoans = data.reduce((sum, item) => sum + item.value, 0)
const totalAmount = 15000000 // Example total loan amount

function LoanStatistics() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Loan Statistics</h2>
      <motion.div
        className="bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4">Loan Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Loan Summary</h4>
            <ul className="space-y-2">
              <li>Total Loans: {totalLoans}</li>
              <li>Total Amount: ${totalAmount.toLocaleString()}</li>
              {data.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}:</span>
                  <span>
                    {item.value} ({item.percentage.toFixed(2)}%)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LoanStatistics

