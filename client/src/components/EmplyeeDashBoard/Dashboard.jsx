import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

function Dashboard() {
  // Sample data for the line chart (Applications over time)
  const lineChartData = [
    { month: "Jan", applications: 0 },
    { month: "Feb", applications: 10 },
    { month: "Mar", applications: 30 },
    { month: "Apr", applications: 50 },
    { month: "May", applications: 80 },
    { month: "Jun", applications: 100 },
    { month: "Jul", applications: 130 },
  ];

  // Sample data for the bar chart (Total applications approved and pending review)
  const barChartData = [
    { month: "Jan", approved: 50, pending: 30 },
    { month: "Feb", approved: 60, pending: 25 },
    { month: "Mar", approved: 70, pending: 40 },
    { month: "Apr", approved: 90, pending: 50 },
    { month: "May", approved: 100, pending: 60 },
    { month: "Jun", approved: 120, pending: 80 },
    { month: "Jul", approved: 130, pending: 90 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Total Applications" value="156" />
        <StatCard title="Pending Review" value="23" />
        <StatCard title="Approved This Month" value="45" />
      </div>

      {/* Line Chart for Applications over Time */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Applications Over Time</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart for Total Applications Approved and Pending Review */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Applications Approved vs Pending Review</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="approved" fill="#82ca9d" />
              <Bar dataKey="pending" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </div>
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
