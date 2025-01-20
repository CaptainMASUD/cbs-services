import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa"; // React Icon for adding admins
import { motion } from "framer-motion"; // Framer Motion for animations

const CreateAdmin = () => {
  // State to store admins
  const [admins, setAdmins] = useState([
    { id: 1, username: "admin1", password: "password1" },
    { id: 2, username: "admin2", password: "password2" },
  ]);

  // State to manage form inputs
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Handle form submission to add a new admin
  const addAdmin = (e) => {
    e.preventDefault();
    if (newUsername.trim() && newPassword.trim()) {
      const newAdmin = { id: admins.length + 1, username: newUsername, password: newPassword };
      setAdmins([...admins, newAdmin]);
      setNewUsername(""); // Reset form input for username
      setNewPassword(""); // Reset form input for password
    } else {
      alert("Both fields are required!");
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Create Admin</h1>
      <p className="text-lg text-gray-600 mb-6">
        Here you can create new admin accounts by filling out the form below.
      </p>

      <form onSubmit={addAdmin} className="space-y-4">
        {/* Username Input */}
        <div className="flex flex-col">
          <label htmlFor="username" className="text-lg font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter Admin Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Admin Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <motion.button
            type="submit"
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaUserPlus size={20} className="mr-2" />
            Add Admin
          </motion.button>
        </div>
      </form>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Existing Admins:</h2>
        <ul className="space-y-2">
          {admins.map((admin) => (
            <motion.li
              key={admin.id}
              className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <p className="text-lg text-gray-800">{admin.username}</p>
                <p className="text-sm text-gray-500">Password: {admin.password}</p>
              </div>
              <motion.button
                className="text-red-500 hover:text-red-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setAdmins(admins.filter((item) => item.id !== admin.id));
                }}
              >
                Delete
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default CreateAdmin;
