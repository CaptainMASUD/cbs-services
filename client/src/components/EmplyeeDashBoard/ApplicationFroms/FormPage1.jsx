import React from "react";

function FormPage1() {
    return (
      <div className="mt-6 p-6 bg-gray-50 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Form Page 1</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Bank Type</label>
            <input
              type="text"
              placeholder="Enter bank type"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="National Bank"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Loan Type</label>
            <input
              type="text"
              placeholder="Car, House, etc."
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Car Loan"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">File Number</label>
            <input
              type="text"
              placeholder="Enter file number"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="12345"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Client Name</label>
            <input
              type="text"
              placeholder="Enter client name"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Visit Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="2023-05-01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Visit Time</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="10:30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Remarks</label>
            <textarea
              placeholder="Enter remarks"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Initial review complete."
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              type="reset"
              className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }

export default FormPage1;
