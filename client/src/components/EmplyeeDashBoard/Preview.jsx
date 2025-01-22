import React, { useState } from "react";
import SuccessMessage from "./SuccessMessage";

function Preview({ formData, onConfirm }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    onConfirm(); // Trigger any additional actions on confirmation.
  };

  if (isConfirmed) {
    return <SuccessMessage />;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-3xl font-bold mb-6 text-green-700 border-b pb-2">Application Preview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <PreviewSection
          title="Personal Information"
          data={[
            { label: "Client Name", value: formData.clientName },
            { label: "File Number", value: formData.fileNumber },
            { label: "Bank Type", value: formData.bankType },
            { label: "Loan Type", value: formData.loanType },
          ]}
        />

        {/* Visit Details */}
        <PreviewSection
          title="Visit Details"
          data={[
            { label: "Visit Date", value: formData.visitDate },
            { label: "Visit Time", value: formData.visitTime },
            {
              label: "Visit Place",
              value: Array.isArray(formData.visitPlace) ? formData.visitPlace.join(", ") : formData.visitPlace,
            },
          ]}
        />

        {/* Organization Details */}
        <PreviewSection
          title="Organization Details"
          data={[
            { label: "Organization Name", value: formData.organizationName },
            { label: "Business Name", value: formData.businessName },
            { label: "Company Type", value: formData.companyType },
            { label: "Office Address", value: formData.officeAddress },
          ]}
        />

        {/* Signatures */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-green-600">Signatures</h3>
          <div>
            <strong className="text-green-600">Applicant Signature:</strong>
            {formData.applicantSignature && (
              <img src={formData.applicantSignature} alt="Applicant Signature" className="mt-2 border rounded" />
            )}
          </div>
          <div>
            <strong className="text-green-600">Guarantor Signature:</strong>
            {formData.guarantorSignature && (
              <img src={formData.guarantorSignature} alt="Guarantor Signature" className="mt-2 border rounded" />
            )}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleConfirm}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirm Form
        </button>
      </div>
    </div>
  );
}

function PreviewSection({ title, data }) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 text-green-600">{title}</h3>
      {data.map((item, index) => (
        <p key={index}>
          <strong className="text-green-600">{item.label}:</strong> {item.value}
        </p>
      ))}
    </div>
  );
}

export default Preview;
