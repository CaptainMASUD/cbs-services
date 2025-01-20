import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaCheckCircle, FaTimesCircle, FaEnvelope } from "react-icons/fa"

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

  const handleContact = (loan) => {
    setContactModal(loan)
    setMessage("")
  }

  const sendMessage = () => {
    // Here you would typically send the message to the employee
    console.log(`Sending message to ${contactModal.employee}: ${message}`)
    setContactModal(null)
    setMessage("")
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Loan History</h2>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Client</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
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
                  <td className="py-3 px-4">
                    {loan.status === "Overdue" && (
                      <button
                        onClick={() => handleContact(loan)}
                        className="text-blue-500 hover:text-blue-700"
                        title="Contact Employee"
                      >
                        <FaEnvelope />
                      </button>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      {contactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Contact Employee</h3>
            <p>
              Send a message to {contactModal.employee} about the overdue loan for {contactModal.client}.
            </p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 border rounded p-2 mt-4"
              placeholder="Enter your message here"
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setContactModal(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoanHistory

