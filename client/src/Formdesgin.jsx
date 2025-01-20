import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-2xl font-bold text-green-800">Form Submitted Successfully!</h1>
      <p className="text-green-600">Your data has been saved successfully.</p>
    </div>
  );
}

function FormDesign() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    applicantSignature: '',
    guarantor1Signature: '',
    guarantor2Signature: '',
    remarks: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const applicantSigRef = useRef(null);
  const guarantor1SigRef = useRef(null);
  const guarantor2SigRef = useRef(null);

  const handleNext = () => {
    if (page < 2) {
      setPage(page + 1);
    } else {
      const newFormData = {
        ...formData,
        applicantSignature: applicantSigRef.current?.getTrimmedCanvas().toDataURL(),
        guarantor1Signature: guarantor1SigRef.current?.getTrimmedCanvas().toDataURL(),
        guarantor2Signature: guarantor2SigRef.current?.getTrimmedCanvas().toDataURL()
      };
      setFormData(newFormData);
      localStorage.setItem('formData', JSON.stringify(newFormData));
      setShowSuccess(true);
    }
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const clearSignature = (sigRef) => {
    sigRef.current?.clear();
  };

  if (showSuccess) {
    return <SuccessMessage />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md p-6 w-3/4"
      >
        {page === 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Applicant Signature</h2>
            <SignatureCanvas
              ref={applicantSigRef}
              canvasProps={{ className: 'border w-full h-32 rounded-md' }}
            />
            <button
              onClick={() => clearSignature(applicantSigRef)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Clear Signature
            </button>
          </div>
        )}
        {page === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">1st Guarantor Signature</h2>
            <SignatureCanvas
              ref={guarantor1SigRef}
              canvasProps={{ className: 'border w-full h-32 rounded-md' }}
            />
            <button
              onClick={() => clearSignature(guarantor1SigRef)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Clear Signature
            </button>
          </div>
        )}
        {page === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">2nd Guarantor Signature</h2>
            <SignatureCanvas
              ref={guarantor2SigRef}
              canvasProps={{ className: 'border w-full h-32 rounded-md' }}
            />
            <button
              onClick={() => clearSignature(guarantor2SigRef)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Clear Signature
            </button>
          </div>
        )}
        <div className="flex justify-between mt-4">
          {page > 0 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              <FaArrowLeft className="inline-block mr-2" /> Previous
            </button>
          )}
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {page < 2 ? 'Next' : 'Submit'} <FaArrowRight className="inline-block ml-2" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default FormDesign;
