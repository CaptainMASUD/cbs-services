import React from "react"
import { FaCheckCircle, FaEdit } from "react-icons/fa"

function ConfirmationStep({ formData, onConfirm, onEdit }) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Confirm Your Application</h2>
      <p className="mb-4">Please review your information before final submission:</p>

      <div className="mb-4">
        <h3 className="font-bold text-green-600">Personal Information</h3>
        <p>Name: {formData.clientName}</p>
        <p>File Number: {formData.fileNumber}</p>
        {/* Add more fields as necessary */}
      </div>

      <div className="mb-4">
        <h3 className="font-bold text-green-600">Loan Details</h3>
        <p>Bank Type: {formData.bankType}</p>
        <p>Loan Type: {formData.loanType}</p>
        {/* Add more fields as necessary */}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onEdit}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
        >
          <FaEdit className="mr-2" /> Edit Application
        </button>
        <button
          onClick={onConfirm}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
        >
          <FaCheckCircle className="mr-2" /> Confirm and Submit
        </button>
      </div>
    </div>
  )
}

export default ConfirmationStep

