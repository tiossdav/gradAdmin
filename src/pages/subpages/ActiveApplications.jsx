import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";

const ActiveApplications = ({ applications, student }) => {
  const activeApp = applications.filter((app) => app?.status === 1);
  console.log(activeApp);
  return (
    <div>
      {activeApp === "" ? (
        <div className="relative mt-4 overflow-x-auto bg-white h-123 rounded-lg">
          <table className="table-auto w-full inter  bg-white">
            <thead className="bg-gray-200 border-gray-200">
              <tr>
                <th className="p-3 text-xs font-semibold tracking-wide text-left">
                  Course
                </th>
                <th className="w-30 p-3 text-xs font-semibold tracking-wide text-left">
                  Duration
                </th>
                <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                  Intake
                </th>
                <th className="w-64 p-3 text-xs font-semibold tracking-wide text-left">
                  Started
                </th>
              </tr>
            </thead>
            <tbody>
              {activeApp.map((app, index) => (
                <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
                  <td className="p-3 text-sm whitespace-nowrap text-gray-900">
                    <div className="inline-block align-middle">
                      <img
                        src={app.school_data?.logo}
                        className="h-8 w-8 inline-block mr-2"
                        alt=""
                      />
                      <div className="inline-block align-middle">
                        <p className="text-sm">
                          {app.course_data?.title || "N/A"}
                        </p>
                        <p className="text-xs text-gray-600">
                          {app.program_name || "Program"};{" "}
                          {app.course_data?.faculty || "Faculty"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-900">
                    <span>{app.course_data?.duration_year || 0} Year(s)</span>
                  </td>
                  <td className="p-3 text-sm text-gray-900">
                    <span>{app.intake_year || "N/A"}</span>
                  </td>
                  <td className="p-3 text-sm text-gray-900">
                    <div className="align-middle flex justify-between items-center w-full">
                      <span className=" align-middle">13, Jan. 2024</span>
                      <button
                        type="button"
                        className=" border border-purple-900 text-purple-900 rounded-md px-2 py-1 inline-block"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[300px]">
          <p>No Active Application</p>
        </div>
      )}
    </div>
  );
};

export default ActiveApplications;
