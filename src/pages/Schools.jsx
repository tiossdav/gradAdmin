import React, { useRef, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

import fanshawe_logo from "../assets/logo/fanshawe_logo.png";
import { AiFillExclamationCircle } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // or any theme you like

import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import plane_icon from "../assets/icon/plane_icon.png";
import notification_icon from "../assets/icon/notification_icon.png";

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

const Schools = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const createSchool = () => {
    navigate("/schools/create");
  };

  const handleClick = (id) => {
    console.log("School ID:", id);
    navigate(`/schools/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false); // Close the modal
    setShowSuccess(true);
    // You can also send this data to an API here

    // setTimeout(() => setShowSuccess(false), 5000);
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
          onClick={createSchool}
          className="flex items-center gap-3 text-sm text-white px-5 py-[10px] bg-green-500 rounded-md"
        >
          <FaPlus className="text-white" />
          Create School
        </button>
      </div>

      {/* School List */}
      <div className="relative mt-4 overflow-x-auto bg-white rounded-lg">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-200 border-gray-200">
            <tr>
              <th className="p-3 text-xs font-semibold tracking-wide text-left">
                School
              </th>
              <th className="w-45 p-3 text-xs font-semibold tracking-wide text-left">
                Courses
              </th>
              <th className="w-45 p-3 text-xs font-semibold tracking-wide text-left">
                Application
              </th>
              <th className="w-15 p-3 text-xs font-semibold tracking-wide text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              onClick={() => {
                handleClick(1);
              }}
              className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default "
            >
              <td>
                <div className="inline-block p-3 align-middle">
                  <img
                    src={fanshawe_logo}
                    className="h-8 w-8 inline-block mr-2"
                    alt="fanshawe_logo"
                  />
                  <div className="inline-block align-middle">
                    <p className="text-sm">Fanshawe College</p>
                    <p className="text-xs text-gray-600">Ontario, Canada</p>
                  </div>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>34</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span className=" align-middle">34</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div className="align-middle flex justify-between items-center w-full">
                  <RiDeleteBinLine />
                </div>
              </td>
            </tr>
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
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="First name"
                      className="mt-0.5 w-full text-sm block px-[12px] py-[8px] border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div className=" w-full">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Last name"
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
                        value={formData.email}
                        onChange={handleChange}
                        className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        id="nationality"
                      >
                        <option value="Nationality">Nationality</option>
                      </select>
                      <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                    </div>
                  </div>
                  <div className=" w-full">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
                  />
                </div>
                <div className="flex gap-3 w-full mt-4">
                  <div className=" w-full">
                    <label htmlFor="fname">Highest Qualification </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="First name"
                      className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div className=" w-full">
                    <label htmlFor="customDate">Date of Birth</label>
                    <input
                      ref={inputRef}
                      id="date"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Select"
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
                  className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                  type="submit"
                >
                  Create Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
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
      )}
    </div>
  );
};

export default Schools;
