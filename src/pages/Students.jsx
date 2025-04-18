import React from "react";

import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import notification_icon from "../assets/icon/notification_icon.png";

const Students = () => {
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
      <div className=" flex  items-center justify-between inter bg-white px-4 py-3 shadow mt-4 rounded-md">
        <div className="flex items-cente">
          <h5 className="text-black text-xl font-semibold inter"> Students</h5>
        </div>
        <button
          type="button"
          className="flex items-center gap-3 text-sm text-white px-7 py-[10px] bg-green-500 rounded-md"
        >
          <FaPlus className="text-white" />
          Select Course
        </button>
      </div>
      <div className="flex items-center gap-3 w-full px-4 bg-white mt-4 rounded-md">
        <div className="relative w-full  h-[80px]  flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="text-sm  border-1 border-gray-200 w-full p-[7.5px] pl-[38px] py-[10px] rounded-lg outline-none focus:border-purple-400  "
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
          className="text-sm text-white px-12 py-[10px] bg-purple-900 rounded-md"
        >
          Search
        </button>
      </div>
      <div className="relative mt-4 overflow-x-auto bg-white h-123 rounded-lg">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-200 border-gray-200">
            <tr>
              <th className="p-3 text-xs font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                Selected Programs
              </th>
              <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                Active Application
              </th>
              <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                Offers Granted
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 text-sm text-gray-900">
                <span>Samuel Oboh</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 text-sm text-gray-900">
                <span>Samuel Oboh</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 text-sm text-gray-900">
                <span>Samuel Oboh</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 text-sm text-gray-900">
                <span>Samuel Oboh</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 text-sm text-gray-900">
                <span>Samuel Oboh</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>2</span>
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
    </div>
  );
};

export default Students;
