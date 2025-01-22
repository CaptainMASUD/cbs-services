import React from "react";
import { FaCheckCircle, FaPlus, FaTachometerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SuccessMessage() {
    const navigate = useNavigate()
  const handleAddAnotherForm = () => {
    window.location.reload(); // Reload the page
  };

  const handleGoToDashboard = () => {
   navigate("/form"); // Navigate to dashboard
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center animate-fadeIn">
      <FaCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
      <h2 className="text-2xl font-bold mb-4 text-green-700">Application Submitted Successfully!</h2>
      <p className="mb-6">Thank you for your application. We will review it and get back to you soon.</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleAddAnotherForm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
        >
          <FaPlus className="mr-2" /> Add Another Form
        </button>
        <button
          onClick={handleGoToDashboard}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
        >
          <FaTachometerAlt className="mr-2" /> Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default SuccessMessage;
