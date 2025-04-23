import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { AiOutlineCloudUpload } from "react-icons/ai";

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import plane_icon from "../../assets/icon/plane_icon.png";

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
    padding: "15px",
    borderRadius: "12px",
  },
};

const CreateSchool = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const successButton = () => setShowSuccess(true);

  return (
    <div className="inter">
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
            navigate("/schools");
          }}
          className="h-[63px] flex items-center justify-center w-[44px] rounded-md bg-white"
        >
          <IoIosArrowBack />
        </div>
        <h5 className="h-[63px] flex items-center py-[20px] px-[25px] text-black rounded-md bg-white text-base font-semibold inter w-full">
          Create School
        </h5>
      </div>

      <div className="relative mt-4 w-full p-4 overflow-x-auto bg-white h-123 rounded-lg">
        <div className="w-[631px]">
          <div className="flex gap-3 w-full">
            <div className=" w-full">
              <label className="text-sm" htmlFor="name">
                Name of School
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter school name here"
                className="mt-0.5 w-full text-sm block px-[12px] py-[8px] border border-gray-200 rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-3 w-full mt-5">
            <div className=" w-full">
              <label className="text-sm" htmlFor="country">
                Country
              </label>
              <div className="relative w-full">
                <select
                  name="country"
                  className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                  id="country"
                >
                  <option value="Select">Select</option>
                </select>
                <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
              </div>
            </div>
            <div className=" w-full">
              <label className="text-sm" htmlFor="state">
                State/Province
              </label>
              <div className="relative w-full">
                <select
                  name="state"
                  className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                  id="state"
                >
                  <option value="Select">Select</option>
                </select>
                <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
              </div>
            </div>
          </div>

          <div className="w-full mt-5">
            <label className="text-sm" htmlFor="web">
              Website
            </label>
            <input
              type="web"
              name="web"
              id="web"
              placeholder="Website"
              className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm" htmlFor="file">
              School Logo
            </label>
            <div className="mt-1 border-1 border-dashed w-[338px] h-[152px] rounded-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold text-2xl">
                    <AiOutlineCloudUpload />
                  </p>
                  <p className="text-sm">
                    Choose a file or drag & drop it here.
                  </p>
                  <p className="text-xs text-gray-400">
                    JPG, PNG, PDF, formats up to 5 MB.
                  </p>
                </div>
              </div>
              <input type="file" name="upload-image" className="w-0 h-0" />
            </div>
          </div>
          <button
            type="button"
            onClick={successButton}
            className="mt-4 bg-purple-900 text-white text-sm rounded-md py-1 px-2"
          >
            Create School
          </button>
        </div>
      </div>
      {showSuccess && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-100 inter h-auto relative rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <img src={plane_icon} alt="icon" />
              <div className="">
                <p className="text-sm">Student Created</p>
                <p className="text-sm text-gray-500">
                  You have successfully created a school
                </p>
              </div>
            </div>
            <div className="mt-4 p-[12px] justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
              >
                Go to All Schools
              </button>
              <button
                className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => setShowSuccess(false)}
              >
                Continue to Create Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateSchool;
