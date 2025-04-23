import React, { useRef, useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

import { IoIosCheckmark } from "react-icons/io";
import redinfo from "../assets/icon/redinfo.jpg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

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
  fresh: {
    background: "#fff",
    borderRadius: "12px",
  },
};

const Messages = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [createRequirement, setCreateRequirement] = useState(false);
  const [updateRequirement, setUpdateRequirement] = useState(false);
  const [deleteRequirement, setDeleteRequirement] = useState(false);

  const handleCreateRequirement = () => setCreateRequirement(true);
  const handleUpdateRequirement = () => setUpdateRequirement(true);
  const handleDeleteRequirement = () => setDeleteRequirement(true);

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
          <h5 className="text-black text-xl font-semibold inter">Messages</h5>
        </div>
      </div>

      <div className="w-full bg-white mt-4 rounded-md p-4">
        <div className="flex items-center justify-between">
          <div className="relative flex items-center">
            <input
              type="text"
              name="search"
              id="search"
              className="text-sm  border-1 border-gray-200 w-[307px] p-[7.5px] pl-[38px] py-[8px] rounded-lg outline-none focus:border-purple-400  "
              placeholder="Search messages"
            />
            <CiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={21}
              strokeWidth={1}
            />
          </div>
          <button
            type="button"
            className="flex items-center text-sm text-white py-[8px] px-[16px] gap-2 bg-purple-800 rounded-md"
          >
            Search
          </button>
        </div>

        {/* Messages */}
        <div className="mt-4">
          <div className="flex flex-col justify-between items-center bg-white border-1 border-gray-300 rounded-lg ">
            <div className="flex justify-between items-center px-1 w-full border-b border-gray-200 bg-gray-100 rounded-t-lg">
              <p className="text-sm text-gray-700 px-4 pt-3 pb-3">
                Recent Messages
              </p>
              <a href="#" className="text-sm px-4 pt-4 pb-3 text-purple-700">
                All Messages
              </a>
            </div>

            <div className="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div className="font-semibold px-4">Support</div>
              <p className="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div className="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div className="text-xs text-gray-400 mt-2">
                  23.03.2024 05:49AM
                </div>
                <div className="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div className="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div className="font-semibold px-4">Support</div>
              <p className="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div className="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div className="text-xs text-gray-400 mt-2">
                  23.03.2024 05:49AM
                </div>
                <div className="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div className="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div className="font-semibold px-4">Support</div>
              <p className="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div className="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div className="text-xs text-gray-400 mt-2">
                  23.03.2024 05:49AM
                </div>
                <div className="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div className="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div className="font-semibold px-4">Support</div>
              <p className="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div className="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div className="text-xs text-gray-400 mt-2">
                  23.03.2024 05:49AM
                </div>
                <div className="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div className="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div className="font-semibold px-4">Support</div>
              <p className="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div className="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div className="text-xs text-gray-400 mt-2">
                  23.03.2024 05:49AM
                </div>
                <div className="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {createRequirement && (
          <div style={modalStyles.overlay}>
            <div
              className="w-137 inter h-auto relative text-sm"
              style={modalStyles.modal}
            >
              <p className="text-xl  font-semibold">Create Requirement</p>
              <div className="w-full">
                <div className=" w-full mt-5">
                  <label htmlFor="">Document Title</label>
                  <input
                    type="text"
                    placeholder="Document Title"
                    className="mt-0.5 w-full text-sm block px-[12px] py-[8px] outline-none border border-gray-200 rounded-lg"
                  />
                </div>
                <div className=" w-full mt-4">
                  <label htmlFor="">
                    Brief Description
                    <span className="text-gray-500">
                      (Maximum of 200 characters)
                    </span>
                  </label>
                  <textarea
                    name=""
                    className="mt-0.5 block w-full h-[118px] px-[12px] py-[8px] resize-none outline-none border border-gray-200 text-sm rounded-lg"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>

              <div className="mt-5 p-3 border-t flex gap-3 justify-end border-gray-200">
                <button
                  type="button"
                  onClick={() => setCreateRequirement(false)}
                  className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                  type="submit"
                >
                  Create User
                </button>
              </div>
            </div>
          </div>
        )}

        {updateRequirement && (
          <div style={modalStyles.overlay}>
            <div
              className="w-137 inter h-auto relative text-sm"
              style={modalStyles.modal}
            >
              <p className="text-xl  font-semibold">Create Requirement</p>
              <div className="w-full">
                <div className=" w-full mt-5">
                  <label htmlFor="">Document Title</label>
                  <input
                    type="text"
                    placeholder="Document Title"
                    className="mt-0.5 w-full text-sm block px-[12px] py-[8px] outline-none border border-gray-200 rounded-lg"
                  />
                </div>
                <div className=" w-full mt-4">
                  <label htmlFor="">
                    Brief Description
                    <span className="text-gray-500">
                      (Maximum of 200 characters)
                    </span>
                  </label>
                  <textarea
                    name=""
                    className="mt-0.5 block w-full h-[118px] px-[12px] py-[8px] resize-none outline-none border border-gray-200 text-sm rounded-lg"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>

              <div className="mt-5 p-3 border-t flex gap-3 justify-end border-gray-200">
                <button
                  type="button"
                  onClick={() => setUpdateRequirement(false)}
                  className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                  type="submit"
                >
                  Create User
                </button>
              </div>
            </div>
          </div>
        )}

        {deleteRequirement && (
          <div style={modalStyles.overlay}>
            <div
              style={modalStyles.fresh}
              className=" inter relative p-0 rounded-2xl"
            >
              <div className="flex items-center gap-3 p-3">
                <img src={redinfo} alt="icon" />
                <div className="">
                  <p className="text-sm">Delete Requirement?</p>
                  <p className="text-sm whitespace-nowrap text-gray-500">
                    All courses with this requirement will be affected.
                  </p>
                </div>
              </div>
              <div className="justify-end border-t p-3 border-gray-200 w-full flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteRequirement(false)}
                  className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                  type="submit"
                  onClick={() => setDeleteRequirement(false)}
                >
                  Yes, Delete Requirement
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
