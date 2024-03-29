import React, { useState, useEffect } from "react";
import axios from "axios";

function History() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:8888/api/reports");
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
    fetchReports();
  }, []);

  const getStatusColor = (status) => {
    return status === "pending" ? "bg-yellow-500" : "bg-green-500";
  };

  const getStatusText = (status) => {
    return status === "pending" ? "Pending" : "Done";
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
        Submitted Reports
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {report.damagedEntity}
              </h3>
              <div className="text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-semibold">Email:</span>{" "}
                <span className="text-blue-600">{report.email}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-semibold">Department:</span>{" "}
                {report.department}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-semibold">Room Type:</span>{" "}
                {report.roomType} {report.roomNumber}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-semibold">Description:</span>{" "}
                {report.description}
              </div>
            </div>
            <div className={`p-4 ${getStatusColor(report.status)}`}>
              <span className="text-xs font-bold text-white uppercase">
                {getStatusText(report.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
