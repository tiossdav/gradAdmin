import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  SelectedPrograms,
  Documents,
  PersonalInformation,
  ActiveApplications,
  CompletedApplications,
} from "../index";

import { IoIosArrowBack } from "react-icons/io";
import notification_icon from "../../assets/icon/notification_icon.png";
import {
  fetchApplicationById,
  fetchApplications,
  fetchStudents,
} from "../../api";
import Loader from "../../components/Loader";

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
  },
};

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState([]); // Default tab
  const [applications, setApplications] = useState([]); // Default tab
  const [selectedTab, setSelectedTab] = useState("selectedprograms"); // Default tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab); // Highlight the selected tab
  };

  const getApplicationsWithFullData = async () => {
    setLoading(true);
    try {
      const [appResponse, studentResponse] = await Promise.all([
        fetchApplications(), // Returns list of applications
        fetchStudents(), // Returns list of students
      ]);

      const applications = appResponse.data;
      const students = studentResponse.data;

      // Map each student with their applications using user_id
      const enrichedApplications = await Promise.all(
        students.map(async (student) => {
          // Filter applications that match the student
          const matchedApps = applications.filter(
            (app) => app.user_id === student.user_id
          );

          // For each matched application, fetch full data
          const fullAppData = await Promise.all(
            matchedApps.map((app) => fetchApplicationById(app.application_id))
          );

          return {
            student,
            applications: fullAppData,
          };
        })
      );

      // Find the selected student by user_id
      const selected = enrichedApplications.find(
        (entry) => entry.student.user_id === id
      );

      if (selected) {
        setStudent(selected.student);
        setApplications(selected.applications);
      }

      console.log(enrichedApplications); // Now contains full data per student
      console.log(id); // Now contains full data per student
    } catch (error) {
      console.error("Failed to fetch enriched application data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApplicationsWithFullData();
  }, []);

  return (
    <div className="">
      <div className=" flex justify-between items-center inter bg-white p-4 shadow rounded-md">
        <div>
          <h5 className="text-black text-base"> Admin</h5>
          <h5 className="text-black text-base">Samuel Balogun</h5>
        </div>
        <div>
          <img
            src={notification_icon}
            alt="notification_icon"
            className="w-[23px] h-[24px]"
          />
        </div>
      </div>

      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <div className="flex items-center bg-gray-50 mt-4 gap-3">
            <div
              onClick={() => {
                navigate("/students");
              }}
              className="h-[63px] flex items-center justify-center w-[44px] rounded-md bg-white"
            >
              <IoIosArrowBack />
            </div>
            <h5 className="h-[63px] flex items-center py-[20px] px-[25px] text-black rounded-md bg-white text-xl font-semibold inter w-full">
              {student.first_name} {student.last_name}
            </h5>
          </div>

          <div className="relative mt-4 w-full p-4 overflow-x-auto bg-white h-123 rounded-lg">
            <div className="gap-6 flex items-center w-full text-gray-600 h-[43px] ">
              <p
                className={`text-sm h-full bg-white flex items-center justify-center cursor-pointer ${
                  selectedTab === "selectedprograms"
                    ? "border-b-2 border-purple-700"
                    : ""
                }`}
                onClick={() => handleTabClick("selectedprograms")}
              >
                Selected Programs
              </p>
              <p
                className={`text-sm h-full flex items-center justify-center cursor-pointer ${
                  selectedTab === "activeapplication"
                    ? "border-b-2 border-purple-700"
                    : ""
                }`}
                onClick={() => handleTabClick("activeapplication")}
              >
                Active Applications
              </p>
              <p
                className={`text-sm h-full flex items-center justify-center cursor-pointer ${
                  selectedTab === "completedapplication"
                    ? "border-b-2 border-purple-700"
                    : ""
                }`}
                onClick={() => handleTabClick("completedapplication")}
              >
                Completed Application
              </p>
              <p
                className={`text-sm h-full flex items-center justify-center cursor-pointer ${
                  selectedTab === "documents"
                    ? "border-b-2 border-purple-700"
                    : ""
                }`}
                onClick={() => handleTabClick("documents")}
              >
                Documents
              </p>
              <p
                className={`text-sm h-full flex items-center justify-center cursor-pointer ${
                  selectedTab === "personalinformation"
                    ? "border-b-2 border-purple-700"
                    : ""
                }`}
                onClick={() => handleTabClick("personalinformation")}
              >
                Personal Information
              </p>
            </div>

            {/* Selected Programs */}
            <div className="">
              {selectedTab === "selectedprograms" && (
                <SelectedPrograms
                  applications={applications}
                  student={student}
                />
              )}
              {selectedTab === "activeapplication" && (
                <ActiveApplications
                  applications={applications}
                  student={student}
                />
              )}
              {selectedTab === "completedapplication" && (
                <CompletedApplications
                  applications={applications}
                  student={student}
                />
              )}
              {selectedTab === "documents" && (
                <Documents applications={applications} student={student} />
              )}
              {selectedTab === "personalinformation" && (
                <PersonalInformation
                  applications={applications}
                  student={student}
                />
              )}
            </div>
          </div>
        </>
      )}
      {/* Header */}
    </div>
  );
};

export default StudentDetails;
