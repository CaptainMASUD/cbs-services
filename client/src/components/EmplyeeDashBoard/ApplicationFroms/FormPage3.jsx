import React from "react";
import SignatureCanvas from "react-signature-canvas";

const Page3 = ({ data }) => {
  let applicantSignature = null;
  let guarantorSignature = null;

  const clearSignature = (signatureRef) => {
    if (signatureRef) signatureRef.clear();
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Page 3: Confirmation & Signatures</h3>
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* Photos */}
          <div>
            <label className="block font-medium">Applicant Photo:</label>
            <div className="border rounded w-full h-24 flex items-center justify-center">
              <span>Photo Placeholder</span>
            </div>
          </div>
          <div>
            <label className="block font-medium">Guarantor Photo:</label>
            <div className="border rounded w-full h-24 flex items-center justify-center">
              <span>Photo Placeholder</span>
            </div>
          </div>
          {/* Details */}
          <div>
            <label className="block font-medium">Ref No:</label>
            <input
              type="text"
              value={data.refNo}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Applicant Name:</label>
            <input
              type="text"
              value={data.applicantName}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">File Serial No:</label>
            <input
              type="text"
              value={data.fileSerialNo}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Date & Time:</label>
            <input
              type="text"
              value={data.visitDate}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Visit Place:</label>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" /> Office/Business Place
              <input type="checkbox" className="ml-4 mr-2" /> Residence
              <input type="checkbox" className="ml-4 mr-2" /> Other
            </div>
          </div>
        </div>

        {/* Confirmation */}
        <div className="mt-6">
          <h4 className="text-lg font-bold">Confirmation</h4>
          <p>I confirm that no fees have been paid to the bearer of this form for the provided service.</p>
          <p>আমি নিশ্চিত করছি যে এই ফর্মের বাহকের কাছে কোন ফি প্রদান করা হয়নি।</p>
        </div>

        {/* Signatures */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Applicant Signature:</label>
            <SignatureCanvas
              penColor="black"
              ref={(ref) => (applicantSignature = ref)}
              canvasProps={{ width: 400, height: 100, className: "border rounded" }}
            />
            <button
              type="button"
              onClick={() => clearSignature(applicantSignature)}
              className="text-sm text-red-600 mt-2"
            >
              Clear
            </button>
          </div>
          <div>
            <label className="block font-medium">Guarantor Signature:</label>
            <SignatureCanvas
              penColor="black"
              ref={(ref) => (guarantorSignature = ref)}
              canvasProps={{ width: 400, height: 100, className: "border rounded" }}
            />
            <button
              type="button"
              onClick={() => clearSignature(guarantorSignature)}
              className="text-sm text-red-600 mt-2"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6">
          <label className="block font-medium">Remarks:</label>
          <textarea className="border rounded w-full p-2"></textarea>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p>Team Leader</p>
            <p>Seal & Sign</p>
            <p>Date</p>
          </div>
          <div>
            <p>Manager</p>
            <p>Seal & Sign</p>
            <p>Date</p>
          </div>
          <div>
            <p>Field Agent</p>
            <p>Sign</p>
            <p>Date</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page3;