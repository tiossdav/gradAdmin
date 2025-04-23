import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import plane_icon from "../../assets/icon/plane_icon.png";
import notification_icon from "../../assets/icon/notification_icon.png";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import AgentStudents from "./AgentStudents";
import AgentCommission from "./AgentCommission";
import AgentWithdrawalHistory from "./AgentWithdrawalHistory";

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

const AgentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addStudent, setAddStudent] = useState(false);
  const [selectedTab, setSelectedTab] = useState("students"); // Default tab

  const openAddStudent = () => setAddStudent(true);

  const handleTabClick = (tab) => {
    setSelectedTab(tab); // Highlight the selected tab
  };

  return (
    <>
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
      <div className="flex items-center bg-gray-50 mt-4 gap-3">
        <div
          onClick={() => {
            navigate("/agents");
          }}
          className="h-[63px] flex items-center justify-center w-[44px] rounded-md bg-white"
        >
          <IoIosArrowBack />
        </div>
        <h5 className="h-[63px] flex items-center py-[20px] px-[25px] text-black rounded-md bg-white text-xl font-semibold inter w-full">
          Agents
        </h5>
      </div>

      {/* Search Button */}
      <div className="mt-4 gap-2 bg-white rounded-md shadow p-5 flex flex-col items-center justify-between  w-full">
        <div className="w-full inter">
          <div className="flex justify-between">
            <div className="flex flex-col items-start">
              <h5 className="text-2xl">James John</h5>
              <p
                className="text-xs px-2.5 rounded-lg align-middle py-0.5"
                style={{ backgroundColor: "#FFF9E7", color: "#E77C40" }}
              >
                Agent (005988493)
              </p>
            </div>
            <div className="">
              <button
                className="flex items-center text-sm gap-3 text-purple-900 border rounded-lg px-4 py-2"
                type="button"
              >
                <CgProfile className="text-base" />
                View Profile
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div
              className="py-4 px-4 border rounded-lg"
              style={{ borderColor: "#582B8D" }}
            >
              <p className="text-sm text-gray-800">Pending Commission</p>
              <p className="text-2xl mt-1">N394,000</p>
            </div>
            <div
              className="py-4 px-4 border rounded-lg"
              style={{ borderColor: "#582B8D" }}
            >
              <p className="text-sm text-gray-800">Withdrawable Balance</p>
              <p className="text-2xl mt-1">N394,874</p>
            </div>
            <div
              className="py-4 px-4 border rounded-lg"
              style={{ borderColor: "#582B8D" }}
            >
              <p className="text-sm text-gray-800">Total Payout</p>
              <p className="text-2xl mt-1">N1,210,084</p>
            </div>
          </div>

          <div className="gap-6 flex items-center w-full text-gray-600 mt-4 border-t border-b border-gray-200 ">
            <p
              className={`text-sm h-full bg-white flex items-center justify-center cursor-pointer py-4 ${
                selectedTab === "students" ? "border-b-2 border-purple-700" : ""
              }`}
              onClick={() => handleTabClick("students")}
            >
              Students
            </p>
            <p
              className={`text-sm h-full flex items-center justify-center cursor-pointer py-4 ${
                selectedTab === "commissions"
                  ? "border-b-2 border-purple-700"
                  : ""
              }`}
              onClick={() => handleTabClick("commissions")}
            >
              Commissions
            </p>
            <p
              className={`text-sm h-full flex items-center justify-center cursor-pointer py-4 ${
                selectedTab === "withdrawal"
                  ? "border-b-2 border-purple-700"
                  : ""
              }`}
              onClick={() => handleTabClick("withdrawal")}
            >
              Withdrawal History
            </p>
          </div>
        </div>

        <div className="w-full">
          {selectedTab === "students" && <AgentStudents />}
          {selectedTab === "commissions" && <AgentCommission />}
          {selectedTab === "withdrawal" && <AgentWithdrawalHistory />}
        </div>
      </div>
    </>
  );
};

export default AgentDetails;
