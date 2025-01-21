import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaFilter, FaTrashAlt } from "react-icons/fa";
import { IoFolderOpen, IoClose } from "react-icons/io5";
import SignatureCanvas from "react-signature-canvas";

const initialForms = [
  { id: 1, name: "Loan Application", submittedBy: "John Doe", date: "2023-06-01" },
  { id: 2, name: "Credit Check", submittedBy: "Jane Smith", date: "2023-06-02" },
  { id: 3, name: "Income Verification", submittedBy: "Bob Johnson", date: "2023-06-03" },
  { id: 4, name: "Property Appraisal", submittedBy: "Alice Brown", date: "2023-06-04" },
  { id: 5, name: "Employment Verification", submittedBy: "Charlie Davis", date: "2023-06-05" },
];

const bankTypes = ["Bank of America", "Chase", "Wells Fargo", "CitiBank", "PNC Bank"];
const loanTypes = ["Car Loan", "Home Loan", "Personal Loan", "Education Loan"];

function AllForms() {
  const [forms, setForms] = useState(initialForms);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [expandedForm, setExpandedForm] = useState(null);
  const [deleteDisabled, setDeleteDisabled] = useState(false);
  const [adminMessage, setAdminMessage] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const toggleFormDetails = (formId) => {
    setExpandedForm(expandedForm === formId ? null : formId);
  };

  const handleDeleteClick = () => {
    setAdminMessage("You need admin permission to delete this form.");
    setDeleteDisabled(true);
  };

  const handleCancel = () => {
    setAdminMessage("");
    setDeleteDisabled(false);
  };

  const filteredAndSortedForms = forms
    .filter(
      (form) =>
        form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.submittedBy.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">All Forms</h2>
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search forms..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center">
            <FaFilter className="mr-2 text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Date</option>
              <option value="name">Form Name</option>
              <option value="submittedBy">Submitted By</option>
            </select>
          </div>
        </div>
        {adminMessage && (
          <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            {adminMessage}
            <button
              onClick={handleCancel}
              className="ml-4 bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        )}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form Name</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted By</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filteredAndSortedForms.map((form) => (
                    <React.Fragment key={form.id}>
                      <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="py-4 px-4 text-sm text-gray-900">{form.id}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{form.name}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{form.submittedBy}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{form.date}</td>
                        <td className="py-4 px-4 text-sm flex items-center space-x-2">
                          <button
                            onClick={() => toggleFormDetails(form.id)}
                            className="text-black hover:text-gray-600 transition duration-150 ease-in-out"
                          >
                            {expandedForm === form.id ? <IoClose size={20} /> : <IoFolderOpen size={20} />}
                          </button>
                          <button
                            onClick={handleDeleteClick}
                            disabled={deleteDisabled}
                            className={`${
                              deleteDisabled ? "text-gray-400 cursor-not-allowed" : "text-red-600 hover:text-red-900"
                            } transition duration-150 ease-in-out`}
                          >
                            <FaTrashAlt />
                          </button>
                        </td>
                      </motion.tr>
                      {expandedForm === form.id && (
                        <motion.tr
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <td colSpan="5" className="bg-gray-100 py-4 px-4">
                            <table className="w-full">
                              <tbody>
                                <tr>
                                  <td className="py-2 px-4 font-medium">Bank Type:</td>
                                  <td>{bankTypes[Math.floor(Math.random() * bankTypes.length)]}</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 font-medium">Loan Type:</td>
                                  <td>{loanTypes[Math.floor(Math.random() * loanTypes.length)]}</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 font-medium">File Number:</td>
                                  <td>FN-{form.id}-2023</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 font-medium">Client Name:</td>
                                  <td>{form.submittedBy}</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 font-medium">Visit Date:</td>
                                  <td>2023-06-15</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 font-medium">Visit Time:</td>
                                  <td>10:30 AM</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 font-medium">Remarks:</td>
                                  <td>All documents verified.</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 font-medium">Signatures:</td>
                                  <td>
                                    <div className="flex flex-wrap gap-4">
                                      {["blue", "green", "red"].map((color, index) => (
                                        <div
                                          key={index}
                                          className="border p-2"
                                          style={{ width: "220px", height: "120px" }}
                                        >
                                          <SignatureCanvas
                                            penColor={color}
                                            canvasProps={{
                                              width: 200,
                                              height: 100,
                                              className: "sigCanvas",
                                            }}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </motion.tr>
                      )}
                    </React.Fragment>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AllForms;
