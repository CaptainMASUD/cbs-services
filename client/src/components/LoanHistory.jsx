import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheckCircle, FaTimesCircle, FaEnvelope, FaSpinner } from "react-icons/fa"

const loanHistory = [
  { id: 1, client: "John Doe", amount: 50000, status: "Paid", date: "2023-05-15", employee: "Alice Smith" },
  { id: 2, client: "Jane Smith", amount: 75000, status: "Overdue", date: "2023-04-20", employee: "Bob Johnson" },
  { id: 3, client: "Bob Johnson", amount: 100000, status: "Paid", date: "2023-03-10", employee: "Charlie Brown" },
  { id: 4, client: "Alice Brown", amount: 60000, status: "Paid", date: "2023-02-05", employee: "David Lee" },
  { id: 5, client: "Charlie Davis", amount: 80000, status: "Overdue", date: "2023-01-15", employee: "Eva Wilson" },
]

function LoanHistory() {
  const [contactModal, setContactModal] = useState(null)
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleContact = (loan) => {
    setContactModal(loan)
    setMessage("")
  }

  const sendMessage = () => {
    setIsLoading(true)
    setTimeout(() => {
      console.log(`Sending message to ${contactModal.employee}: ${message}`)
      setContactModal(null)
      setMessage("")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Loan History</h2>
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {loanHistory.map((loan) => (
                  <motion.tr
                    key={loan.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6 text-sm text-gray-900">{loan.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{loan.client}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">${loan.amount.toLocaleString()}</td>
                    <td className="py-4 px-6 text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          loan.status === "Paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {loan.status === "Paid" ? (
                          <FaCheckCircle className="mr-1" />
                        ) : (
                          <FaTimesCircle className="mr-1" />
                        )}
                        {loan.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">{loan.date}</td>
                    <td className="py-4 px-6 text-sm">
                      {loan.status === "Overdue" && (
                        <button
                          onClick={() => handleContact(loan)}
                          className="text-blue-600 hover:text-blue-900 transition duration-150 ease-in-out"
                          title="Contact Employee"
                        >
                          <FaEnvelope />
                        </button>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
      <AnimatePresence>
        {contactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-6 rounded-lg max-w-md w-full"
            >
              <h3 className="text-lg font-semibold mb-4">Contact Employee</h3>
              <p className="mb-4">
                Send a message to {contactModal.employee} about the overdue loan for {contactModal.client}.
              </p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message here"
              ></textarea>
              <div className="flex justify-end">
                <button
                  onClick={() => setContactModal(null)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400 transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <FaSpinner className="text-white text-4xl animate-spin" />
        </div>
      )}
    </div>
  )
}

export default LoanHistory

