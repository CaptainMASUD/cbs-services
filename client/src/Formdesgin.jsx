import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import SignatureCanvas from "react-signature-canvas"
import { FaUser, FaFileAlt, FaCalendarAlt, FaClock, FaSignature, FaComments } from "react-icons/fa"
import SuccessMessage from "./components/SuccessMessage"

const LoanVerificationForm = () => {
  const [formData, setFormData] = useState({
    bankType: "",
    fileNumber: "",
    clientName: "",
    visitDate: "",
    visitTime: "",
    remarks: "",
  })
  const [showPreview, setShowPreview] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [canvasWidth, setCanvasWidth] = useState(0) // Dynamic canvas width

  // Refs for signature canvases
  const applicantSignatureRef = useRef()
  const guarantor1SignatureRef = useRef()
  const guarantor2SignatureRef = useRef()
  const canvasContainerRef = useRef() // Reference for the container to get its width

  useEffect(() => {
    // Set canvas width dynamically based on container width
    const resizeCanvas = () => {
      if (canvasContainerRef.current) {
        setCanvasWidth(canvasContainerRef.current.offsetWidth)
      }
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => setShowPreview(true)
  const handleEdit = () => setShowPreview(false)
  const handleConfirm = () => setFormSubmitted(true)

  const clearSignature = (signatureRef) => {
    signatureRef.current.clear()
  }

  const getSignatureImage = (signatureRef) => (signatureRef.current.isEmpty() ? null : signatureRef.current.toDataURL())

  const handleAddMore = () => {
    setFormData({
      bankType: "",
      fileNumber: "",
      clientName: "",
      visitDate: "",
      visitTime: "",
      remarks: "",
    })
    applicantSignatureRef.current.clear()
    guarantor1SignatureRef.current.clear()
    guarantor2SignatureRef.current.clear()
    setFormSubmitted(false)
    setShowPreview(false)
  }

  return (
    <div className="p-6 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {formSubmitted ? (
          <SuccessMessage onAddMore={handleAddMore} />
        ) : (
          <>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-green-700 uppercase mb-2">Salebird Limited</h1>
              <p className="text-gray-600 font-medium">Sign and Photo Verification Form</p>
            </div>

            {!showPreview ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-green-50 p-6 rounded-lg shadow-inner">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaFileAlt className="inline mr-2 text-green-600" />
                      Bank Type
                    </label>
                    <select
                      name="bankType"
                      value={formData.bankType}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    >
                      <option value="">Select Bank</option>
                      <option value="One Bank PLC">One Bank PLC</option>
                      <option value="Another Bank">Another Bank</option>
                      <option value="Global Bank">Global Bank</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaFileAlt className="inline mr-2 text-green-600" />
                        File Number
                      </label>
                      <input
                        type="text"
                        name="fileNumber"
                        value={formData.fileNumber}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaUser className="inline mr-2 text-green-600" />
                        Client's Name
                      </label>
                      <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaCalendarAlt className="inline mr-2 text-green-600" />
                        Visit Date
                      </label>
                      <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaClock className="inline mr-2 text-green-600" />
                        Visit Time
                      </label>
                      <input
                        type="time"
                        name="visitTime"
                        value={formData.visitTime}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      />
                    </div>
                  </div>

                  {["Applicant", "1st Guarantor", "2nd Guarantor"].map((role, index) => (
                    <div className="mb-4" key={index} ref={canvasContainerRef}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FaSignature className="inline mr-2 text-green-600" />
                        Signature of {role}
                      </label>
                      <div className="border border-gray-300 p-2 rounded bg-white">
                        <SignatureCanvas
                          ref={
                            index === 0
                              ? applicantSignatureRef
                              : index === 1
                                ? guarantor1SignatureRef
                                : guarantor2SignatureRef
                          }
                          penColor="black"
                          canvasProps={{
                            width: canvasWidth,
                            height: 150,
                            className: "sigCanvas",
                          }}
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            clearSignature(
                              index === 0
                                ? applicantSignatureRef
                                : index === 1
                                  ? guarantor1SignatureRef
                                  : guarantor2SignatureRef,
                            )
                          }
                          className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-300 ease-in-out"
                        >
                          Clear Signature
                        </motion.button>
                      </div>
                    </div>
                  ))}

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FaComments className="inline mr-2 text-green-600" />
                      Remarks
                    </label>
                    <textarea
                      name="remarks"
                      value={formData.remarks}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    ></textarea>
                  </div>
                </div>

                <div className="text-right mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300 ease-in-out"
                  >
                    Next
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-xl font-bold text-green-700 mb-4">Preview</h2>
                <table className="w-full border border-gray-300 text-left">
                  <tbody>
                    <tr>
                      <th className="border p-2">Bank Type</th>
                      <td className="border p-2">{formData.bankType}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">File Number</th>
                      <td className="border p-2">{formData.fileNumber}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Client Name</th>
                      <td className="border p-2">{formData.clientName}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Visit Date</th>
                      <td className="border p-2">{formData.visitDate}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Visit Time</th>
                      <td className="border p-2">{formData.visitTime}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Remarks</th>
                      <td className="border p-2">{formData.remarks}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Applicant Signature</th>
                      <td className="border p-2">
                        <img
                          src={getSignatureImage(applicantSignatureRef) || "/placeholder.svg"}
                          alt="Applicant Signature"
                          className="w-32 h-auto"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2">1st Guarantor Signature</th>
                      <td className="border p-2">
                        <img
                          src={getSignatureImage(guarantor1SignatureRef) || "/placeholder.svg"}
                          alt="Guarantor 1 Signature"
                          className="w-32 h-auto"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2">2nd Guarantor Signature</th>
                      <td className="border p-2">
                        <img
                          src={getSignatureImage(guarantor2SignatureRef) || "/placeholder.svg"}
                          alt="Guarantor 2 Signature"
                          className="w-32 h-auto"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-between mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEdit}
                    className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out"
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleConfirm}
                    className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300 ease-in-out"
                  >
                    Confirm
                  </motion.button>
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default LoanVerificationForm

