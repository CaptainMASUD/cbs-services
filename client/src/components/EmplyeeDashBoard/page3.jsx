import React from "react"
import SignatureField from "./SignatureField"

function Page3({ onPrev, updateFormData, formData, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === "checkbox") {
      updateFormData({
        [name]: Array.isArray(formData[name])
          ? checked
            ? [...formData[name], value]
            : formData[name].filter((item) => item !== value)
          : checked
          ? [value]
          : [],
      });
    } else {
      updateFormData({ [name]: value });
    }
  };
  

  const handleSignatureSave = (field, data) => {
    updateFormData({ [field]: data })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Loan Application Form - Page 3</h1>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-2">Applicant Photo:</label>
          <input type="file" accept="image/*" className="w-full p-2 border rounded" />
        </div>
        <div className="w-1/2">
          <label className="block mb-2">Guarantor Photo:</label>
          <input type="file" accept="image/*" className="w-full p-2 border rounded" />
        </div>
      </div>

      <div>
        <label className="block mb-2">Ref No:</label>
        <input
          type="text"
          name="refNo"
          value={formData.refNo || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Name of Applicant:</label>
        <input
          type="text"
          name="applicantName"
          value={formData.applicantName || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">File Serial No:</label>
        <input
          type="text"
          name="fileSerialNo"
          value={formData.fileSerialNo || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Date & Time:</label>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2">Visit Place:</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="visitPlace"
              value="office"
              checked={formData.visitPlace?.includes("office")}
              onChange={handleInputChange}
              className="mr-2"
            />
            Office/Business Place
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="visitPlace"
              value="residence"
              checked={formData.visitPlace?.includes("residence")}
              onChange={handleInputChange}
              className="mr-2"
            />
            Residence
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="visitPlace"
              value="other"
              checked={formData.visitPlace?.includes("other")}
              onChange={handleInputChange}
              className="mr-2"
            />
            Other
          </label>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4">
        I confirm that no fees have been paid to the bearer of this form for the provided service
      </h2>
      <p className="mb-4">আমি নিশ্চিত করছি যে এই ফর্মের বাহকের কাছে কোনও ফি প্রদান করা হয়নি প্রদত্ত সেবার জন্য</p>

      <div>
        <label className="block mb-2">Applicant Signature:</label>
        <SignatureField onSave={(data) => handleSignatureSave("applicantSignature", data)} />
      </div>

      <div>
        <label className="block mb-2">Applicant was present and signed in front of me:</label>
        <textarea
          name="applicantRemarks"
          value={formData.applicantRemarks || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          rows="2"
        ></textarea>
      </div>

      <div>
        <label className="block mb-2">Guarantor Signature:</label>
        <SignatureField onSave={(data) => handleSignatureSave("guarantorSignature", data)} />
      </div>

      <div>
        <label className="block mb-2">Guarantor was present and signed in front of me:</label>
        <textarea
          name="guarantorRemarks"
          value={formData.guarantorRemarks || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          rows="2"
        ></textarea>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block mb-2">Team Leader Seal and Sign:</label>
          <SignatureField onSave={(data) => handleSignatureSave("teamLeaderSignature", data)} />
          <input
            type="date"
            name="teamLeaderDate"
            value={formData.teamLeaderDate || ""}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">Manager Seal and Sign:</label>
          <SignatureField onSave={(data) => handleSignatureSave("managerSignature", data)} />
          <input
            type="date"
            name="managerDate"
            value={formData.managerDate || ""}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">Field Agent Sign:</label>
          <SignatureField onSave={(data) => handleSignatureSave("fieldAgentSignature", data)} />
          <input
            type="date"
            name="fieldAgentDate"
            value={formData.fieldAgentDate || ""}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={onPrev} className="bg-gray-500 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Page3

