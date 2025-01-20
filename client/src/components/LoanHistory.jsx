import React from "react"
import { motion } from "framer-motion"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const loanHistory = [
  { id: 1, client: "John Doe", amount: 50000, status: "Paid", date: "2023-05-15" },
  { id: 2, client: "Jane Smith", amount: 75000, status: "Overdue", date: "2023-04-20" },
  { id: 3, client: "Bob Johnson", amount: 100000, status: "Paid", date: "2023-03-10" },
  { id: 4, client: "Alice Brown", amount: 60000, status: "Paid", date: "2023-02-05" },
  { id: 5, client: "Charlie Davis", amount: 80000, status: "Overdue", date: "2023-01-15" },
]

function LoanHistory() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Loan History</h2>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Client</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {loanHistory.map((loan) => (
              <motion.tr
                key={loan.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">{loan.id}</td>
                <td className="py-3 px-4">{loan.client}</td>
                <td className="py-3 px-4">${loan.amount.toLocaleString()}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center ${loan.status === "Paid" ? "text-green-500" : "text-red-500"}`}
                  >
                    {loan.status === "Paid" ? <FaCheckCircle className="mr-1" /> : <FaTimesCircle className="mr-1" />}
                    {loan.status}
                  </span>
                </td>
                <td className="py-3 px-4">{loan.date}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

export default LoanHistory

