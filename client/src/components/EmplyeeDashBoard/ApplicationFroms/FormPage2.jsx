import React from 'react'

function FormPage2() {
    return (
      <div className="mt-6 p-6 bg-gray-50 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Form Page 2</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name of Organization</label>
            <input
              type="text"
              placeholder="Enter organization name"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Tech Solutions Inc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Office Address</label>
            <input
              type="text"
              placeholder="Enter office address"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="1234 Main Street"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Person Contacted</label>
            <input
              type="text"
              placeholder="Enter contact person"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Jane Doe"
            />
          </div>
          {/* Add additional fields as needed */}
        </form>
      </div>
    );
  }

export default FormPage2
