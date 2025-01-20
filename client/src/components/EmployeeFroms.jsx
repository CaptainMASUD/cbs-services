import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaCheckCircle, FaTimesCircle, FaEdit, FaTrash } from "react-icons/fa"

const initialEmployeeForms = [
  { id: 1, name: "John Doe", formType: "Loan Application", status: "Approved", date: "2023-06-01" },
  { id: 2, name: "Jane Smith", formType: "Credit Check", status: "Pending", date: "2023-06-02" },
  { id: 3, name: "Bob Johnson", formType: "Income Verification", status: "Rejected", date: "2023-06-03" },
  { id: 4, name: "Alice Brown", formType: "Property Appraisal", status: "Approved", date: "2023-06-04" },
  { id: 5, name: "Charlie Davis", formType: "Employment Verification", status: "Pending", date: "2023-06-05" },
]

function EmployeeForms() {
  const [employeeForms, setEmployeeForms] = useState(initialEmployeeForms)
  const [editingForm, setEditingForm] = useState(null)
  const [deleteConfirmation, setDeleteConfirmation] = useState(null)
  const [declineReason, setDeclineReason] = useState("")

  const handleStatusChange = (id, newStatus) => {
    setEmployeeForms((forms) => forms.map((form) => (form.id === id ? { ...form, status: newStatus } : form)))
    setEditingForm(null)
  }

  const handleDelete = (id) => {
    setDeleteConfirmation(id)
  }

  const confirmDelete = () => {
    setEmployeeForms((forms) => forms.filter((form) => form.id !== deleteConfirmation))
    setDeleteConfirmation(null)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Employee Forms</h2>
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
                <th className="py-3 px-4 text-left">Employee Name</th>
                <th className="py-3 px-4 text-left">Form Type</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
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
                    {editingForm === form.id ? (
                      <select
                        value={form.status}
                        onChange={(e) => handleStatusChange(form.id, e.target.value)}
                        className="border rounded p-1"
                      >
                        <option value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    ) : (
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
                    )}
                  </td>
                  <td className="py-3 px-4">{form.date}</td>
                  <td className="py-3 px-4">
                    <button onClick={() => setEditingForm(form.id)} className="text-blue-500 hover:text-blue-700 mr-2">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(form.id)} className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this form? This action requires admin permission.</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setDeleteConfirmation(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {editingForm && employeeForms.find((form) => form.id === editingForm)?.status === "Rejected" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Reason for Rejection</h3>
            <textarea
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              className="w-full h-32 border rounded p-2"
              placeholder="Enter reason for rejection"
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  setEditingForm(null)
                  setDeclineReason("")
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmployeeForms

