import React, { useState } from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Preview from './Preview';
import ConfirmationStep from './ConfirmationStep';
import SuccessMessage from './SuccessMessage';
import CompletedFormsView from './CompletedFormsView';

function EmplyeeDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCompletedForms, setShowCompletedForms] = useState(false);

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    setShowPreview(true);
  };

  const handleEdit = () => {
    setShowPreview(false);
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const handleFinalSubmit = () => {
    // Here you would typically send the data to a server
    setShowSuccess(true);
    setShowConfirmation(false);
  };

  const handleViewCompletedForms = () => {
    setShowCompletedForms(true);
  };

  return (
    <div className="container mx-auto p-4 bg-green-50 min-h-screen">
      {!showPreview && !showConfirmation && !showSuccess && !showCompletedForms ? (
        <>
          {currentPage === 1 && <Page1 onNext={handleNextPage} updateFormData={updateFormData} formData={formData} />}
          {currentPage === 2 && <Page2 onNext={handleNextPage} onPrev={handlePrevPage} updateFormData={updateFormData} formData={formData} />}
          {currentPage === 3 && <Page3 onPrev={handlePrevPage} updateFormData={updateFormData} formData={formData} onSubmit={handleSubmit} />}
        </>
      ) : showPreview ? (
        <div>
          <Preview formData={formData} />
          <div className="flex justify-between mt-4">
            <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded">
              Edit Form
            </button>
            <button onClick={handleConfirm} className="bg-green-500 text-white px-4 py-2 rounded">
              Confirm
            </button>
          </div>
        </div>
      ) : showConfirmation ? (
        <ConfirmationStep formData={formData} onConfirm={handleFinalSubmit} onEdit={handleEdit} />
      ) : showSuccess ? (
        <SuccessMessage onViewCompletedForms={handleViewCompletedForms} />
      ) : (
        <CompletedFormsView />
      )}
    </div>
  );
}

export default EmplyeeDashboard;
