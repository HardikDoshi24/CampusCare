// AdminHistory.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminHistory() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:8888/api/admin/reports"); // Assuming an endpoint for admin reports
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
    fetchReports();
  }, []);

  const handleStatusChange = async (reportId) => {
    try {
      await axios.put(`http://localhost:8888/api/admin/reports/${reportId}/status`, {
        status: "Done", // Change status to "Done"
      });
      // After updating status, refresh the reports
      const response = await axios.get("http://localhost:8888/api/admin/reports");
      setReports(response.data);
    } catch (error) {
      console.error("Error updating report status:", error);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-10 py-4">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white p-4">
        Submitted Reports (Admin View)
      </h2>
      <ul className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {reports.map((report) => (
          <li key={report.id}>
            <div>Email: {report.email}</div>
            <div>Damaged Entity: {report.damagedEntity}</div>
            <div>Department: {report.department}</div>
            <div>Room Type: {report.roomType}</div>
            <div>Description: {report.description}</div>
            <div>Status: {report.status}</div>
            {/* Button to change status */}
            {report.status === "Pending" && (
              <button onClick={() => handleStatusChange(report.id)}>Mark as Done</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminHistory;
