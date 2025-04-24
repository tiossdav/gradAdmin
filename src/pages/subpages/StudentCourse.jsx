import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";

import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import plane_icon from "../../assets/icon/plane_icon.png";
import notification_icon from "../../assets/icon/notification_icon.png";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import rgu_logo from "../../assets/logo/rgu_logo.png";
import AgentStudents from "./AgentStudents";
import AgentCommission from "./AgentCommission";
import AgentWithdrawalHistory from "./AgentWithdrawalHistory";
import RequiredDocs from "./RequiredDocs";
import SentDocs from "./SentDocs";
import AppFeeds from "./AppFeeds";

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

const StudentCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addStudent, setAddStudent] = useState(false);
  const [selectedTab, setSelectedTab] = useState("required_doc"); // Default tab

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
          //   onClick={() => {
          //     navigate("/students");
          //   }}
          className="h-[63px] flex items-center justify-center w-[44px] rounded-md bg-white"
        >
          <IoIosArrowBack />
        </div>
        <h5 className="h-[63px] flex items-center py-[20px] px-[25px] text-black rounded-md bg-white text-xl font-semibold inter w-full">
          Adams John
        </h5>
      </div>

      {/* BSc. Econs */}
      <div className="bg-white mt-3 p-3 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h4>BSc. Economics</h4>
            <div className="flex items-center gap-1 mt-1">
              <img src={rgu_logo} alt="rgu logo" />
              <p className="text-xs text-gray-800">
                RGU Abardeen University, Canada
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p
              style={{ backgroundColor: "#FFF6ED", color: "#E16C00" }}
              className="text-xs px-3 py-2  rounded-xl"
            >
              Incomplete Documents
            </p>

            <button
              className="bg-purple-900 text-white flex items-center gap-2 py-[8px] px-[16px] rounded-lg"
              type="button"
            >
              <LuSettings2 />
              Update Status
            </button>
          </div>
        </div>
        <div className="flex items-center gap-20 mt-3">
          <div className="box w-90">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-900">Years:</p>
              <span className="text-xs ">4</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-900">Intake/Requirements:</p>
              <span className="text-xs ">May, Sep 2023 &gt; 65%</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-900">Country:</p>
              <span className="text-xs ">Canada</span>
            </div>
          </div>
          <div className="box w-90">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-900">Application Fee(CAD):</p>
              <span className="text-xs ">
                $90 <span className="text-green-600">(paid)</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-900">Tuition Deposit:</p>
              <span className="text-xs ">$1,500.00</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-900">Tuition Per Year:</p>
              <span className="text-xs ">$15,000.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Button */}
      <div className="bg-white mt-4 p-3 px-5">
        <div className="gap-6 flex items-center w-full text-gray-600 bg-white rounded-lg">
          <p
            className={`text-sm h-full flex items-center justify-center cursor-pointer py-4 ${
              selectedTab === "required_doc"
                ? "border-b-2 border-purple-700 text-purple-900"
                : ""
            }`}
            onClick={() => handleTabClick("required_doc")}
          >
            Required Document
          </p>
          <p
            className={`text-sm h-full flex items-center justify-center cursor-pointer py-4 ${
              selectedTab === "sent_doc"
                ? "border-b-2 border-purple-700 text-purple-900"
                : ""
            }`}
            onClick={() => handleTabClick("sent_doc")}
          >
            Sent Documents
          </p>
          <p
            className={`text-sm h-full flex items-center justify-center cursor-pointer py-4 ${
              selectedTab === "app_feeds"
                ? "border-b-2 border-purple-700 text-purple-900"
                : ""
            }`}
            onClick={() => handleTabClick("app_feeds")}
          >
            Application Feedback
          </p>
        </div>

        <div className="w-full">
          {selectedTab === "required_doc" && <RequiredDocs />}
          {selectedTab === "sent_doc" && <SentDocs />}
          {selectedTab === "app_feeds" && <AppFeeds />}
        </div>
      </div>
    </>
  );
};

export default StudentCourse;
