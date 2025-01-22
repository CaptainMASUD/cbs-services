import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import SignatureCanvas from "react-signature-canvas"
import { FaUser, FaFileAlt, FaCalendarAlt, FaClock, FaSignature, FaComments } from "react-icons/fa"
import SuccessMessage from "./components/SuccessMessage"
import EmplyeeDashboard from "./components/EmplyeeDashBoard/EmplyeeDashboard"
import EmployeePanel from "./components/EmplyeeDashBoard/EmployeePanel"

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
  <div>
    <EmployeePanel/>
  </div>
  )
}

export default LoanVerificationForm

