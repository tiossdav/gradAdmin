import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

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
};

const AgentStudents = () => {
  const [addStudent, setAddStudent] = useState(false);

  const openAddStudent = () => setAddStudent(true);
  return (
    <>
      <div className="flex items-center justify-between gap-3 w-full mt-4">
        <div className="relative  flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="text-sm  border-1 border-gray-200 w-[307px] p-[7.5px] pl-[38px] py-[8px] rounded-lg outline-none focus:border-purple-400  "
            placeholder="School, course"
          />
          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={21}
            strokeWidth={1}
          />
        </div>
        <button
          type="button"
          onClick={openAddStudent}
          className="text-sm text-white flex items-center gap-2 px-[16px] py-[8px] bg-purple-900 rounded-md"
        >
          <FaPlus className="text-base" />
          Add Student to Agent
        </button>
      </div>
      <div className="w-full relative mt-4 overflow-x-auto bg-white rounded-xl border border-gray-200">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-200 border-gray-200">
            <tr>
              <th className="w-1/5 p-3 text-xs font-semibold tracking-wide text-left ">
                Name
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                Selected Programs
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                Active Application
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-center">
                Offers Granted
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 text-left">
                <div className="flex flex-col items-start">
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-center underline">Samuel Oboh</div>
                    <span
                      style={{ color: "#582B8D", backgroundColor: "#F0E4FF" }}
                      className="px-2 rounded-xl"
                    >
                      983724
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>10</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">2</td>
              <td className="p-3 text-center text-sm  align-middle">2</td>
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

      {addStudent && (
        <div style={modalStyles.overlay}>
          <div className="inter w-[956px] " style={modalStyles.modal}>
            <p className="text-xl  font-semibold">Add Student to Agent</p>

            <div className="flex mt-4 items-center justify-between gap-3 w-full">
              <div className="relative flex items-center">
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
              <button
                type="button"
                className="text-sm text-purple-900 px-4 py-[8px] bg-white rounded-md border border-purple-900 flex items-center gap-2"
              >
                <FaPlus />
                Create New Member
              </button>
            </div>
            <div className="relative mt-4 overflow-x-auto border-1 border-gray-200 bg-white rounded-lg overflow-hidden">
              <table className="table-auto bg-white w-full inter ">
                <thead className="bg-gray-200 border-gray-200">
                  <tr>
                    <th className="w-1/2 p-3 text-xs font-semibold tracking-wide text-left">
                      Name
                    </th>
                    <th className="w-1/2 p-3 text-xs font-semibold tracking-wide text-right">
                      Required
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="last:rounded-b-lg cursor-default ">
                    <td className="p-3 last:rounded-bl-lg text-left">
                      <p className="text-sm">Agent John</p>
                    </td>

                    <td className="p-3 text-sm text-right text-gray-900 last:rounded-br-lg">
                      <div className="relative inline-block h-[14px] w-[14px] pr-2">
                        <input
                          type="checkbox"
                          className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                          name="paid"
                          id="paid"
                        />
                        <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="py-5 mt-5 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                type="button"
                onClick={() => setAddStudent(false)}
                className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
              >
                Close
              </button>
              <button
                className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => setAddStudent(false)}
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentStudents;
