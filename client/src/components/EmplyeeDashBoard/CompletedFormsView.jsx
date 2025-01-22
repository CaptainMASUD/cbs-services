import React, { useState } from "react"
import { FaEnvelope, FaCheck, FaTimes } from "react-icons/fa"

function CompletedFormsView() {
  const [completedForms, setCompletedForms] = useState([
    { id: 1, clientName: "John Doe", status: "accepted", date: "2023-05-15" },
    { id: 2, clientName: "Jane Smith", status: "rejected", date: "2023-05-14" },
    { id: 3, clientName: "Bob Johnson", status: "pending", date: "2023-05-13" },
  ])

  const handleSendEmail = (id) => {
    // Implement email sending logic here
    console.log(`Sending email for form ${id}`)
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Completed Forms</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Client Name</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {completedForms.map((form) => (
            <tr key={form.id}>
              <td className="border px-4 py-2">{form.clientName}</td>
              <td className="border px-4 py-2">
                {form.status === "accepted" && <FaCheck className="text-green-500" />}
                {form.status === "rejected" && <FaTimes className="text-red-500" />}
                {form.status === "pending" && <span className="text-yellow-500">Pending</span>}
              </td>
              <td className="border px-4 py-2">{form.date}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleSendEmail(form.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline flex items-center"
                >
                  <FaEnvelope className="mr-1" /> Send Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CompletedFormsView

