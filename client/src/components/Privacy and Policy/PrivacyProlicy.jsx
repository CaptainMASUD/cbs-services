import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaShieldAlt, FaUserLock, FaExchangeAlt, FaUserSecret, FaGlobe, FaQuestionCircle } from "react-icons/fa"

const PolicySection = ({ title, icon, children }) => {
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

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">CBS Services Loan Application</p>
        </motion.div>

        <PolicySection title="Information We Collect" icon={<FaUserLock className="text-blue-500" />}>
          <p>We collect personal information that you provide to us, including but not limited to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Full name</li>
            <li>Contact information (email address, phone number, mailing address)</li>
            <li>Financial information (income, assets, debts)</li>
            <li>Employment details</li>
            <li>Social Security Number or other government-issued identification</li>
            <li>Bank account information</li>
          </ul>
        </PolicySection>

        <PolicySection title="How We Use Your Information" icon={<FaExchangeAlt className="text-green-500" />}>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Processing and evaluating your loan application</li>
            <li>Verifying your identity and conducting background checks</li>
            <li>Communicating with you about your application and loan status</li>
            <li>Complying with legal and regulatory requirements</li>
            <li>Improving our services and customer experience</li>
          </ul>
        </PolicySection>

        <PolicySection title="Information Sharing and Disclosure" icon={<FaUserSecret className="text-purple-500" />}>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Credit bureaus and reporting agencies</li>
            <li>Financial institutions and lenders</li>
            <li>Service providers who assist in our operations</li>
            <li>Legal and regulatory authorities when required by law</li>
          </ul>
          <p className="mt-2">We do not sell your personal information to third parties.</p>
        </PolicySection>

        <PolicySection title="Data Security" icon={<FaShieldAlt className="text-red-500" />}>
          <p>We implement industry-standard security measures to protect your personal information, including:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Encryption of sensitive data</li>
            <li>Regular security audits and assessments</li>
            <li>Access controls and authentication procedures</li>
            <li>Employee training on data protection and privacy</li>
          </ul>
        </PolicySection>

        <PolicySection title="Your Rights" icon={<FaGlobe className="text-yellow-500" />}>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Access and review your personal information</li>
            <li>Request corrections to inaccurate or incomplete information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt-out of certain data sharing practices</li>
            <li>File a complaint with relevant data protection authorities</li>
          </ul>
        </PolicySection>

        <PolicySection title="Contact Us" icon={<FaQuestionCircle className="text-indigo-500" />}>
          <p>If you have any questions or concerns about our privacy policy or data practices, please contact us at:</p>
          <p className="mt-2">
            <strong>CBS Services</strong>
            <br />
            Email: privacy@cbsservices.com
            <br />
            Phone: (123) 456-7890
            <br />
            Address: 123 Main St, Anytown, ST 12345
          </p>
        </PolicySection>

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

export default PrivacyPolicy

