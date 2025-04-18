import React from "react";
import { CiSearch } from "react-icons/ci";

import { RiFilterOffLine } from "react-icons/ri";

import { IoIosCheckmark } from "react-icons/io";
import notification_icon from "../../assets/icon/notification_icon.png";
import application_icon from "../../assets/icon/application_icon.png";
import school_icon from "../../assets/icon/school_icon.png";
import student_icon from "../../assets/icon/student_icon.png";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";

const Dashboard = () => {
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
      <div className="p-4 shadow bg-white rounded-md mt-4">
        <div className="grid gap-3 grid-cols-3">
          <div className="flex items-center gap-4 bg-purple-900 h-[104px] pl-4 rounded-lg">
            <img
              src={student_icon}
              className="w-[48px] h-[48px]"
              alt="student_icon"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm inter text-white">Students</p>
              <p className="text-2xl inter text-white font-semibold">5</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-purple-900 h-[104px]  pl-4 rounded-lg">
            <img
              src={school_icon}
              className="w-[48px] h-[48px]"
              alt="school_icon"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm inter text-white">Schools</p>
              <p className="text-2xl inter text-white font-semibold">4</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-purple-900 h-[104px] pl-4 rounded-lg">
            <img
              src={application_icon}
              className="w-[48px] h-[48px]"
              alt="application_icon"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm inter text-white">Applications</p>
              <p className="text-2xl inter text-white font-semibold">1</p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-base inter font-semibold">Applications</div>

        {/* Search Button */}
        <div className="mt-4 gap-2 flex items-center justify-between  w-full">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                className="text-sm border-1 border-gray-200 p-[7.5px] pl-[38px] py-[10px] rounded-lg w-98 outline-none focus:border-purple-400  "
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
          <div className="relative h-[40px] w-[104px] text-purple-800">
            <button
              type="button"
              className=" border border-purple-500 h-full w-full rounded-md flex items-center justify-center gap-2"
            >
              Filters
              <RiFilterOffLine className="" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto rounded-lg shadow relative">
          <table className="table-auto w-full min-w-[900px]">
            <thead className="bg-gray-100 border-gray-200">
              <tr>
                <th className="w-38 p-3 text-xs font-semibold tracking-wide text-left">
                  Student
                </th>
                <th className="w-80 p-3 text-xs font-semibold tracking-wide text-left">
                  Course
                </th>
                <th className="w-29 p-3 text-xs font-semibold tracking-wide text-left">
                  Intake
                </th>
                <th className="w-27 p-3 text-xs font-semibold tracking-wide text-left">
                  Started
                </th>
                <th className="w-67 p-3 text-xs font-semibold tracking-wide text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-gray-200">
                <td className="p-3 text-sm text-gray-900">
                  <p className="text-sm">Samuel Ademola</p>
                </td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">
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
                <td className="p-3 text-sm text-gray-900">September 2024</td>
                <td className="p-3 text-sm text-gray-900">
                  <p>13, Jan. 2024</p>
                </td>
                <td className="p-3 text-sm whitespace-nowrap text-gray-900">
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 bg-orange-100 py-0.5 px-1 rounded-lg">
                      Incomplete Documents
                    </span>
                    <button
                      className="text-purple-500 float-right border border-purple-500 py-1.5 px-3 rounded-lg text-sm"
                      type="button"
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
