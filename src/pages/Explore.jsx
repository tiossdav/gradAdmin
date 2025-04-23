import React from "react";

import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

import fanshawe_logo from "../assets/logo/fanshawe_logo.png";

const Explore = () => {
  return (
    <>
      <div className=" flex justify-between items-center inter bg-white p-4 shadow rounded-md">
        <div>
          <h5 className="text-black text-base"> Admin</h5>
          <h5 className="text-black text-base">Samuel Balogun</h5>
        </div>
        <div>
          <img src="" alt="notification_icon" className="w-[23px] h-[24px]" />
        </div>
      </div>

      <div className=" flex justify-between items-center inter bg-white p-4 shadow mt-4 rounded-md">
        <h5 className="text-black text-xl inter font-semibold">
          Explore Courses
        </h5>
      </div>

      {/* Search Button */}
      <div className="mt-4 gap-2 bg-white rounded-md shadow p-4 flex flex-col items-center justify-between  w-full">
        <div className="flex items-center gap-3 w-full">
          <div className="relative w-full flex items-center">
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
        <div className="flex items-center gap-3 mt-1 w-full">
          <div className="relative w-full sm:w-auto">
            <select
              name="location"
              className="appearance-none border border-gray-300 py-2 px-3 outline-none w-full sm:w-[150px] rounded-lg text-gray-600 text-sm"
              id="location"
            >
              <option value="Location">Location</option>
            </select>
            <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
          <div className="relative w-full sm:w-auto">
            <select
              name="tuition_fee"
              className="appearance-none border border-gray-300 py-2 px-3 outline-none w-full sm:w-[150px] rounded-lg text-gray-600 text-sm"
              id="tuition_fee"
            >
              <option value="Tuition Fee">Tuition Fee</option>
            </select>
            <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
          <div className="relative w-full sm:w-auto">
            <select
              name="program"
              className="appearance-none border border-gray-300 py-2 px-3 outline-none w-full sm:w-[150px] rounded-lg text-gray-600 text-sm"
              id="program"
            >
              <option value="Program Level">Program Level</option>
            </select>
            <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 grid grid-cols-[repeat(3,_minmax(309px,_1fr))] p-4 bg-white rounded-lg  gap-4 ">
        <div className="h-[458px] bg-white p-3 border-2 border-gray-100 rounded-lg">
          <p className="inter text-sm">
            Bachelor of Engineering (Automation and Robotics)
          </p>
          <div className="inline-block align-middle mt-3">
            <img
              src={fanshawe_logo}
              className="h-[40px] w-[35px] inline-block mr-4"
              alt="fanshawe_logo"
            />
            <div className="inline-block align-middle">
              <p className="text-sm">Fanshawe College</p>
              <p className="text-xs text-gray-600">Ontario, Canada</p>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-sm inter ">Program</p>
                <p className="text-sm inter text-gray-700">Bachelor Degree</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Location</p>
                <p className="text-sm inter text-gray-700">Ontario, CAN</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Campus City</p>
                <p className="text-sm inter text-gray-700">Ontario </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Duration</p>
                <p className="text-sm inter text-gray-700">
                  4 Year(s) 5 Month(s)
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Application Fee</p>
                <p className="text-sm inter text-gray-700">$50</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Tuition Fee</p>
                <p className="text-sm inter text-gray-700">$5,000 / Year</p>
              </div>
            </div>
          </div>
          <hr className="border my-4 border-gray-200" />
          <div className="flex flex-col">
            <p className="uppercase text-sm font-semibold">intake</p>
            <div className="flex items-start justify-between mt-1 w-full">
              <div className="flex-col flex items-center w-auto  gap-1">
                <p className="text-left font-normal text-sm">May 2024</p>
                <span className="inline-block px-1 rounded-lg bg-gray-100 text-sm text-left whitespace-nowrap text-green-700">
                  Open
                </span>
              </div>
              <div className="flex-col flex items-center w-30 gap-1">
                <p className="text-center font-normal text-sm  w-auto ">
                  Jan 2025
                </p>
                <span className="bg-blue-100 px-1 rounded-lg text-center text-sm whitespace-nowrap text-blue-700">
                  Opening Soon
                </span>
              </div>
              <div className="flex-col flex items-center w-23 gap-1">
                <p className="text-right font-normal text-sm w-auto ">
                  Jan 2025
                </p>
                <span className="text-right bg-orange-100 px-1 text-sm rounded-lg whitespace-nowrap text-orange-700">
                  Not Open
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
          >
            <FaPlus className="text-white" />
            Select Course
          </button>
        </div>
        <div className="h-[458px] bg-white p-3 border-2 border-gray-100 rounded-lg">
          <p className="inter text-sm">
            Bachelor of Engineering (Automation and Robotics)
          </p>
          <div className="inline-block align-middle mt-3">
            <img
              src={fanshawe_logo}
              className="h-[40px] w-[35px] inline-block mr-4"
              alt="fanshawe_logo"
            />
            <div className="inline-block align-middle">
              <p className="text-sm">Fanshawe College</p>
              <p className="text-xs text-gray-600">Ontario, Canada</p>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-sm inter ">Program</p>
                <p className="text-sm inter text-gray-700">Bachelor Degree</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Location</p>
                <p className="text-sm inter text-gray-700">Ontario, CAN</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Campus City</p>
                <p className="text-sm inter text-gray-700">Ontario </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Duration</p>
                <p className="text-sm inter text-gray-700">
                  4 Year(s) 5 Month(s){" "}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Application Fee</p>
                <p className="text-sm inter text-gray-700">$50</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Tuition Fee</p>
                <p className="text-sm inter text-gray-700">$5,000 / Year</p>
              </div>
            </div>
          </div>
          <hr className="border my-4 border-gray-200" />
          <div className="flex flex-col">
            <p className="uppercase text-sm font-semibold">intake</p>
            <div className="flex items-start justify-between mt-1 w-full">
              <div className="flex-col flex items-center w-auto  gap-1">
                <p className="text-left font-normal text-sm">May 2024</p>
                <span className="inline-block px-1 rounded-lg bg-gray-100 text-sm text-left whitespace-nowrap text-green-700">
                  Open
                </span>
              </div>
              <div className="flex-col flex items-center w-30 gap-1">
                <p className="text-center font-normal text-sm  w-auto ">
                  Jan 2025
                </p>
                <span className="bg-blue-100 px-1 rounded-lg text-center text-sm whitespace-nowrap text-blue-700">
                  Opening Soon
                </span>
              </div>
              <div className="flex-col flex items-center w-23 gap-1">
                <p className="text-right font-normal text-sm w-auto ">
                  Jan 2025
                </p>
                <span className="text-right bg-orange-100 px-1 text-sm rounded-lg whitespace-nowrap text-orange-700">
                  Not Open
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
          >
            <FaPlus className="text-white" />
            Select Course
          </button>
        </div>
        <div className="h-[458px] bg-white p-3 border-2 border-gray-100 rounded-lg">
          <p className="inter text-sm">
            Bachelor of Engineering (Automation and Robotics)
          </p>
          <div className="inline-block align-middle mt-3">
            <img
              src={fanshawe_logo}
              className="h-[40px] w-[35px] inline-block mr-4"
              alt="fanshawe_logo"
            />
            <div className="inline-block align-middle">
              <p className="text-sm">Fanshawe College</p>
              <p className="text-xs text-gray-600">Ontario, Canada</p>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-sm inter ">Program</p>
                <p className="text-sm inter text-gray-700">Bachelor Degree</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Location</p>
                <p className="text-sm inter text-gray-700">Ontario, CAN</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Campus City</p>
                <p className="text-sm inter text-gray-700">Ontario </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Duration</p>
                <p className="text-sm inter text-gray-700">
                  4 Year(s) 5 Month(s)
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Application Fee</p>
                <p className="text-sm inter text-gray-700">$50</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Tuition Fee</p>
                <p className="text-sm inter text-gray-700">$5,000 / Year</p>
              </div>
            </div>
          </div>
          <hr className="border my-4 border-gray-200" />
          <div className="flex flex-col">
            <p className="uppercase text-sm font-semibold">intake</p>
            <div className="flex items-start justify-between mt-1 w-full">
              <div className="flex-col flex items-center w-auto  gap-1">
                <p className="text-left font-normal text-sm">May 2024</p>
                <span className="inline-block px-1 rounded-lg bg-gray-100 text-sm text-left whitespace-nowrap text-green-700">
                  Open
                </span>
              </div>
              <div className="flex-col flex items-center w-30 gap-1">
                <p className="text-center font-normal text-sm  w-auto ">
                  Jan 2025
                </p>
                <span className="bg-blue-100 px-1 rounded-lg text-center text-sm whitespace-nowrap text-blue-700">
                  Opening Soon
                </span>
              </div>
              <div className="flex-col flex items-center w-23 gap-1">
                <p className="text-right font-normal text-sm w-auto ">
                  Jan 2025
                </p>
                <span className="text-right bg-orange-100 px-1 text-sm rounded-lg whitespace-nowrap text-orange-700">
                  Not Open
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
          >
            <FaPlus className="text-white" />
            Select Course
          </button>
        </div>
        <div className="h-[458px] bg-white p-3 border-2 border-gray-100 rounded-lg">
          <p className="inter text-sm">
            Bachelor of Engineering (Automation and Robotics)
          </p>
          <div className="inline-block align-middle mt-3">
            <img
              src={fanshawe_logo}
              className="h-[40px] w-[35px] inline-block mr-4"
              alt="fanshawe_logo"
            />
            <div className="inline-block align-middle">
              <p className="text-sm">Fanshawe College</p>
              <p className="text-xs text-gray-600">Ontario, Canada</p>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-sm inter ">Program</p>
                <p className="text-sm inter text-gray-700">Bachelor Degree</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Location</p>
                <p className="text-sm inter text-gray-700">Ontario, CAN</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Campus City</p>
                <p className="text-sm inter text-gray-700">Ontario </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Duration</p>
                <p className="text-sm inter text-gray-700">
                  4 Year(s) 5 Month(s)
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Application Fee</p>
                <p className="text-sm inter text-gray-700">$50</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Tuition Fee</p>
                <p className="text-sm inter text-gray-700">$5,000 / Year</p>
              </div>
            </div>
          </div>
          <hr className="border my-4 border-gray-200" />
          <div className="flex flex-col">
            <p className="uppercase text-sm font-semibold">intake</p>
            <div className="flex items-start justify-between mt-1 w-full">
              <div className="flex-col flex items-center w-auto  gap-1">
                <p className="text-left font-normal text-sm">May 2024</p>
                <span className="inline-block px-1 rounded-lg bg-gray-100 text-sm text-left whitespace-nowrap text-green-700">
                  Open
                </span>
              </div>
              <div className="flex-col flex items-center w-30 gap-1">
                <p className="text-center font-normal text-sm  w-auto ">
                  Jan 2025
                </p>
                <span className="bg-blue-100 px-1 rounded-lg text-center text-sm whitespace-nowrap text-blue-700">
                  Opening Soon
                </span>
              </div>
              <div className="flex-col flex items-center w-23 gap-1">
                <p className="text-right font-normal text-sm w-auto ">
                  Jan 2025
                </p>
                <span className="text-right bg-orange-100 px-1 text-sm rounded-lg whitespace-nowrap text-orange-700">
                  Not Open
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
          >
            <FaPlus className="text-white" />
            Select Course
          </button>
        </div>
        <div className="h-[458px] bg-white p-3 border-2 border-gray-100 rounded-lg">
          <p className="inter text-sm">
            Bachelor of Engineering (Automation and Robotics)
          </p>
          <div className="inline-block align-middle mt-3">
            <img
              src={fanshawe_logo}
              className="h-[40px] w-[35px] inline-block mr-4"
              alt="fanshawe_logo"
            />
            <div className="inline-block align-middle">
              <p className="text-sm">Fanshawe College</p>
              <p className="text-xs text-gray-600">Ontario, Canada</p>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-sm inter ">Program</p>
                <p className="text-sm inter text-gray-700">Bachelor Degree</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Location</p>
                <p className="text-sm inter text-gray-700">Ontario, CAN</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Campus City</p>
                <p className="text-sm inter text-gray-700">Ontario </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Duration</p>
                <p className="text-sm inter text-gray-700">
                  4 Year(s) 5 Month(s)
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Application Fee</p>
                <p className="text-sm inter text-gray-700">$50</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Tuition Fee</p>
                <p className="text-sm inter text-gray-700">$5,000 / Year</p>
              </div>
            </div>
          </div>
          <hr className="border my-4 border-gray-200" />
          <div className="flex flex-col">
            <p className="uppercase text-sm font-semibold">intake</p>
            <div className="flex items-start justify-between mt-1 w-full">
              <div className="flex-col flex items-center w-auto  gap-1">
                <p className="text-left font-normal text-sm">May 2024</p>
                <span className="inline-block px-1 rounded-lg bg-gray-100 text-sm text-left whitespace-nowrap text-green-700">
                  Open
                </span>
              </div>
              <div className="flex-col flex items-center w-30 gap-1">
                <p className="text-center font-normal text-sm  w-auto ">
                  Jan 2025
                </p>
                <span className="bg-blue-100 px-1 rounded-lg text-center text-sm whitespace-nowrap text-blue-700">
                  Opening Soon
                </span>
              </div>
              <div className="flex-col flex items-center w-23 gap-1">
                <p className="text-right font-normal text-sm w-auto ">
                  Jan 2025
                </p>
                <span className="text-right bg-orange-100 px-1 text-sm rounded-lg whitespace-nowrap text-orange-700">
                  Not Open
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
          >
            <FaPlus className="text-white" />
            Select Course
          </button>
        </div>
        <div className="h-[458px] bg-white p-3 border-2 border-gray-100 rounded-lg">
          <p className="inter text-sm">
            Bachelor of Engineering (Automation and Robotics)
          </p>
          <div className="inline-block align-middle mt-3">
            <img
              src={fanshawe_logo}
              className="h-[40px] w-[35px] inline-block mr-4"
              alt="fanshawe_logo"
            />
            <div className="inline-block align-middle">
              <p className="text-sm">Fanshawe College</p>
              <p className="text-xs text-gray-600">Ontario, Canada</p>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-sm inter ">Program</p>
                <p className="text-sm inter text-gray-700">Bachelor Degree</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Location</p>
                <p className="text-sm inter text-gray-700">Ontario, CAN</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Campus City</p>
                <p className="text-sm inter text-gray-700">Ontario </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Duration</p>
                <p className="text-sm inter text-gray-700">
                  4 Year(s) 5 Month(s)
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Application Fee</p>
                <p className="text-sm inter text-gray-700">$50</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm inter ">Tuition Fee</p>
                <p className="text-sm inter text-gray-700">$5,000 / Year</p>
              </div>
            </div>
          </div>
          <hr className="border my-4 border-gray-200" />
          <div className="flex flex-col">
            <p className="uppercase text-sm font-semibold">intake</p>
            <div className="flex items-start justify-between mt-1 w-full">
              <div className="flex-col flex items-center w-auto  gap-1">
                <p className="text-left font-normal text-sm">May 2024</p>
                <span className="inline-block px-1 rounded-lg bg-gray-100 text-sm text-left whitespace-nowrap text-green-700">
                  Open
                </span>
              </div>
              <div className="flex-col flex items-center w-30 gap-1">
                <p className="text-center font-normal text-sm  w-auto ">
                  Jan 2025
                </p>
                <span className="bg-blue-100 px-1 rounded-lg text-center text-sm whitespace-nowrap text-blue-700">
                  Opening Soon
                </span>
              </div>
              <div className="flex-col flex items-center w-23 gap-1">
                <p className="text-right font-normal text-sm w-auto ">
                  Jan 2025
                </p>
                <span className="text-right bg-orange-100 px-1 text-sm rounded-lg whitespace-nowrap text-orange-700">
                  Not Open
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
          >
            <FaPlus className="text-white" />
            Select Course
          </button>
        </div>
      </div>
    </>
  );
};

export default Explore;
