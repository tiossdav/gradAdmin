import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const AgentCommission = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-3 w-full mt-4">
        <div className="relative  flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="text-sm  border-1 border-gray-200 w-[307px] p-[7.5px] pl-[38px] py-[8px] rounded-lg outline-none focus:border-purple-400  "
            placeholder="Search"
          />
          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={21}
            strokeWidth={1}
          />
        </div>
        <div className="relative w-[193px]">
          <select
            name=""
            className="appearance-none border border-gray-300 py-2 px-4 outline-none w-full rounded-lg text-gray-600 text-sm"
            id=""
          >
            <option value="1">Pending</option>
          </select>
          <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
      </div>
      <div className="w-full relative mt-4 overflow-x-auto bg-white rounded-xl border border-gray-200">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-200 border-gray-200">
            <tr>
              <th className="w-1/5 p-3 text-xs font-semibold tracking-wide text-left ">
                Member
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                Description
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                Commission Earned
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-center">
                Date
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-center">
                Status
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-center">
                Update Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 text-left">
                <div className="flex flex-col items-start">
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-center ">Samuel Oboh</div>
                  </div>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>Application Fee</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                N50,000
              </td>
              <td className="p-3 text-center text-sm  align-middle">
                23.04.23 20:00PM
              </td>
              <td className="p-3 text-center text-sm  align-middle">Pending</td>
              <td className="p-3 text-center text-sm  align-middle">
                <FiEdit2 className="inline-block" />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between items-center p-5  text-sm text-gray-600 w-full">
          <button class="px-3 py-1 border w-21 border-gray-300 rounded hover:bg-gray-100 text-gray-800">
            Previous
          </button>
          <span className="text-gray-800">Page 1 of 10</span>
          <button class="px-3 py-1 border w-21 border-gray-300 rounded hover:bg-gray-100 text-gray-800">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AgentCommission;
