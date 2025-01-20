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

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Administration for Managers
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Easily manage permissions and roles for managers with intuitive controls.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Dynamic Permission Rendering */}
        {Object.keys(permissions).map((key) => {
          const label =
            key === "deleteForms"
              ? "Delete Forms"
              : key === "resetPassword"
              ? "Reset Password"
              : key === "sendMessages"
              ? "Send Messages"
              : "Form Abilities";

          const tooltipText =
            key === "deleteForms"
              ? "Allow manager to delete forms."
              : key === "resetPassword"
              ? "Allow manager to reset user passwords."
              : key === "sendMessages"
              ? "Allow manager to contact employees for overdue tasks."
              : "Allow manager to approve or decline forms.";

          return (
            <motion.div
              key={key}
              className="bg-gray-50 rounded-lg p-4 shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-gray-800">{label}</span>
                  <Tooltip title={tooltipText} placement="top">
                    <FaInfoCircle className="text-gray-500 cursor-pointer" />
                  </Tooltip>
                </div>
                <Switch
                  checked={permissions[key]}
                  onChange={() => handleToggle(key)}
                  className={`${
                    permissions[key] ? "bg-purple-500" : "bg-gray-300"
                  } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300`}
                >
                  <span
                    className={`${
                      permissions[key] ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
                  />
                </Switch>
              </div>
              <p className="text-sm text-gray-600 mt-2">{tooltipText}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AdministrationForManagers;
