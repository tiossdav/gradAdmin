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

const Access = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [createUser, setCreateUser] = useState(false);
  const [updateAccess, setUpdateAccess] = useState(false);
  const [deleteAccess, setDeleteAccess] = useState(false);

  const handleCreateUser = () => setCreateUser(true);
  const handleUpdateAccess = () => setUpdateAccess(true);
  const handleDeleteAccess = () => setDeleteAccess(true);

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
          <h5 className="text-black text-xl font-semibold inter">
            Access Control
          </h5>
        </div>
        <button
          type="button"
          onClick={handleCreateUser}
          className="flex items-center gap-3 text-sm text-white px-5 py-[10px] bg-green-500 rounded-md active:scale-95 transition transform duration-200 ease-in-out"
        >
          <FaPlus className="text-white" />
          Create User
        </button>
      </div>

      <div className="w-full bg-white mt-4 rounded-md p-4">
        <div className="relative w-full  flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="text-sm  border-1 border-gray-200 w-[569px] p-[7.5px] pl-[38px] py-[10px] rounded-lg outline-none focus:border-purple-400  "
            placeholder="Search by student name"
          />
          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={21}
            strokeWidth={1}
          />
        </div>

        {/* Student List */}
        <div className="relative mt-4 overflow-x-auto bg-white h-123 rounded-lg">
          <table className="table-auto w-full inter  bg-white">
            <thead className="bg-gray-200 border-gray-200">
              <tr>
                <th className="w-1/5 p-3 text-xs font-semibold tracking-wide text-left ">
                  Name
                </th>
                <th className="w-1/5 p-3 text-xs font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className=" p-3 text-xs font-semibold tracking-wide text-left">
                  Permissions
                </th>
                <th className="w-15 p-3 text-xs font-semibold tracking-wide text-center"></th>
                <th className="w-15 p-3 text-xs font-semibold tracking-wide text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span>Udoh Emmanuel</span>
                </td>
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span>udohemma@gmail.com</span>
                </td>
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span className="whitespace-nowrap block leading-[18px] text-sm mb-2">
                    Application (view) (create) (delete)
                  </span>
                  <span className="whitespace-nowrap block leading-[18px] text-sm mb-2">
                    Schools (view) (create) (delete)
                  </span>
                  <span className="whitespace-nowrap block leading-[18px] text-sm mb-2">
                    Courses (view) (create) (delete)
                  </span>
                  <span className="whitespace-nowrap block leading-[18px] text-sm mb-2">
                    Requirements (view) (create) (delete)
                  </span>
                </td>
                <td className="p-3 text-center text-sm  align-top">
                  <FiEdit2
                    className="inline-block"
                    size={16}
                    onClick={handleUpdateAccess}
                  />
                </td>
                <td className="p-3 text-center text-sm  align-top">
                  <LuTrash2
                    className="inline-block"
                    size={16}
                    onClick={handleDeleteAccess}
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span>Grace James</span>
                </td>
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span>gracejames@gmail.com</span>
                </td>
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span className="whitespace-nowrap block leading-[18px] text-sm mb-2">
                    Requirements (view) (create) (delete)
                  </span>
                </td>
                <td className="p-3 text-center text-sm  align-top">
                  <FiEdit2
                    className="inline-block"
                    size={16}
                    onClick={handleUpdateAccess}
                  />
                </td>
                <td className="p-3 text-center text-sm  align-top">
                  <LuTrash2
                    className="inline-block"
                    size={16}
                    onClick={handleDeleteAccess}
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span>Sam John</span>
                </td>
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span>samjohn@gmail.com</span>
                </td>
                <td className="p-3 text-sm text-gray-900 align-top">
                  <span className="whitespace-nowrap block leading-[18px] text-sm mb-2">
                    Courses (view) (create) (delete)
                  </span>
                </td>
                <td className="p-3 text-center text-sm  align-top">
                  <FiEdit2
                    className="inline-block"
                    size={16}
                    onClick={handleUpdateAccess}
                  />
                </td>
                <td className="p-3 text-center text-sm  align-top">
                  <LuTrash2
                    className="inline-block"
                    size={16}
                    onClick={handleDeleteAccess}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div class=" absolute bottom-6 right-0 left-0 flex justify-between items-center p-4  text-sm text-gray-600 w-full">
            <button class="px-3 py-1 border w-21 border-gray-300 rounded hover:bg-gray-100 text-gray-800">
              Previous
            </button>
            <span className="text-gray-800">Page 1 of 10</span>
            <button class="px-3 py-1 border w-21 border-gray-300 rounded hover:bg-gray-100 text-gray-800">
              Next
            </button>
          </div>
        </div>

        {createUser && (
          <div style={modalStyles.overlay}>
            <div
              className="w-106 inter h-148 relative text-sm"
              style={modalStyles.modal}
            >
              <p className="text-xl  font-semibold">Create User</p>
              <div className="w-full">
                <div className=" w-full mt-5">
                  <label htmlFor="">Name of User</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="mt-0.5 w-full text-sm block px-[12px] py-[8px] border border-gray-200 rounded-lg"
                  />
                </div>
                <div className=" w-full mt-4">
                  <label htmlFor="">Email of User</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="mt-0.5 block w-full px-[12px] py-[8px] border border-gray-200 text-sm rounded-lg"
                  />
                </div>
              </div>

              <div className="relative mt-4 overflow-x-auto bg-white border border-gray-200 rounded-lg">
                <table className="table-auto w-full inter  bg-white">
                  <thead className="bg-gray-200 border-gray-200">
                    <tr>
                      <th className="w-1/5 p-3 text-xs font-normal tracking-wide text-left ">
                        Permissions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="relative h-[14px] w-[14px] pr-2">
                            <input
                              type="checkbox"
                              className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                              name="paid"
                              id="paid"
                            />
                            <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="align-middle">Members</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative h-[14px] w-[14px] pr-2">
                              <input
                                type="checkbox"
                                className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                                name="paid"
                                id="paid"
                              />
                              <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                            <span className="align-middle">View</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="relative h-[14px] w-[14px] pr-2">
                              <input
                                type="checkbox"
                                className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                                name="paid"
                                id="paid"
                              />
                              <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                            <span className="align-middle">Edit</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="relative h-[14px] w-[14px] pr-2">
                              <input
                                type="checkbox"
                                className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                                name="paid"
                                id="paid"
                              />
                              <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                            <span className="align-middle">Delete</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="relative h-[14px] w-[14px] pr-2">
                            <input
                              type="checkbox"
                              className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                              name="paid"
                              id="paid"
                            />
                            <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="align-middle">Schools</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="relative h-[14px] w-[14px] pr-2">
                            <input
                              type="checkbox"
                              className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                              name="paid"
                              id="paid"
                            />
                            <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="align-middle">Courses</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="relative h-[14px] w-[14px] pr-2">
                            <input
                              type="checkbox"
                              className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                              name="paid"
                              id="paid"
                            />
                            <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="align-middle">Requirements</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-5 p-3 border-t flex gap-3 justify-end border-gray-200">
                <button
                  type="button"
                  onClick={() => setCreateUser(false)}
                  className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg active:scale-95 transition transform duration-200 ease-in-out"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 p-2 rounded-lg text-white text-sm active:scale-95 transition transform duration-200 ease-in-out"
                  type="submit"
                >
                  Create User
                </button>
              </div>
            </div>
          </div>
        )}

        {updateAccess && (
          <div style={modalStyles.overlay}>
            <div
              className="w-106 inter h-auto relative text-sm"
              style={modalStyles.modal}
            >
              <p className="text-xl  font-semibold">Update Access</p>

              <div className="relative mt-4 overflow-x-auto bg-white border border-gray-200 rounded-lg">
                <table className="table-auto w-full inter  bg-white">
                  <thead className="bg-gray-200 border-gray-200">
                    <tr>
                      <th className="w-1/5 p-3 text-xs font-normal tracking-wide text-left ">
                        Permissions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="relative h-[14px] w-[14px] pr-2">
                            <input
                              type="checkbox"
                              className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                              name="paid"
                              id="paid"
                            />
                            <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="align-middle">Members</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative h-[14px] w-[14px] pr-2">
                              <input
                                type="checkbox"
                                className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                                name="paid"
                                id="paid"
                              />
                              <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                            <span className="align-middle">View</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="relative h-[14px] w-[14px] pr-2">
                              <input
                                type="checkbox"
                                className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                                name="paid"
                                id="paid"
                              />
                              <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                            <span className="align-middle">Edit</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="relative h-[14px] w-[14px] pr-2">
                              <input
                                type="checkbox"
                                className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                                name="paid"
                                id="paid"
                              />
                              <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                            <span className="align-middle">Delete</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="relative h-[14px] w-[14px] pr-2">
                            <input
                              type="checkbox"
                              className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                              name="paid"
                              id="paid"
                            />
                            <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="align-middle">Schools</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="relative h-[14px] w-[14px] pr-2">
                            <input
                              type="checkbox"
                              className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                              name="paid"
                              id="paid"
                            />
                            <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="align-middle">Courses</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-default">
                      <td className="p-3 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="relative h-[14px] w-[14px] pr-2">
                            <input
                              type="checkbox"
                              className="appearance-none peer h-[14px] w-[14px]  border-1 rounded-sm border-purple-500 text-purple-500"
                              name="paid"
                              id="paid"
                            />
                            <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                          </div>
                          <span className="align-middle">Requirements</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-5 p-3 border-t flex gap-3 justify-end border-gray-200">
                <button
                  type="button"
                  onClick={() => setUpdateAccess(false)}
                  className="active:scale-95 transition transform duration-200 ease-in-out text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="active:scale-95 transition transform duration-200 ease-in-out bg-purple-900 p-2 rounded-lg text-white text-sm"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        {deleteAccess && (
          <div style={modalStyles.overlay}>
            <div
              style={modalStyles.fresh}
              className="w-100 inter relative p-0 rounded-2xl"
            >
              <div className="flex items-center gap-3 p-3">
                <img src={redinfo} alt="icon" />
                <div className="">
                  <p className="text-sm">Remove Course?</p>
                  <p className="text-sm text-gray-500">
                    This course will be removed from the list of selected
                    Courses.
                  </p>
                </div>
              </div>
              <div className="justify-end border-t p-3 border-gray-200 w-full flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteAccess(false)}
                  className="active:scale-95 transition transform duration-200 ease-in-out text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="active:scale-95 transition transform duration-200 ease-in-out bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                  type="submit"
                  onClick={() => setDeleteAccess(false)}
                >
                  Yes, Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Access;
