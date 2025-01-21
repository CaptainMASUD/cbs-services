import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaUser, FaEnvelope, FaPhone, FaDollarSign, FaSearch, FaSort } from "react-icons/fa"

const initialClients = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "(123) 456-7890", loanAmount: 50000 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "(234) 567-8901", loanAmount: 75000 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "(345) 678-9012", loanAmount: 100000 },
  { id: 4, name: "Alice Brown", email: "alice@example.com", phone: "(456) 789-0123", loanAmount: 60000 },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", phone: "(567) 890-1234", loanAmount: 80000 },
]

function Clients() {
  const [clients, setClients] = useState(initialClients)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(key)
      setSortOrder("asc")
    }
  }

  const filteredAndSortedClients = clients
    .filter(
      (client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1
      return 0
    })

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Clients</h2>
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center">
            <FaSort className="mr-2 text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name</option>
              <option value="loanAmount">Loan Amount</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredAndSortedClients.map((client) => (
              <motion.div
                key={client.id}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
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
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Clients

