import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SuccessMessage = () => {
  const navigate = useNavigate();

  const handleAddMore = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br rounded-2xl from-green-500 via-green-500 to-red-400 text-white p-8"
    >
      {/* Success Icon Section */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center text-center mb-10"
      >
        <motion.div
          className="bg-white text-green-500 p-6 rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FaCheckCircle className="text-6xl" />
        </motion.div>
        <h1 className="text-5xl font-extrabold mt-6 tracking-wide">Success!</h1>
        <p className="text-lg mt-4 max-w-lg">
          Your loan verification form has been successfully submitted and is being processed. We'll notify you once it's complete.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex space-x-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddMore}
          className="bg-white text-green-600 px-6 py-3 rounded-full shadow-lg hover:bg-green-100 transition duration-300 flex items-center"
        >
          <FaFileAlt className="mr-2 text-lg" />
          Add Another Form
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/dashboard")}
          className="bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          Go to Dashboard
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessMessage;
