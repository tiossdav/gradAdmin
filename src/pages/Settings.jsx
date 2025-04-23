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

const Settings = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(false);
  const [appFeeCommission, setAppFeeCommission] = useState(false);
  const [tuitionCommision, setTuitionCommision] = useState(false);

  const handleExchangeRate = () => setExchangeRate(true);
  const handleApplicationFee = () => setAppFeeCommission(true);
  const handleTuitionCommision = () => setTuitionCommision(true);

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
          <h5 className="text-black text-xl font-semibold inter">Settings</h5>
        </div>
      </div>

      <div className="w-full bg-white mt-4 rounded-md p-4">
        {/* Student List */}
        <div className="relative mt-4 overflow-x-auto border border-gray-200 bg-white rounded-lg">
          <table className="table-auto w-full inter bg-white">
            <thead className="bg-gray-100 border-gray-100">
              <tr>
                <th className="w-1/3 p-4 text-xs font-semibold tracking-wide text-left ">
                  Item
                </th>
                <th className="w-1/3 p-4 text-xs font-semibold tracking-wide text-left">
                  Rate/Percentage
                </th>

                <th className="w-1/20 p-4 text-xs font-semibold tracking-wide text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                <td className="p-5 text-sm text-gray-900 align-top">
                  <span>Exchange Rate</span>
                </td>
                <td className="p-5 text-sm text-gray-900 align-top">
                  <span>N1650/Canadian Dollar</span>
                </td>

                <td className="p-5 text-center text-sm  align-top">
                  <FiEdit2
                    className="inline-block"
                    size={16}
                    onClick={handleExchangeRate}
                  />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                <td className="p-5 text-sm text-gray-900 align-top">
                  <span>Application Fee Commission</span>
                </td>
                <td className="p-5 text-sm text-gray-900 align-top">
                  <span>5%</span>
                </td>

                <td className="p-5 text-center text-sm  align-top">
                  <FiEdit2
                    className="inline-block"
                    size={16}
                    onClick={handleApplicationFee}
                  />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                <td className="p-5 text-sm text-gray-900 align-top">
                  <span>Tuition Commision</span>
                </td>
                <td className="p-5 text-sm text-gray-900 align-top">
                  <span>5%</span>
                </td>

                <td className="p-5 text-center text-sm  align-top">
                  <FiEdit2
                    className="inline-block"
                    size={16}
                    onClick={handleTuitionCommision}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {exchangeRate && (
          <div style={modalStyles.overlay}>
            <div
              className="w-137 inter relative text-sm"
              style={modalStyles.modal}
            >
              <p className="text-xl  font-semibold">
                Naira to CAD Exchange Rate
              </p>
              <div className="w-full">
                <div className=" w-full mt-5">
                  <label htmlFor="">Rate</label>
                  <input
                    type="text"
                    placeholder="Rate"
                    className="mt-0.5 w-full text-sm block px-[12px] py-[8px] border border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-5 p-3 border-t flex gap-3 justify-end border-gray-200">
                <button
                  type="button"
                  onClick={() => setExchangeRate(false)}
                  className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        {appFeeCommission && (
          <div style={modalStyles.overlay}>
            <div
              className="w-137 inter relative text-sm"
              style={modalStyles.modal}
            >
              <p className="text-xl  font-semibold">
                Application Fee Commission
              </p>
              <div className="w-full">
                <div className=" w-full mt-5">
                  <label htmlFor="">Percentage Amount</label>
                  <input
                    type="text"
                    placeholder="Percentage amount"
                    className="mt-0.5 w-full text-sm block px-[12px] py-[8px] border border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-5 p-3 border-t flex gap-3 justify-end border-gray-200">
                <button
                  type="button"
                  onClick={() => setAppFeeCommission(false)}
                  className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                  type="button"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        {tuitionCommision && (
          <div style={modalStyles.overlay}>
            <div
              className="w-137 inter relative text-sm"
              style={modalStyles.modal}
            >
              <p className="text-xl  font-semibold">Tuition Commission</p>
              <div className="w-full">
                <div className=" w-full mt-5">
                  <label htmlFor="">Percentage Amount</label>
                  <input
                    type="text"
                    placeholder="Percentage amount"
                    className="mt-0.5 w-full text-sm block px-[12px] py-[8px] border border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-5 p-3 border-t flex gap-3 justify-end border-gray-200">
                <button
                  type="button"
                  onClick={() => setTuitionCommision(false)}
                  className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                  type="button"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
