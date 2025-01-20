import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa"; // Icon for Add Admin
import { motion } from "framer-motion"; // Animation library for smooth effects

const CreateAdmin = () => {
  // State to manage admin accounts
  const [admins, setAdmins] = useState([
    { id: 1, username: "admin1", password: "password1" },
    { id: 2, username: "admin2", password: "password2" },
  ]);

  // State to handle form inputs
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Add new admin function
  const addAdmin = (e) => {
    e.preventDefault();
    if (newUsername.trim() && newPassword.trim()) {
      const newAdmin = { id: admins.length + 1, username: newUsername, password: newPassword };
      setAdmins([...admins, newAdmin]);
      setNewUsername("");
      setNewPassword("");
    } else {
      alert("Both fields are required!");
    }
  };

  // Delete admin function
  const deleteAdmin = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto p-10 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-800 rounded-2xl shadow-2xl mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Admin Management Portal</h1>
        <p className="text-lg text-purple-200 mt-2">
          Create, view, and manage admin accounts efficiently.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">Create a New Admin</h2>
          <form onSubmit={addAdmin} className="space-y-6">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-lg font-medium text-purple-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter Admin Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-purple-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Admin Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUserPlus size={20} className="mr-2" />
              Add Admin
            </motion.button>
          </form>
        </motion.div>

        {/* Admin List Section */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">Existing Admins</h2>
          {admins.length > 0 ? (
            <ul className="space-y-4">
              {admins.map((admin) => (
                <motion.li
                  key={admin.id}
                  className="flex justify-between items-center p-4 bg-purple-50 rounded-lg shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <p className="text-lg font-medium text-purple-800">{admin.username}</p>
                    <p className="text-sm text-purple-500">Password: {admin.password}</p>
                  </div>
                  <motion.button
                    className="text-red-600 hover:text-red-700 font-medium"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => deleteAdmin(admin.id)}
                  >
                    Delete
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className="text-purple-600">No admins available. Add new admins using the form.</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CreateAdmin;
