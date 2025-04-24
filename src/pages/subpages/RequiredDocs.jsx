import React from "react";

const RequiredDocs = () => {
  return (
    <>
      <div className="w-full mt-3 " style={{ backgroundColor: "#FCFCFD" }}>
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-50 border-gray-200">
            <tr>
              <th className="w-1/2.5 p-3 text-xs font-semibold tracking-wide text-left align-bottom">
                <div className="mb-3">
                  <div className="flex items-center gap-3">
                    <p className="text-base">International Passport</p>
                    <span
                      style={{ backgroundColor: "#EAFDEE", color: "#147129" }}
                      className="text-xs px-2 rounded-lg"
                    >
                      Approved
                    </span>
                  </div>
                  <p className="text-sm">
                    Valid International passport from your country
                  </p>
                </div>
                Uploaded Documents
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left align-bottom">
                Date Uploaded
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left align-bottom">
                Status
              </th>
              <th className="w-1/4 p-3 text-xs font-semibold tracking-wide text-left align-bottom">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 text-left">
                <div className="flex flex-col items-start">
                  <p className="text-base">International Passport 1</p>
                  <p className="text-sm text-gray-700">
                    I just reviewed this passport
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>12, May 2024</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span className="text-green-600">Approved</span>
              </td>
              <td className="p-3 text-left text-sm  align-middle">
                <div className="text-sm flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-purple-900 text-purple-900 py-2 px-4 rounded-lg"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="border bg-green-600 text-white py-2 px-4 rounded-lg"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="border bg-red-500 text-white py-2 px-4 rounded-lg"
                  >
                    Decline
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 text-left">
                <div className="flex flex-col items-start">
                  <p className="text-base">Affidavit</p>
                  <p className="text-sm text-gray-700">
                    I just reviewed this passport
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>12, May 2024</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span className="text-green-600">Approved</span>
              </td>
              <td className="p-3 text-left text-sm  align-middle">
                <div className="text-sm flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-purple-900 text-purple-900 py-2 px-4 rounded-lg"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="border bg-green-600 text-white py-2 px-4 rounded-lg"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="border bg-red-500 text-white py-2 px-4 rounded-lg"
                  >
                    Decline
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-50 border-gray-200">
            <tr>
              <th className="w-1/2.5 p-3 text-xs font-semibold tracking-wide text-left align-bottom">
                <div className="mb-3">
                  <div className="flex items-center gap-3">
                    <p className="text-base">International Passport</p>
                    <span
                      style={{ backgroundColor: "#FFF6ED", color: "#E16C00" }}
                      className="text-xs px-2 rounded-lg"
                    >
                      Incomplete Document
                    </span>
                  </div>
                  <p className="text-sm">
                    Valid International passport from your country
                  </p>
                </div>
                Uploaded Documents
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left align-bottom">
                Date Uploaded
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left align-bottom">
                Status
              </th>
              <th className="w-1/4 p-3 text-xs font-semibold tracking-wide text-left align-bottom">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 text-left">
                <div className="flex flex-col items-start">
                  <p className="text-base">International Passport 1</p>
                  <p className="text-sm text-gray-700">
                    I just reviewed this passport
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>12, May 2024</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span className="text-gray-600">Pending Upload</span>
              </td>
              <td className="p-3 text-left text-sm  align-middle">
                <div className="text-sm flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-purple-900 text-purple-900 py-2 px-4 rounded-lg"
                  >
                    Select Document
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 text-left">
                <div className="flex flex-col items-start">
                  <p className="text-base">Affidavit</p>
                  <p className="text-sm text-gray-700">
                    I just reviewed this passport
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>12, May 2024</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span className="text-orange-400">Under Review</span>
              </td>
              <td className="p-3 text-left text-sm  align-middle">
                <div className="text-sm flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-purple-900 text-purple-900 py-2 px-4 rounded-lg"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="border bg-green-600 text-white py-2 px-4 rounded-lg"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="border bg-red-500 text-white py-2 px-4 rounded-lg"
                  >
                    Decline
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default">
              <td className="p-3 text-sm text-gray-900 text-left">
                <div className="flex flex-col items-start">
                  <p className="text-base">Affidavit</p>
                  <p className="text-sm text-gray-700">
                    I just reviewed this passport
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span>12, May 2024</span>
              </td>
              <td className="p-3 text-sm text-gray-900 align-middle">
                <span className="text-red-500">Declined</span>
                <div className="text-red-500 text-xs hidden">
                  This certificate is not clear enough, please re-upload a clear
                  image
                </div>
              </td>
              <td className="p-3 text-left text-sm  align-middle">
                <div className="text-sm flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-purple-900 text-purple-900 py-2 px-4 rounded-lg"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="border bg-green-600 text-white py-2 px-4 rounded-lg"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="border bg-red-500 text-white py-2 px-4 rounded-lg"
                  >
                    Decline
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequiredDocs;
