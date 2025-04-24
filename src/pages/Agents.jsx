import React, { useRef, useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { IoIosCheckmark } from "react-icons/io";
import redinfo from "../assets/icon/redinfo.jpg";

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

import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import plane_icon from "../assets/icon/plane_icon.png";
import notification_icon from "../assets/icon/notification_icon.png";
import student_icon from "../assets/icon/student_icon.png";
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

const Agents = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleAgent = (id) => {
    navigate(`/agents/${id}`);
  };

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
        <div className="flex items-center">
          <h5 className="text-black text-xl inter">Agents</h5>
        </div>
      </div>

      <div className="w-full bg-white mt-4 rounded-md p-4">
        <div className="w-full grid grid-cols-4 gap-4 ">
          <div
            className="flex items-center gap-3 rounded-lg p-4 pl-3 overflow-hidden "
            style={{ backgroundColor: "#266AD5" }}
          >
            <img
              src={student_icon}
              className="w-[48px] h-[48px]"
              alt="student_icon"
            />
            <div className="flex flex-col gap-1 ">
              <p className="text-sm inter text-white">Agents</p>
              <p className="text-xl inter text-white ">505</p>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#266AD5" }}
            className="flex items-center gap-3 rounded-lg p-4 pl-3 overflow-hidden "
          >
            <img
              src={student_icon}
              className="w-[48px] h-[48px]"
              alt="student_icon"
            />
            <div className="flex flex-col gap-1 ">
              <p className="text-sm inter text-white">Pending Commision</p>
              <p className="text-xl inter text-white ">N505,054,0594</p>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#266AD5" }}
            className="flex items-center gap-3 rounded-lg p-4 pl-3 overflow-hidden "
          >
            <img
              src={student_icon}
              className="w-[48px] h-[48px]"
              alt="student_icon"
            />
            <div className="flex flex-col gap-1 ">
              <p className="text-sm inter text-white">Available Balance</p>
              <p className="text-xl inter text-white ">N505,054,0594</p>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#266AD5" }}
            className="flex items-center gap-3 rounded-lg p-4 pl-3 overflow-hidden "
          >
            <img
              src={student_icon}
              className="w-[48px] h-[48px]"
              alt="student_icon"
            />
            <div className="flex flex-col gap-1 ">
              <p className="text-sm inter text-white">Total Payouts</p>
              <p className="text-xl inter text-white ">N505,054,0594</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 items-center">
          <div className="relative ">
            <input
              type="text"
              name="search"
              id="search"
              className="text-sm  border-1 border-gray-200 w-[307px] p-[7.5px] pl-[38px] py-[10px] rounded-lg outline-none focus:border-purple-400  "
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
            style={{ backgroundColor: "#582B8D" }}
            className="flex items-center gap-2 py-[8px] px-[16px] rounded-lg text-sm text-white"
          >
            <FaPlus className="text-sm" />
            Create Agent
          </button>
        </div>

        {/* Student List */}
        <div className="relative mt-4 overflow-x-auto bg-white rounded-xl border border-gray-200">
          <table className="table-auto w-full inter  bg-white">
            <thead className="bg-gray-200 border-gray-200">
              <tr>
                <th className="w-1/5 p-3 text-xs font-semibold tracking-wide text-left ">
                  Name
                </th>
                <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                  Student
                </th>
                <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                  Application
                </th>
                <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-center">
                  Pending Commission
                </th>
                <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-center">
                  Withdrawable Balance
                </th>
                <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-center">
                  Total Payout
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
                <td
                  onClick={handleAgent}
                  className="p-3 text-sm text-gray-900 text-left"
                >
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col gap-2">
                      <div className="text-center underline">Udoh Emmanuel</div>
                      <span
                        style={{ color: "#E77C40", backgroundColor: "#FFF9E7" }}
                        className="text-center rounded-xl"
                      >
                        005988493
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-900 align-middle">
                  <span>10</span>
                </td>
                <td className="p-3 text-sm text-gray-900 align-middle">2</td>
                <td className="p-3 text-center text-sm  align-middle">
                  N200,000
                </td>
                <td className="p-3 text-center text-sm  align-middle">
                  N200,000
                </td>
                <td className="p-3 text-center text-sm  align-middle">
                  N200,000
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
      </div>
    </div>
  );
};

export default Agents;
