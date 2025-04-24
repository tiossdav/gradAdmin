import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { RiUploadCloudLine } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { LuMessageCircle } from "react-icons/lu";

import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import info_icon from "../../assets/icon/info_icon.png";
import plane_icon from "../../assets/icon/plane_icon.png";
import notification_icon from "../../assets/icon/notification_icon.png";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import rgu_logo from "../../assets/logo/rgu_logo.png";
import SentDocs from "./SentDocs";
import AppFeeds from "./AppFeeds";

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
    borderRadius: "12px",
  },
};

const RequiredDocs = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
                  <p className="text-sm font-normal">
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
                  <p className="text-xs text-gray-700">
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
                  <p className="text-xs text-gray-700">
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
                  <p className="text-sm font-normal">
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
                  <p className="text-xs text-gray-700">
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
                  <p className="text-xs text-gray-700">
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
                  <p className="text-xs text-gray-700">
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
