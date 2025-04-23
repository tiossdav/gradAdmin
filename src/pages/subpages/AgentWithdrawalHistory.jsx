import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";

const AgentWithdrawalHistory = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <button className="flex items-center gap-2 text-sm border border-gray-200 rounded-md py-2 px-4">
          <IoFilterSharp className="text-base" />
          Filters
        </button>
        <div className="relative w-[193px]">
          <select
            name=""
            className="appearance-none border border-gray-300 py-2 px-4 outline-none w-full rounded-lg text-gray-600 text-sm"
            id=""
          >
            <option value="1">Pending Approval</option>
          </select>
          <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
      </div>
      <div className="w-full relative mt-4 overflow-x-auto bg-white rounded-xl border border-gray-200">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-200 border-gray-200">
            <tr>
              <th className="w-1/5 p-3 text-xs font-semibold tracking-wide text-left ">
                Date
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                Amount
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>23.04.23 20:00PM</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                N50,000
              </td>
              <td className="p-3 text-sm text-gray-900 text-left">
                <span
                  style={{ color: "#384049", backgroundColor: "#FFFDE6" }}
                  className="px-2 rounded-xl"
                >
                  Pending Approval
                </span>
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

export default AgentWithdrawalHistory;
