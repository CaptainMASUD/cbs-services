import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { Tooltip } from "antd";
import { FaInfoCircle } from "react-icons/fa";

const AdministrationForManagers = () => {
  const [permissions, setPermissions] = useState({
    deleteForms: false,
    resetPassword: false,
    sendMessages: false,
    formAbilities: false,
  });

  const handleToggle = (permission) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  const permissionDetails = [
    {
      key: "deleteForms",
      label: "Delete Forms",
      description: "Allow manager to delete forms when necessary.",
      tooltip: "Enable or disable the ability to delete forms.",
    },
    {
      key: "resetPassword",
      label: "Reset Password",
      description: "Allow manager to reset passwords for users when needed.",
      tooltip: "Enable or disable password reset permissions for managers.",
    },
    {
      key: "sendMessages",
      label: "Send Messages",
      description: "Allow manager to send messages to employees about overdue tasks.",
      tooltip: "Grant messaging permissions for improved communication.",
    },
    {
      key: "formAbilities",
      label: "Form Abilities",
      description: "Allow manager to approve or decline form submissions.",
      tooltip: "Enable or disable form approval and decline permissions.",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-2xl mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Administration for Managers</h1>
        <p className="text-lg text-gray-600 mt-3">
          Effortlessly manage permissions for managers with intuitive toggles.
        </p>
      </header>

      {/* Permissions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {permissionDetails.map(({ key, label, description, tooltip }) => (
          <motion.div
            key={key}
            className="flex flex-col bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-800">{label}</h2>
                <Tooltip title={tooltip} placement="top">
                  <FaInfoCircle className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                </Tooltip>
              </div>
              <Switch
                checked={permissions[key]}
                onChange={() => handleToggle(key)}
                className={`${
                  permissions[key] ? "bg-purple-600" : "bg-gray-300"
                } relative inline-flex items-center h-6 rounded-full w-12 transition-colors duration-300`}
              >
                <span
                  className={`${
                    permissions[key] ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
                />
              </Switch>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdministrationForManagers;
