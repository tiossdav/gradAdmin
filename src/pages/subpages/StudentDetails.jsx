import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  SelectedPrograms,
  Documents,
  PersonalInformation,
  ActiveApplications,
  CompletedApplications,
} from "../index";

import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import redinfo from "../../assets/icon/redinfo.jpg";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import notification_icon from "../../assets/icon/notification_icon.png";

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
  const [selectedTab, setSelectedTab] = useState("selectedprograms"); // Default tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab); // Highlight the selected tab
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
          Samuel Oboh
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
              selectedTab === "documents" ? "border-b-2 border-purple-700" : ""
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
          {selectedTab === "selectedprograms" && <SelectedPrograms />}
          {selectedTab === "activeapplication" && <ActiveApplications />}
          {selectedTab === "completedapplication" && <CompletedApplications />}
          {selectedTab === "documents" && <Documents />}
          {selectedTab === "personalinformation" && <PersonalInformation />}
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
