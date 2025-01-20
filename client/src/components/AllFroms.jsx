import React from "react"
import { motion } from "framer-motion"
import { FaEdit, FaTrash } from "react-icons/fa"

const forms = [
  { id: 1, name: "Loan Application", submittedBy: "John Doe", date: "2023-06-01" },
  { id: 2, name: "Credit Check", submittedBy: "Jane Smith", date: "2023-06-02" },
  { id: 3, name: "Income Verification", submittedBy: "Bob Johnson", date: "2023-06-03" },
  { id: 4, name: "Property Appraisal", submittedBy: "Alice Brown", date: "2023-06-04" },
  { id: 5, name: "Employment Verification", submittedBy: "Charlie Davis", date: "2023-06-05" },
]

function AllForms() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">All Forms</h2>
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
              <th className="py-3 px-4 text-left">Form Name</th>
              <th className="py-3 px-4 text-left">Submitted By</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <motion.tr
                key={form.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">{form.id}</td>
                <td className="py-3 px-4">{form.name}</td>
                <td className="py-3 px-4">{form.submittedBy}</td>
                <td className="py-3 px-4">{form.date}</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

export default AllForms

