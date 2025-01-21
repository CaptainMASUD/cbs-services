import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheckCircle, FaTimesCircle, FaPencilAlt, FaTrashAlt, FaSpinner, FaPlus } from "react-icons/fa"

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
  const [isLoading, setIsLoading] = useState(false)
  const [todoItem, setTodoItem] = useState("")

  const handleStatusChange = (id, newStatus) => {
    setIsLoading(true)
    setTimeout(() => {
      setEmployeeForms((forms) => forms.map((form) => (form.id === id ? { ...form, status: newStatus } : form)))
      setEditingForm(null)
      setIsLoading(false)
    }, 1000)
  }

  const handleDelete = (id) => {
    setDeleteConfirmation(id)
  }

  const confirmDelete = () => {
    setIsLoading(true)
    setTimeout(() => {
      setEmployeeForms((forms) => forms.filter((form) => form.id !== deleteConfirmation))
      setDeleteConfirmation(null)
      setIsLoading(false)
    }, 1000)
  }

  const handleReasonSubmit = () => {
    if (declineReason.trim() !== "") {
      handleStatusChange(editingForm, "Rejected")
      setDeclineReason("")
      setEditingForm(null)
    }
  }

  const handleAddTodo = () => {
    if (todoItem.trim() !== "") {
      // Here you would typically add the todo item to a list or perform some action
      console.log("Added todo:", todoItem)
      setTodoItem("")
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Employee Forms</h2>
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee Name
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Form Type
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {employeeForms.map((form) => (
                    <motion.tr
                      key={form.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 text-sm text-gray-900">{form.id}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{form.name}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{form.formType}</td>
                      <td className="py-4 px-4 text-sm">
                        {editingForm === form.id ? (
                          <select
                            value={form.status}
                            onChange={(e) => {
                              if (e.target.value === "Rejected") {
                                setEditingForm(form.id)
                              } else {
                                handleStatusChange(form.id, e.target.value)
                              }
                            }}
                            className="border rounded p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="Approved">Approved</option>
                            <option value="Pending">Pending</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        ) : (
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              form.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : form.status === "Rejected"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
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
                      <td className="py-4 px-4 text-sm text-gray-900">{form.date}</td>
                      <td className="py-4 px-4 text-sm">
                        <button
                          onClick={() => setEditingForm(form.id)}
                          className="text-blue-600 hover:text-blue-900 mr-2 transition duration-150 ease-in-out"
                        >
                          <FaPencilAlt />
                        </button>
                        <button
                          onClick={() => handleDelete(form.id)}
                          className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
        <AnimatePresence>
          {deleteConfirmation && (
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
                <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
                <p className="mb-4">
                  Are you sure you want to delete this form? This action requires admin permission.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setDeleteConfirmation(null)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-150 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {editingForm && employeeForms.find((form) => form.id === editingForm)?.status === "Rejected" && (
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
                <h3 className="text-lg font-semibold mb-4">Reason for Rejection</h3>
                <textarea
                  value={declineReason}
                  onChange={(e) => setDeclineReason(e.target.value)}
                  className="w-full h-32 border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter reason for rejection"
                ></textarea>
                <div className="mb-4">
                  <h4 className="text-md font-semibold mb-2">Add Todo Item</h4>
                  <div className="flex">
                    <input
                      type="text"
                      value={todoItem}
                      onChange={(e) => setTodoItem(e.target.value)}
                      className="flex-grow border rounded-l p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter todo item"
                    />
                    <button
                      onClick={handleAddTodo}
                      className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition duration-150 ease-in-out"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setEditingForm(null)
                      setDeclineReason("")
                    }}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleReasonSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    Submit
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
    </div>
  )
}

export default EmployeeForms

