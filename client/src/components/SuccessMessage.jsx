import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaCircleNotch, FaFileSignature } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-bl from-blue-400 via-purple-500 to-pink-500 text-white p-6"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="flex flex-col items-center mb-8"
      >
        <div className="relative flex space-x-6 animate-spin-slow">
          <motion.div
            className="text-6xl text-blue-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaFileAlt />
          </motion.div>
          <motion.div
            className="text-6xl text-purple-200"
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaCircleNotch />
          </motion.div>
          <motion.div
            className="text-6xl text-pink-200"
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaFileSignature />
          </motion.div>
        </div>
        <h1 className="text-4xl font-bold mt-6">Success!</h1>
        <p className="text-lg mt-4 text-center max-w-md">
          Your loan verification form has been successfully submitted and is being processed.
        </p>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#4a00e0" }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddMore}
        className="bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 transition duration-300 flex items-center"
      >
        <FaFileAlt className="mr-2 text-lg" />
        Add Another Form
      </motion.button>
    </motion.div>
  );
};

export default SuccessMessage;
