import React, { useState } from "react"
import { FaCarAlt, FaHome } from "react-icons/fa"
import SignatureField from "./SignatureField"

function Page1({ onNext, updateFormData, formData }) {
  const [otherBank, setOtherBank] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext()
  }

  const handleInputChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  const handleBankTypeChange = (e) => {
    const selectedBank = e.target.value
    updateFormData({ bankType: selectedBank })
    setOtherBank(selectedBank === "Other")
  }

  const handleSignatureSave = (field, data) => {
    updateFormData({ [field]: data })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Loan Application Form - Page 1</h1>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="bankType">
          Bank Type:
        </label>
        <select
          name="bankType"
          id="bankType"
          value={formData.bankType || ""}
          onChange={handleBankTypeChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          required
        >
          <option value="" disabled>Select Bank Type</option>
          <option value="One Bank">One Bank</option>
          <option value="Bank of America">Bank of America</option>
          <option value="Chase">Chase</option>
          <option value="Wells Fargo">Wells Fargo</option>
          <option value="Citibank">Citibank</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {otherBank && (
        <div>
          <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="otherBank">
            Please Specify Bank Name:
          </label>
          <input
            type="text"
            name="otherBank"
            id="otherBank"
            value={formData.otherBank || ""}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
            placeholder="Enter Bank Name"
            required
          />
        </div>
      )}

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2">Loan Type:</label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="loanType"
              value="car"
              checked={formData.loanType === "car"}
              onChange={handleInputChange}
              className="form-radio text-green-500"
            />
            <span className="ml-2">
              <FaCarAlt className="inline mr-1" /> Car
            </span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="loanType"
              value="house"
              checked={formData.loanType === "house"}
              onChange={handleInputChange}
              className="form-radio text-green-500"
            />
            <span className="ml-2">
              <FaHome className="inline mr-1" /> House
            </span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="fileNumber">
          File Number:
        </label>
        <input
          type="text"
          name="fileNumber"
          id="fileNumber"
          value={formData.fileNumber || ""}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="clientName">
          Client Name:
        </label>
        <input
          type="text"
          name="clientName"
          id="clientName"
          value={formData.clientName || ""}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="visitDate">
          Visit Date:
        </label>
        <input
          type="date"
          name="visitDate"
          id="visitDate"
          value={formData.visitDate || ""}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="visitTime">
          Visit Time:
        </label>
        <input
          type="time"
          name="visitTime"
          id="visitTime"
          value={formData.visitTime || ""}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2">Signature 1:</label>
        <SignatureField onSave={(data) => handleSignatureSave("signature1", data)} />
      </div>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2">Signature 2:</label>
        <SignatureField onSave={(data) => handleSignatureSave("signature2", data)} />
      </div>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2">Signature 3:</label>
        <SignatureField onSave={(data) => handleSignatureSave("signature3", data)} />
      </div>

      <div>
        <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="remarks">
          Remarks:
        </label>
        <textarea
          name="remarks"
          id="remarks"
          value={formData.remarks || ""}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          rows="4"
        ></textarea>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default Page1
