import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPencilAlt, FaTrashAlt, FaSearch, FaFilter } from "react-icons/fa";

const initialForms = [
  { id: 1, name: "Loan Application", submittedBy: "John Doe", date: "2023-06-01" },
  { id: 2, name: "Credit Check", submittedBy: "Jane Smith", date: "2023-06-02" },
  { id: 3, name: "Income Verification", submittedBy: "Bob Johnson", date: "2023-06-03" },
  { id: 4, name: "Property Appraisal", submittedBy: "Alice Brown", date: "2023-06-04" },
  { id: 5, name: "Employment Verification", submittedBy: "Charlie Davis", date: "2023-06-05" },
];

function AllForms() {
  const [forms, setForms] = useState(initialForms);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
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
                    <motion.tr
                      key={form.id}
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
                      <td className="py-4 px-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-900 mr-2 transition duration-150 ease-in-out">
                          <FaPencilAlt />
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out">
                          <FaTrashAlt />
                        </button>
                      </td>
                    </motion.tr>
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
