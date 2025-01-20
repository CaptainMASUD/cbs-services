import React from "react"
import { motion } from "framer-motion"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const employeeForms = [
  { id: 1, name: "John Doe", formType: "Loan Application", status: "Approved", date: "2023-06-01" },
  { id: 2, name: "Jane Smith", formType: "Credit Check", status: "Pending", date: "2023-06-02" },
  { id: 3, name: "Bob Johnson", formType: "Income Verification", status: "Rejected", date: "2023-06-03" },
  { id: 4, name: "Alice Brown", formType: "Property Appraisal", status: "Approved", date: "2023-06-04" },
  { id: 5, name: "Charlie Davis", formType: "Employment Verification", status: "Pending", date: "2023-06-05" },
]

function EmployeeForms() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Employee Forms</h2>
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
              <th className="py-3 px-4 text-left">Employee Name</th>
              <th className="py-3 px-4 text-left">Form Type</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {employeeForms.map((form) => (
              <motion.tr
                key={form.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">{form.id}</td>
                <td className="py-3 px-4">{form.name}</td>
                <td className="py-3 px-4">{form.formType}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center ${
                      form.status === "Approved"
                        ? "text-green-500"
                        : form.status === "Rejected"
                          ? "text-red-500"
                          : "text-yellow-500"
                    }`}
                  >
                    {form.status === "Approved" ? (
                      <FaCheckCircle className="mr-1" />
                    ) : form.status === "Rejected" ? (
                      <FaTimesCircle className="mr-1" />
                    ) : null}
                    {form.status}
                  </span>
                </td>
                <td className="py-3 px-4">{form.date}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

export default EmployeeForms

