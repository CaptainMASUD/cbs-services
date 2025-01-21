import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  FaFileContract,
  FaUserCheck,
  FaExclamationTriangle,
  FaLock,
  FaBalanceScale,
  FaGavel,
  FaQuestionCircle,
} from "react-icons/fa"

const TermsSection = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
      initial={false}
      animate={{ height: isOpen ? "auto" : "60px" }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center text-lg font-semibold text-gray-800">
          {icon}
          <span className="ml-3">{title}</span>
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          ▼
        </motion.span>
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 pb-4"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">CBS Services Loan Application</p>
        </motion.div>

        <TermsSection title="Acceptance of Terms" icon={<FaFileContract className="text-blue-500" />}>
          <p>
            By accessing or using the CBS Services Loan Application, you agree to be bound by these Terms of Service. If
            you do not agree to these terms, please do not use our service.
          </p>
        </TermsSection>

        <TermsSection title="User Eligibility" icon={<FaUserCheck className="text-green-500" />}>
          <p>To use our loan application service, you must:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Be at least 18 years old</li>
            <li>Be a legal resident of the country where the service is offered</li>
            <li>Have the legal capacity to enter into a binding contract</li>
            <li>Provide accurate and complete information in your application</li>
          </ul>
        </TermsSection>

        <TermsSection title="Loan Application Process" icon={<FaExclamationTriangle className="text-yellow-500" />}>
          <p>By submitting a loan application:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>You authorize CBS Services to verify your information</li>
            <li>You agree to provide additional documentation if requested</li>
            <li>You understand that submitting an application does not guarantee approval</li>
            <li>You acknowledge that the final loan terms may differ based on the verification process</li>
          </ul>
        </TermsSection>

        <TermsSection title="Privacy and Data Usage" icon={<FaLock className="text-purple-500" />}>
          <p>Your privacy is important to us. By using our service:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>You agree to our Privacy Policy, which explains how we collect, use, and protect your data</li>
            <li>You consent to the collection and processing of your personal and financial information</li>
            <li>
              You understand that we may share your information with third parties as outlined in our Privacy Policy
            </li>
          </ul>
        </TermsSection>

        <TermsSection title="User Responsibilities" icon={<FaBalanceScale className="text-red-500" />}>
          <p>As a user of our service, you agree to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Use the service only for lawful purposes</li>
            <li>Not engage in any activity that disrupts or interferes with our service</li>
          </ul>
        </TermsSection>

        <TermsSection title="Disclaimers and Limitations of Liability" icon={<FaGavel className="text-indigo-500" />}>
          <p>By using our service:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>You understand that we do not guarantee loan approval or specific terms</li>
            <li>
              You agree that we are not responsible for any losses or damages resulting from your use of the service
            </li>
            <li>You acknowledge that we are not liable for any errors or interruptions in the service</li>
            <li>You understand that we may modify or discontinue the service at any time without notice</li>
          </ul>
        </TermsSection>

        <TermsSection title="Changes to Terms" icon={<FaQuestionCircle className="text-orange-500" />}>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify users of any significant
            changes. Your continued use of the service after such modifications constitutes acceptance of the updated
            terms.
          </p>
        </TermsSection>

        <TermsSection title="Contact Us" icon={<FaQuestionCircle className="text-teal-500" />}>
          <p>If you have any questions or concerns about our Terms of Service, please contact us at:</p>
          <p className="mt-2">
            <strong>CBS Services</strong>
            <br />
            Email: legal@cbsservices.com
            <br />
            Phone: (123) 456-7890
            <br />
            Address: 123 Main St, Anytown, ST 12345
          </p>
        </TermsSection>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-gray-600 mt-8"
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </div>
  )
}

export default TermsOfService

