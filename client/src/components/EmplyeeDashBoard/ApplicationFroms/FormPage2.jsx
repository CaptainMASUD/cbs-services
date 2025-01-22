import React from "react";

const Page2 = ({ data }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Page 2: Business Details</h3>
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* Organization Information */}
          <div>
            <label className="block font-medium">Organization Name:</label>
            <input
              type="text"
              value={data.organizationName}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Office Address:</label>
            <input
              type="text"
              value={data.officeAddress}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Person Contacted:</label>
            <input
              type="text"
              value={data.personContacted}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Designation:</label>
            <input
              type="text"
              value={data.designation}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Contact No:</label>
            <input
              type="text"
              value={data.contactNo}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Contact Time:</label>
            <input
              type="text"
              value={data.contactTime}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          {/* Business Information */}
          <div>
            <label className="block font-medium">Name of Business:</label>
            <input
              type="text"
              value={data.businessName}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Type of Company:</label>
            <input
              type="text"
              value={data.companyType}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Total No. of Employees:</label>
            <input
              type="number"
              value={data.totalEmployees}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Years in Business:</label>
            <input
              type="number"
              value={data.yearsInBusiness}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Nature of Premise Ownership:</label>
            <input
              type="text"
              value={data.premiseOwnership}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Nature of Business:</label>
            <input
              type="text"
              value={data.businessNature}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Office Setup Info:</label>
            <textarea
              value={data.officeSetupInfo}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Key Landmarks:</label>
            <textarea
              value={data.keyLandmarks}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Adverse Observations:</label>
            <textarea
              value={data.adverseObservations}
              readOnly
              className="border rounded w-full p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Inventory Match:</label>
            <input
              type="checkbox"
              checked={data.inventoryMatch}
              readOnly
              className="mr-2"
            />
            <span>Yes</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page2;