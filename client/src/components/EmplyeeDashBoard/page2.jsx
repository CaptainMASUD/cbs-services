import React from "react"
import { FaBuilding, FaIndustry } from "react-icons/fa"

function Page2({ onNext, onPrev, updateFormData, formData }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onNext()
  }

  const handleInputChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Loan Application Form - Page 2</h1>

      <div>
        <label className="block mb-2">Name of Organization:</label>
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Office Address:</label>
        <textarea
          name="officeAddress"
          value={formData.officeAddress || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          rows="3"
          required
        ></textarea>
      </div>

      <div>
        <label className="block mb-2">Person Contacted:</label>
        <input
          type="text"
          name="personContacted"
          value={formData.personContacted || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Designation:</label>
        <input
          type="text"
          name="designation"
          value={formData.designation || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Contact No:</label>
        <input
          type="tel"
          name="contactNo"
          value={formData.contactNo || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Contact Time:</label>
        <input
          type="time"
          name="contactTime"
          value={formData.contactTime || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Additional Contact Person (Accounts & Finance):</label>
        <input
          type="text"
          name="additionalContact"
          value={formData.additionalContact || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-2">Name of Business:</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Type of Company:</label>
        <select
          name="companyType"
          value={formData.companyType || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select...</option>
          <option value="private">Private</option>
          <option value="government">Government</option>
          <option value="public">Public</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Total Number of Employees:</label>
        <input
          type="number"
          name="employeeCount"
          value={formData.employeeCount || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Years in Business:</label>
        <input
          type="number"
          name="yearsInBusiness"
          value={formData.yearsInBusiness || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Nature of Premise Ownership:</label>
        <select
          name="premiseOwnership"
          value={formData.premiseOwnership || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select...</option>
          <option value="owned">Owned</option>
          <option value="rented">Rented</option>
          <option value="leased">Leased</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Nature of Business:</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="businessNature"
              value="manufacturing"
              checked={formData.businessNature?.includes("manufacturing")}
              onChange={handleInputChange}
              className="mr-2"
            />
            <FaIndustry className="mr-1" /> Manufacturing
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="businessNature"
              value="chemical"
              checked={formData.businessNature?.includes("chemical")}
              onChange={handleInputChange}
              className="mr-2"
            />
            <FaBuilding className="mr-1" /> Chemical
          </label>
          {/* Add more checkboxes for other business types */}
        </div>
      </div>

      <div>
        <label className="block mb-2">Does the company have a permanent sign board?</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasSignBoard"
              value="yes"
              checked={formData.hasSignBoard === "yes"}
              onChange={handleInputChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasSignBoard"
              value="no"
              checked={formData.hasSignBoard === "no"}
              onChange={handleInputChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <div>
        <label className="block mb-2">Is the office in the current premises for less than 1 year?</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="isNewPremises"
              value="yes"
              checked={formData.isNewPremises === "yes"}
              onChange={handleInputChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="isNewPremises"
              value="no"
              checked={formData.isNewPremises === "no"}
              onChange={handleInputChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <div>
        <label className="block mb-2">Any adverse observations during visit?</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasAdverseObservations"
              value="yes"
              checked={formData.hasAdverseObservations === "yes"}
              onChange={handleInputChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasAdverseObservations"
              value="no"
              checked={formData.hasAdverseObservations === "no"}
              onChange={handleInputChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      {/* Add more fields as per the requirements */}

      <div className="flex justify-between">
        <button type="button" onClick={onPrev} className="bg-gray-500 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  )
}

export default Page2

