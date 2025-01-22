import React from "react";

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Total Applications" value="156" />
        <StatCard title="Pending Review" value="23" />
        <StatCard title="Approved This Month" value="45" />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-green-600">{value}</p>
    </div>
  );
}

export default Dashboard;
