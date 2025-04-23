import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";

const CompletedApplications = () => {
  return (
    <div>
      <div className=" mt-4 overflow-x-auto rounded-lg">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-200 border-gray-200">
            <tr>
              <th className="p-3 text-xs font-semibold tracking-wide text-left">
                Course
              </th>
              <th className="w-30 p-3 text-xs font-semibold tracking-wide text-left">
                Date Completed
              </th>

              <th className="w-64 p-3 text-xs font-semibold tracking-wide text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm whitespace-nowrap text-gray-900">
                <div className="inline-block align-middle">
                  <img
                    src={fanshawe_logo}
                    className="h-8 w-8 inline-block mr-2"
                    alt="fanshawe_logo"
                  />
                  <div className="inline-block align-middle">
                    <p className="text-sm">
                      Bachelor of Business Administration (BBA)
                    </p>
                    <p className="text-xs text-gray-600">
                      Bachelor; Co-op; Honours
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-sm text-gray-900">
                <span>13, Sept. 2024</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div className="flex justify-between items-center w-full">
                  <span className=" align-middle bg-red-100 text-red-800 text-xs rounded-lg px-1">
                    Offer Deleted
                  </span>
                  <button
                    type="button"
                    className=" border border-purple-900 text-purple-900 rounded-md px-2 py-1 inline-block"
                  >
                    View
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between items-center p-4  text-sm text-gray-600 w-full">
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

export default CompletedApplications;
