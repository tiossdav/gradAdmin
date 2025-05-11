import React, { useRef, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

import { AiFillExclamationCircle } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // or any theme you like

import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import Loader from "../components/Loader";
import notification_icon from "../assets/icon/notification_icon.png";
import { createStudent, fetchStudents } from "../api";

// Simple inline styles for the modal
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

const Students = () => {
  const { id } = useParams();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [degree, setDegree] = useState("");

  const [loading, setLoading] = useState(true);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleClick = (id) => {
    navigate(`/students/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_prefix: phonePrefix,
      phone_number: phone,
      nationality,
      degree,
      dob,
    };

    try {
      const response = await createStudent(data);
      setShowSuccess(true);
    } catch (err) {
      if (err.response && err.response.status === 406) {
        alert("A Student with this name already exists.");
      }
      console.error("Submission failed", err);
    }
    setIsModalOpen(false); // Close the modal
    setShowSuccess(true);
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

  const getStudents = async () => {
    setLoading(true);

    try {
      const response = await fetchStudents();
      if (response?.status === "ok") {
        console.log(response);
        setStudents(response.data); // adjust path based on real data
      }
    } catch (error) {
      console.error("failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
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

      {/* Header */}
      <div className=" flex  items-center justify-between inter bg-white px-4 py-3 shadow mt-4 rounded-md">
        <div className="flex items-cente">
          <h5 className="text-black text-xl font-semibold inter"> Students</h5>
        </div>
        <button
          type="button"
          onClick={handleOpenModal}
          className="active:scale-95 transition transform duration-200 ease-in-out flex items-center gap-3 text-sm text-white px-5 py-[10px] bg-green-500 rounded-md"
        >
          <FaPlus className="text-white" />
          Add Student
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 w-full px-4 bg-white mt-4 rounded-md">
        <div className="relative w-full  h-[80px]  flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="text-sm  border-1 border-gray-200 w-full p-[7.5px] pl-[38px] py-[10px] rounded-lg outline-none focus:border-purple-400  "
            placeholder="Search by student name"
          />
          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={21}
            strokeWidth={1}
          />
        </div>
        <button
          type="button"
          className="active:scale-95 transition transform duration-200 ease-in-out text-sm text-white px-12 py-[10px] bg-purple-900 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Student List */}
      <div className="relative mt-4 overflow-x-auto bg-white h-123 rounded-lg">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-200 border-gray-200">
            <tr>
              <th className="p-3 text-xs font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                Selected Programs
              </th>
              <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                Active Application
              </th>
              <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                Offers Granted
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {loading ? (
              <Loader loading={loading} />
            ) : (
              <>
                {students &&
                  students.map((student, index) => (
                    <tr
                      key={index}
                      onClick={() => {
                        handleClick(student.user_id);
                      }}
                      className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default"
                    >
                      <td className="p-3 text-sm text-gray-900">
                        <span>
                          {student.first_name} {student.last_name}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-900">
                        <span>{student.total_program}</span>
                      </td>
                      <td className="p-3 text-sm text-gray-900">
                        <span>{student.total_active}</span>
                      </td>
                      <td className="p-3 text-sm text-gray-900">
                        <span>{student.total_offer}</span>
                      </td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
        <div class="flex justify-between items-center p-4  text-sm text-gray-600 w-full">
          <button class="px-3 py-1 border w-21 border-gray-300 rounded hover:bg-gray-100 text-gray-800">
            Previous
          </button>
          <span className="text-gray-800">Page 1 of 10</span>
          <button class="px-3 py-1 border w-21 border-gray-300 rounded hover:bg-gray-100 text-gray-800">
            Next
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div style={modalStyles.overlay}>
          <div className="w-150 inter h-127 relative" style={modalStyles.modal}>
            <p className="text-xl  font-semibold">Add Student</p>
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <div className="flex gap-3 mt-4 w-full">
                  <div className=" w-full">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      className="mt-0.5 w-full text-sm block px-[12px] py-[8px] border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div className=" w-full">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-0.5 block w-full px-[12px] py-[8px] border border-gray-200 text-sm rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex gap-3 w-full mt-4">
                  <div className=" w-full">
                    <label htmlFor="nationality">Nationality</label>
                    <div className="relative w-full">
                      <select
                        name="nationality"
                        className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        id="nationality"
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                      >
                        <option value="Nationality">Nationality</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Canada">Canada</option>
                        <option value="USA">USA</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                      </select>
                      <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="mt-0.5 flex w-full rounded-lg overflow-hidden border border-gray-200">
                      <input
                        type="text"
                        name="prefix"
                        id="prefix"
                        placeholder="234"
                        value={phonePrefix}
                        onChange={(e) => setPhonePrefix(e.target.value)}
                        className="w-16 text-sm px-3 py-[8px] bg-gray-100 border-r border-gray-200 text-center"
                      />
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="8090909090"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 text-sm px-3 py-[8px] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
                  />
                </div>
                <div className="flex gap-3 w-full mt-4">
                  <div className=" w-full">
                    <label htmlFor="degree">Highest Qualification </label>
                    <input
                      type="text"
                      name="Degree"
                      id="Degree"
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div className=" w-full">
                    <label htmlFor="customDate">Date of Birth</label>
                    <input
                      ref={inputRef}
                      id="date"
                      placeholder="Select"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1 flex gap-1 items-center">
                      <AiFillExclamationCircle className="inline" />
                      Member must be 14 years of age and above
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-3 mt-7 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="active:scale-95 transition transform duration-200 ease-in-out text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="active:scale-95 transition transform duration-200 ease-in-out bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                  type="submit"
                >
                  Create Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* {showSuccess && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-100 inter h-44 relative rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <img src={plane_icon} alt="icon" />
              <div className="">
                <p className="text-sm">Student Created</p>
                <p className="text-sm text-gray-500">
                  You have successfully created a new student account
                </p>
              </div>
            </div>
            <div className="py-5 mt-5 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
              >
                Close
              </button>
              <button
                className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => setShowSuccess(false)}
              >
                Ok, Continue to Student Account
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Students;
