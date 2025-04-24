import React from "react";

const SentDocs = () => {
  return (
    <>
      <div className="relative mt-4 overflow-x-auto bg-white">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-100 border-gray-200">
            <tr>
              <th className="w-1/3 p-3 text-xs font-semibold tracking-wide text-left ">
                Title
              </th>
              <th className="w-1/3 p-3 text-xs font-semibold tracking-wide text-left">
                Notes
              </th>
              <th className="w-1/3 p-3 text-xs font-semibold tracking-wide text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>International Passport</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle text-[12px]">
                <span>Valid International passport from your country</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle text-center">
                <button
                  type="button"
                  className="border border-purple-800 rounded-md px-[14px] py-[8px] text-purple-900"
                >
                  View
                </button>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>WAEC/NECO Certificate</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle text-[12px]">
                <span>Valid SSCE or NECO certificate</span>
              </td>
              <td className="p-3 text-sm text-gray-900 text-center align-middle">
                <button
                  type="button"
                  className="border border-purple-800 rounded-md px-[14px] py-[8px]  text-purple-900"
                >
                  View
                </button>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>WAEC Scratch Card</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle text-[12px]">
                <span>
                  Scratch card to access and confirm the results on the
                  certificate
                </span>
              </td>
              <td className="p-3 text-center text-sm  align-middle">
                <button
                  type="button"
                  className="border border-purple-800 rounded-md px-[14px] py-[8px] text-purple-900"
                >
                  View
                </button>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>Undergraduate/BSc/HND Certificate</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle text-[12px]">
                <span>Official graduation certificate</span>
              </td>
              <td className="p-3 text-center text-sm  align-middle">
                <button
                  type="button"
                  className="border border-purple-800 rounded-md px-[14px] py-[8px] text-purple-900"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SentDocs;
