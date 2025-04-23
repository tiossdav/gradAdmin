import React, { useState } from "react";

import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";

const SelectedPrograms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div>
      <div className="flex items-center gap-3 mt-4 w-full">
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

      <div className="relative mt-4 overflow-x-auto bg-white h-123 rounded-lg">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-200 border-gray-200">
            <tr>
              <th className="p-3 text-xs font-semibold tracking-wide text-left">
                Course
              </th>
              <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                Intake
              </th>
              <th className="w-40 p-3 text-xs font-semibold tracking-wide text-left">
                Duration
              </th>
              <th className="w-50 p-3 text-xs font-semibold tracking-wide text-left">
                Application Fee
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
                <span>September 2024</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>4 Year(s)</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div>
                  <div className="inline-block align-middle">
                    <div className="relative inline-block h-[14px] w-[14px] align-middle pr-2">
                      <input
                        type="checkbox"
                        className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                        name="paid"
                        id="paid"
                      />
                      <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                    <span className="ml-2 align-middle">N150,000</span>
                  </div>
                  <div className="inline-block align-middle float-right">
                    <RiDeleteBinLine
                      size={18}
                      onClick={handleOpenModal}
                      className="inline-block align-middle"
                    />
                  </div>
                </div>
              </td>
            </tr>
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
                <span>September 2024</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <span>4 Year(s)</span>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div>
                  <div className="inline-block align-middle">
                    <div className="relative inline-block h-[14px] w-[14px] align-middle pr-2">
                      <input
                        type="checkbox"
                        className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                        name="paid"
                        id="paid"
                      />
                      <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                    <span className="ml-2 align-middle">N150,000</span>
                  </div>
                  <div className="inline-block align-middle float-right">
                    <RiDeleteBinLine
                      size={18}
                      onClick={handleOpenModal}
                      className="inline-block align-middle"
                    />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td colSpan="2" className="relative text-sm text-gray-900">
                <div className="pt-4 pb-4 float-right">
                  <div className="">
                    <p className="font-semibold text-xs inline-block pr-6">
                      Selected: 2
                    </p>
                    <p className="font-semibold text-xs inline-block">
                      Cost: N300, 000
                    </p>
                  </div>
                  <button
                    className="text-sm float-right text-white bg-purple-800 py-2 px-2 mt-4 rounded-md"
                    type="button"
                  >
                    Proceed to payment
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-100 inter h-44 relative rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <img src={redinfo} alt="icon" />
              <div className="">
                <p className="text-sm">Remove Course?</p>
                <p className="text-sm text-gray-500">
                  This course will be removed from the list of selected Courses.
                </p>
              </div>
            </div>
            <div className="py-5 mt-5 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
              >
                Close
              </button>
              <button
                className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => setIsModalOpen(false)}
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedPrograms;
