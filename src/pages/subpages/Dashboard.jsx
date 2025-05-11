import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";

import { RiFilterOffLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";

import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // or any theme you like

import { IoIosCheckmark } from "react-icons/io";
import notification_icon from "../../assets/icon/notification_icon.png";
import application_icon from "../../assets/icon/application_icon.png";
import school_icon from "../../assets/icon/school_icon.png";
import student_icon from "../../assets/icon/student_icon.png";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import { fetchDashboardStats, fetchApplications } from "../../api";
import { useNavigate } from "react-router-dom";
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

const mapStatus = (status) => {
  switch (status) {
    case 0:
      return "Incomplete Documents";
    case 1:
      return "Processing Application";
    case 2:
      return "Approved";
    default:
      return "Unknown";
  }
};

const Dashboard = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [openFilter, setOpenFilter] = useState(false);
  const handleFilter = () => setOpenFilter(true);

  const appStatus = (status) => {
    switch (status) {
      case 0:
        return {
          label: "Approved",
          style: {
            backgroundColor: "#DCFCE7",
            color: "#166534",
          },
        };
      case 1:
        return {
          label: "Incomplete Documents",
          style: {
            backgroundColor: "#FEF3C7",
            color: "#92400E",
          },
        };
      case 2:
        return {
          label: "Processing Application",
          style: {
            backgroundColor: "#DBEAFE",
            color: "#1E3A8A",
          },
        };
      case 3:
        return {
          label: "Denied",
          style: {
            backgroundColor: "#FEE2E2",
            color: "#991B1B",
          },
        };
      default:
        return {
          label: "Pending upload",
          style: {
            backgroundColor: "#F3F4F6",
            color: "#4B5563",
          },
        };
    }
  };

  useEffect(() => {
    if (!inputRef.current) return;
    const fp = flatpickr(inputRef.current, {
      dateFormat: "Y-m-d",
      altInput: true,
      altFormat: "F j, Y",
      allowInput: true,
      onChange: ([selectedDate]) => {
        if (selectedDate && selectedDate.length > 0) {
          setDate(selectedDate[0]);
        }
      },
    });

    return () => {
      fp.destroy(); // Clean up
    };
  }, []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const data = await fetchDashboardStats();
        console.log("Dashboard Data:", data);
        if (data.status === "ok") {
          setStats(data.data);
        }
      } catch (error) {
        console.error("Failed to load dashboard stats", error);
      }
    };
    getStats();
  }, []);

  const loadApplications = async () => {
    setLoading(true);
    try {
      const response = await fetchApplications(); // create this in your api file
      if (response?.status === "ok") {
        setApplications(response.data); // adjust path based on real data
      }
    } catch (error) {
      console.error("Failed to fetch applications", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const handleViewApplication = (applicationId) => {
    console.log("View application with ID:", applicationId);
    // You can navigate somewhere or fetch more details here
    navigate(`/dashboard/${applicationId}`);
  };

  return (
    <>
      <Loader loading={loading} />

      {!loading && applications.length > 0 && (
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
          {stats && (
            <div className="p-4 shadow bg-white rounded-md mt-4">
              <div className="grid gap-3 grid-cols-3">
                <div className="flex items-center gap-4 bg-purple-900 h-[104px] pl-4 rounded-lg">
                  <img
                    src={student_icon}
                    className="w-[48px] h-[48px]"
                    alt="student_icon"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm inter text-white">Students</p>
                    <p className="text-2xl inter text-white font-semibold">
                      {stats.total_student}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-purple-900 h-[104px]  pl-4 rounded-lg">
                  <img
                    src={school_icon}
                    className="w-[48px] h-[48px]"
                    alt="school_icon"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm inter text-white">Schools</p>
                    <p className="text-2xl inter text-white font-semibold">
                      {stats.total_school}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-purple-900 h-[104px] pl-4 rounded-lg">
                  <img
                    src={application_icon}
                    className="w-[48px] h-[48px]"
                    alt="application_icon"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm inter text-white">Applications</p>
                    <p className="text-2xl inter text-white font-semibold">
                      {stats.total_appt}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-base inter font-semibold">
                Applications
              </div>

              {/* Search Button */}
              <div className="mt-4 gap-2 flex items-center justify-between  w-full">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-sm border-1 border-gray-200 p-[7.5px] pl-[38px] py-[8px] rounded-lg w-[515px] outline-none focus:border-purple-400  "
                      placeholder="Search by student name, course, school"
                    />
                    <CiSearch
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={21}
                      strokeWidth={1}
                    />
                  </div>

                  <button
                    type="button"
                    className="active:scale-95 transition transform duration-200 ease-in-out text-sm text-white px-16 py-[8px] bg-purple-900 rounded-md"
                  >
                    Search
                  </button>
                </div>
                <div className="relative text-purple-800">
                  <button
                    type="button"
                    onClick={handleFilter}
                    className="active:scale-95 transition transform duration-200 ease-in-out px-[16px] py-[8px] border border-purple-500 rounded-md flex items-center justify-center gap-2 text-sm"
                  >
                    Filters
                    <RiFilterOffLine className="" />
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="mt-4 overflow-x-auto rounded-lg shadow relative">
                <table className="table-auto w-full min-w-[900px]">
                  <thead className="bg-gray-100 border-gray-200">
                    <tr>
                      <th className="w-38 p-3 text-xs font-semibold tracking-wide text-left">
                        Student
                      </th>
                      <th className="w-80 p-3 text-xs font-semibold tracking-wide text-left">
                        Course
                      </th>
                      <th className="w-29 p-3 text-xs font-semibold tracking-wide text-left">
                        Intake
                      </th>
                      <th className="w-27 p-3 text-xs font-semibold tracking-wide text-left">
                        Started
                      </th>
                      <th className="w-67 p-3 text-xs font-semibold tracking-wide text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications
                      .filter((app) => {
                        const fullName =
                          `${app.first_name} ${app.last_name}`.toLowerCase();
                        const course = app.course_title?.toLowerCase() || "";
                        const school = app.school_name?.toLowerCase() || "";
                        const query = searchQuery.toLowerCase();
                        return (
                          fullName.includes(query) ||
                          course.includes(query) ||
                          school.includes(query)
                        );
                      })
                      .map((app) => (
                        <tr
                          key={app.application_id}
                          className="border-b border-gray-200"
                        >
                          <td className="p-3 text-sm text-gray-900">
                            <p className="text-sm">
                              {app.first_name} {app.last_name}
                            </p>
                          </td>
                          <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                            <div className="inline-block align-middle">
                              <img
                                src={app?.school_data?.logo}
                                className="h-8 w-8 inline-block mr-2"
                                alt=""
                              />
                              <div className="inline-block align-middle">
                                <p className="text-sm">{app.course_title}</p>
                                <p className="text-xs text-gray-600 capitalize">
                                  {app.school_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-sm text-gray-900">
                            {app.intake_year}
                          </td>
                          <td className="p-3 text-sm text-gray-900">
                            <p>
                              {new Date(app.createdAt).toLocaleDateString()}
                            </p>
                          </td>
                          <td className="p-3 text-sm whitespace-nowrap text-gray-900">
                            <div className="flex items-center justify-between">
                              <span
                                style={appStatus(app?.status).style}
                                className="py-0.5 px-2 rounded-xl"
                              >
                                {appStatus(app?.status).label}
                              </span>
                              <button
                                className="text-purple-500 float-right border border-purple-500 py-1.5 px-4 rounded-lg text-sm hover:bg-purple-50 active:scale-95 transition transform duration-200 ease-in-out"
                                type="button"
                                onClick={() =>
                                  handleViewApplication(app.application_id)
                                }
                              >
                                View
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {openFilter && (
            <div style={modalStyles.overlay}>
              <div
                className="w-[286px] inter relative"
                style={modalStyles.modal}
              >
                <div className="flex flex-col gap-1">
                  <label className="text-sm uppercase font-semibold" htmlFor="">
                    Location
                  </label>
                  <div className="flex flex-col gap-2">
                    <div className="relative w-full">
                      <select
                        name=""
                        className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        id=""
                      >
                        <option value="">Country</option>
                      </select>
                      <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                    </div>
                    <div className="relative w-full">
                      <select
                        name=""
                        className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        id="nationality"
                      >
                        <option value="">State</option>
                      </select>
                      <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                    </div>
                  </div>
                </div>

                <hr className="my-4 text-gray-200" />

                <div className=" w-full">
                  <label className="text-sm font-semibold" htmlFor="">
                    FEES
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="$37,000"
                      className="mt-0.5 w-full text-sm block px-[12px] py-[8px] border border-gray-200 rounded-lg"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="$87,000"
                      className="mt-0.5 block w-full px-[12px] py-[8px] border border-gray-200 text-sm rounded-lg"
                    />
                  </div>
                </div>

                <hr className="my-4 text-gray-200" />

                <div className="w-full">
                  <label
                    className="uppercase text-sm font-semibold"
                    htmlFor="customDate"
                  >
                    Date Applied
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <input
                        ref={inputRef}
                        id="from_date"
                        placeholder="From"
                        className="mt-0.5 block w-full px-[16px] py-[8px] text-sm border border-gray-200 rounded-lg"
                      />
                      <FiCalendar className="absolute top-1/2 right-4 -translate-y-1/2" />
                    </div>
                    <div className="relative">
                      <input
                        ref={inputRef}
                        id="to_date"
                        placeholder="To"
                        className="mt-0.5 block w-full px-[16px] py-[8px] text-sm border border-gray-200 rounded-lg"
                      />
                      <FiCalendar className="absolute top-1/2 right-4 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <hr className="my-4 text-gray-200" />

                <div className=" w-full">
                  <p className="uppercase text-sm text-gray-600">
                    Application Status
                  </p>
                  <div className="mt-2 flex flex-col gap-1.5">
                    <div className="flex justify-between">
                      <p className="text-[14px]">All</p>
                      <input
                        style={{ transform: "scale(1.2)" }}
                        type="radio"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[14px]">Incomplete Documents</p>
                      <input
                        style={{ transform: "scale(1.2)" }}
                        type="radio"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[14px]">Processing</p>
                      <input
                        style={{ transform: "scale(1.2)" }}
                        type="radio"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[14px]">Application Granted</p>
                      <input
                        style={{ transform: "scale(1.2)" }}
                        type="radio"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <button
                    className="active:scale-95 transition transform duration-200 ease-in-out mt-3 bg-purple-900 py-2 px-2 rounded-lg w-full text-white text-[14px]"
                    type="submit"
                    onClick={() => setOpenFilter(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
