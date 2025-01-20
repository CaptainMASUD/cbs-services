import React from "react"
import { motion } from "framer-motion"
import { FaUser, FaEnvelope, FaPhone, FaDollarSign } from "react-icons/fa"

const clients = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "(123) 456-7890", loanAmount: 50000 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "(234) 567-8901", loanAmount: 75000 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "(345) 678-9012", loanAmount: 100000 },
  { id: 4, name: "Alice Brown", email: "alice@example.com", phone: "(456) 789-0123", loanAmount: 60000 },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", phone: "(567) 890-1234", loanAmount: 80000 },
]

function Clients() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <motion.div
            key={client.id}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <FaUser className="text-3xl text-blue-500 mr-4" />
              <h3 className="text-xl font-semibold">{client.name}</h3>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <p>{client.email}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-gray-500 mr-2" />
              <p>{client.phone}</p>
            </div>
            <div className="flex items-center">
              <FaDollarSign className="text-gray-500 mr-2" />
              <p>${client.loanAmount.toLocaleString()}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Clients

