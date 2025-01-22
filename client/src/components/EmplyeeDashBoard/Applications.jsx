import React, { useState } from "react";
import { IoFolderOpen } from "react-icons/io5";
import Page1 from "./ApplicationFroms/FormPage1";
import Page2 from "./ApplicationFroms/FormPage2";
import Page3 from "./ApplicationFroms/FormPage3";

function Applications() {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const applications = [
    { id: 1, name: "John Doe", status: "Pending", date: "2023-05-15" },
    { id: 2, name: "Jane Smith", status: "Approved", date: "2023-05-14" },
    { id: 3, name: "Bob Johnson", status: "Rejected", date: "2023-05-13" },
  ];

  const formData = {
    page1: {
      bankType: "Commercial",
      loanType: "Car",
      fileNumber: "12345",
      clientName: "",
      visitDate: "",
      visitTime: "",
      signature1: "",
      signature2: "",
      signature3: "",
      remarks: "",
    },
    page2: {
      organizationName: "XYZ Pvt Ltd",
      officeAddress: "123 Main Street, Cityville",
      personContacted: "Alice Brown",
      designation: "Manager",
      contactNo: "1234567890",
      contactTime: "2:00 PM",
      additionalContactPerson: "Bob Green",
      businessName: "XYZ Pvt Ltd",
      companyType: "Private",
      totalEmployees: 50,
      yearsInBusiness: 10,
      premiseOwnership: "Owned",
      businessNature: "Manufacturing",
      officeSetupInfo: "3 floors, 5000 sq ft",
      companySignBoard: true,
      keyLandmarks: "Near City Park",
      ownerDetails: "John Doe",
      adverseObservations: "None",
      inventoryMatch: true,
    },
    page3: {
      refNo: "ABC123",
      applicantName: "John Doe",
      fileSerialNo: "67890",
      visitDate: "2023-05-15",
      visitPlace: "Office",
      confirmHeader: "I confirm that no fees have been paid to the bearer of this form for the provided service",
      confirmHeaderBangla: "এই ফরমে কোনো ফি ফিস প্রদান নেয়েইর বেয়ারের কাছের জন্য দেওয়া হয়েনি",
      applicantSignature: "",
      guarantorSignature: "",
      remarks: "All checks passed",
    },
  };

  const handleRowClick = (id) => {
    setSelectedApplication(id);
    setCurrentPage(1);
  };

  const renderPage = () => {
    if (!selectedApplication) return null;

    switch (currentPage) {
      case 1:
        return <Page1 data={formData.page1} />;
      case 2:
        return <Page2 data={formData.page2} />;
      case 3:
        return <Page3 data={formData.page3} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Applications</h2>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-b">
              <td className="py-2 px-4">{app.id}</td>
              <td className="py-2 px-4">{app.name}</td>
              <td className="py-2 px-4">{app.status}</td>
              <td className="py-2 px-4">{app.date}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleRowClick(app.id)}
                  className="text-green-600 hover:text-green-800"
                >
                  <IoFolderOpen size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedApplication && (
        <div className="mt-6 bg-white p-6 rounded shadow-md">
          {renderPage()}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Applications;
