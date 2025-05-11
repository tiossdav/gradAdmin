import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";

const Documents = ({ applications, student }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);

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
      borderRadius: "8px",
    },
  };

  console.log(applications);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="text-sm w-76 border-1 border-gray-200  p-[7.5px] pl-[38px] py-[10px] rounded-lg outline-none focus:border-purple-400  "
            placeholder="Search"
          />
          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={21}
            strokeWidth={1}
          />
        </div>
        <button
          onClick={handleModalOpen}
          type="button"
          className="flex items-center gap-3 text-sm text-white px-5 py-[10px] mt-4 bg-purple-900 rounded-md"
        >
          <FaPlus className="text-white" />
          Upload Document
        </button>
      </div>
      <div className=" mt-4 overflow-x-auto">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-100 border-gray-200">
            <tr>
              <th className="p-3 text-xs font-semibold tracking-wide text-left">
                Title
              </th>
              <th className="w-1/5 p-3 text-xs font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm whitespace-nowrap text-gray-900">
                <div className="inline-block align-middle">
                  <div className="inline-block align-middle">
                    <p className="text-sm">International Passport</p>
                    <p className="text-xs text-gray-600">
                      Valid international passport from your country
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-sm text-gray-900">
                <div className="flex gap-5 items-center w-full">
                  <button
                    type="button"
                    className=" border border-purple-900 text-purple-900 rounded-md px-2 py-1 inline-block"
                  >
                    View
                  </button>

                  <button
                    type="button"
                    className=" border border-red-600 text-red-600 rounded-md px-2 py-1 inline-block"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm whitespace-nowrap text-gray-900">
                <div className="inline-block align-middle">
                  <div className="inline-block align-middle">
                    <p className="text-sm">WAEC/NECO Certificate</p>
                    <p className="text-xs text-gray-600">
                      Valid SSCE or NECO Certificate
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-sm text-gray-900">
                <div className="flex gap-5 items-center w-full">
                  <button
                    type="button"
                    className=" border border-purple-900 text-purple-900 rounded-md px-2 py-1 inline-block"
                  >
                    View
                  </button>

                  <button
                    type="button"
                    className=" border border-red-600 text-red-600 rounded-md px-2 py-1 inline-block"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm whitespace-nowrap text-gray-900">
                <div className="inline-block align-middle">
                  <div className="inline-block align-middle">
                    <p className="text-sm">WAEC/NECO Certificate</p>
                    <p className="text-xs text-gray-600">
                      Valid SSCE or NECO Certificate
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-3 text-sm text-gray-900">
                <div className="flex gap-5 items-center w-full">
                  <button
                    type="button"
                    className=" border border-purple-900 text-purple-900 rounded-md px-2 py-1 inline-block"
                  >
                    View
                  </button>

                  <button
                    type="button"
                    className=" border border-red-600 text-red-600 rounded-md px-2 py-1 inline-block"
                  >
                    Delete
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
            className="w-137 inter h-102 relative rounded-2xl"
          >
            <h2 className="font-semibold">Upload Document</h2>
            <div className=" w-full mt-4">
              <label htmlFor="document" className="text-sm font-semibold">
                Name of Document
              </label>
              <div className="relative w-full">
                <select
                  name="nationality"
                  className="appearance-none border border-gray-200 outline-none w-full rounded-lg text-gray-500 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                  id="document"
                >
                  <option value="document" className="text-gray-100">
                    Name of document
                  </option>
                </select>
                <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
              </div>
            </div>
            <div className="mt-4 border-1 border-dashed w-[510px] h-[148px] rounded-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold text-2xl">
                    <AiOutlineCloudUpload />
                  </p>
                  <p className="text-sm">
                    Choose a file or drag & drop it here.
                  </p>
                  <p className="text-xs text-gray-400">
                    JPG, PNG, PDF, formats up to 5 MB.
                  </p>
                </div>
              </div>
              <input type="file" name="upload-image" className="w-0 h-0" />
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
                Upload Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
