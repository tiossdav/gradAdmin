import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";

import { CiSearch } from "react-icons/ci";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";

const PersonalInformation = ({ applications, student }) => {
  const [isPersonaOpen, setIsPersonaOpen] = useState(false);
  const [isEmergentOpen, setIsEmergentOpen] = useState(false);
  const handlePersonaEdit = () => setIsPersonaOpen(true);
  const handleEmergencyEdit = () => setIsEmergentOpen(true);

  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      background: "#fff",
      padding: "20px",
    },
  };
  console.log(student);
  console.log(applications);
  return (
    <div className="mt-4 w-full">
      {student && (
        <div className="grid grid-cols-2 gap-4">
          <div className=" w-full">
            <div className="flex items-center justify-between mb-4 px-1">
              <h6>Personal Information</h6>
              <div
                onClick={handlePersonaEdit}
                className="flex gap-3 items-center text-xs text-gray-500"
              >
                <CiEdit />
                Edit
              </div>
            </div>
            <div className="border border-gray-200 p-4 rounded-md">
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">First Name</p>
                <p className="text-gray-900 text-sm">{student?.first_name}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Last Name</p>
                <p className="text-gray-900 text-sm">{student?.last_name}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Date of Birth</p>
                <p className="text-gray-900 text-sm">{student?.dob}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Phone Number</p>
                <p className="text-gray-900 text-sm">{student.phone_number}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Country</p>
                <p className="text-gray-900 text-sm">{student?.nationality}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Email Address</p>
                <p className="text-gray-900 text-sm">{student?.email}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Highest Qualification</p>
                <p className="text-gray-900 text-sm">{student?.degree}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Address</p>
                <p className="text-gray-900 text-sm">{student?.address}</p>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className="flex items-center justify-between mb-4 px-1">
              <h6>Emergency Contact</h6>
              <div
                onClick={handleEmergencyEdit}
                className="flex gap-3 items-center text-xs text-gray-500"
              >
                <CiEdit />
                Edit
              </div>
            </div>
            <div className="border border-gray-200 p-4 rounded-md">
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">First Name</p>
                <p className="text-gray-900 text-sm">Samuel</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Last Name</p>
                <p className="text-gray-900 text-sm">Oboh</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Relationship</p>
                <p className="text-gray-900 text-sm">Sister</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Phone Number</p>
                <p className="text-gray-900 text-sm">+2348044838394</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Email Address</p>
                <p className="text-gray-900 text-sm">samueloboh@gmail.com</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Country</p>
                <p className="text-gray-900 text-sm">Nigeria</p>
              </div>

              <div className="flex justify-between items-center py-3">
                <p className="text-gray-500 text-sm">Address</p>
                <p className="text-gray-900 text-sm">
                  10 ologolo street, Lekki, Lagos
                </p>
              </div>
            </div>
          </div>
          {isPersonaOpen && (
            <div style={modalStyles.overlay} className="flex flex-col">
              <div
                style={modalStyles.modal}
                className="w-132 inter h-99 text-sm relative rounded-2xl rounded-b-none"
              >
                <h6 className=" mt-1 font-semibold">
                  Edit Personal Information
                </h6>
                <form className="mt-5">
                  <div className="w-full">
                    <div className="flex gap-3 w-full">
                      <div className=" w-full">
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
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
                          placeholder="Last name"
                          className="mt-0.5 block w-full px-[12px] py-[8px] border border-gray-200 text-sm rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 w-full mt-5">
                      <div className=" w-full">
                        <label htmlFor="nationality">Nationality</label>
                        <div className="relative w-full">
                          <select
                            name="nationality"
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
                          placeholder="Phone Number"
                          className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 w-full mt-5">
                      <div className=" w-full">
                        <label htmlFor="qualification">
                          Highest Qualification
                        </label>
                        <div className="relative w-full">
                          <select
                            name="qualification"
                            className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                            id="qualification"
                          >
                            <option value="Nationality">Select</option>
                          </select>
                          <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                        </div>
                      </div>
                      <div className=" w-full">
                        <label htmlFor="customDate">Date of Birth</label>
                        <input
                          id="date"
                          placeholder="Select"
                          className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-5">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="p-5 w-132 inter h-17 text-sm relative rounded-b-2xl justify-end border-t-2 border-gray-200 bg-white flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPersonaOpen(false)}
                  className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                  type="submit"
                  onClick={() => setIsPersonaOpen(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {isEmergentOpen && (
            <div style={modalStyles.overlay} className="flex flex-col">
              <div
                style={modalStyles.modal}
                className="w-132 inter h-99 text-sm relative rounded-2xl rounded-b-none"
              >
                <h6 className=" mt-1 font-semibold">Edit Emergency Contact</h6>
                <form className="mt-5">
                  <div className="w-full">
                    <div className="flex gap-3 w-full">
                      <div className=" w-full">
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
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
                          placeholder="Last name"
                          className="mt-0.5 block w-full px-[12px] py-[8px] border border-gray-200 text-sm rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 w-full mt-5">
                      <div className=" w-full">
                        <label htmlFor="relationship">Relationship</label>
                        <div className="relative w-full">
                          <select
                            name="relationship"
                            className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                            id="relationship"
                          >
                            <option value="Relationship">Relationship</option>
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
                          placeholder="Phone Number"
                          className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="w-full mt-5">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="w-full mt-5">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="p-5 w-132 inter h-17 text-sm relative rounded-b-2xl justify-end border-t-2 border-gray-200 bg-white flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsEmergentOpen(false)}
                  className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                  type="submit"
                  onClick={() => setIsEmergentOpen(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonalInformation;
