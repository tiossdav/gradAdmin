import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../../components/Loader";

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

const RequiredDocs = ({ app }) => {
  const reqDocs = app?.req_docs || [];
  const navigate = useNavigate();

  const docStatus = (status) => {
    switch (status) {
      case 0:
        return {
          label: "Pending upload",
          style: {
            backgroundColor: "#FEF3C7",
            color: "#92400E",
          },
        };
      case 1:
        return {
          label: "Incomplete document",
          style: {
            backgroundColor: "#DCFCE7",
            color: "#166534",
          },
        };
      case 2:
        return {
          label: "In progress",
          style: {
            backgroundColor: "#DBEAFE",
            color: "#1E3A8A",
          },
        };
      case 3:
        return {
          label: "Approved",
          style: {
            backgroundColor: "#E0F2FE",
            color: "#0369A1",
          },
        };
      default:
        return {
          label: "Unknown",
          style: {
            backgroundColor: "#F3F4F6",
            color: "#4B5563",
          },
        };
    }
  };

  // const { label, style } = docStatus(app.status)

  const handleClick = (btn) => {
    console.log(btn);
  };

  return (
    <>
      {reqDocs.map((doc, index) => (
        <div className="mb-2" key={index}>
          <div className="mt-1 pl-3 py-5 bg-gray-100">
            <div className="flex items-center gap-3">
              <p className="text-base capitalize">{doc.name}</p>
              <span
                style={{ backgroundColor: "#FFF6ED", color: "#E16C00" }}
                className="text-xs px-2 rounded-lg"
              >
                Incomplete document
              </span>
            </div>
            <p className="text-sm font-normal">{doc.description}</p>
          </div>
          <div className="w-full pt-7 bg-gray-100">
            <table className="table-auto w-full inter  bg-white">
              <thead className=" bg-gray-100 border-gray-200">
                <tr>
                  <th className="w-[30%] p-3 text-xs text-gray-500 font-semibold tracking-wide text-left align-bottom">
                    Uploaded Documents
                  </th>
                  <th className="w-[15%] p-3 text-xs text-gray-500 font-semibold tracking-wide text-left align-bottom">
                    Date Uploaded
                  </th>
                  <th className="w-[30%] p-3 text-xs text-gray-500 font-semibold tracking-wide text-left align-bottom">
                    Status
                  </th>
                  <th className="p-3 text-xs text-gray-500 font-semibold tracking-wide text-left align-bottom">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {doc.doc_upload.length > 0 ? (
                  doc.doc_upload.map((file, fileIndex) => (
                    <tr
                      key={fileIndex}
                      className="border-b-2 last:border-0 border-gray-200 hover:bg-gray-50 cursor-default"
                    >
                      <td className="p-3 text-sm text-gray-900 text-left">
                        <div className="flex flex-col items-start">
                          <p className="text-base uppercase">{file.title}</p>
                          <p className="text-xs text-gray-700">
                            I just reviewed this passport
                          </p>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-gray-900 align-middle">
                        <span>
                          {new Date(doc.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-900 align-middle">
                        <span
                          className={`${
                            file.status === 0
                              ? "text-gray-600"
                              : file.status === 1
                              ? "text-green-600"
                              : file.status === 2
                              ? "text-orange-400"
                              : file.status === 3
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {file.status === 0
                            ? "Pending Upload"
                            : file.status === 1
                            ? "Approved"
                            : file.status === 2
                            ? "Under Review"
                            : file.status === 3
                            ? "Declined"
                            : "Unknown"}
                        </span>
                      </td>
                      <td className="p-3 text-left text-sm  align-middle">
                        <div className="text-sm flex items-center gap-2">
                          <button
                            type="button"
                            className="border border-purple-900 text-purple-900 py-[7px] px-[14px] rounded-lg"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => handleClick("approve")}
                            style={{ backgroundColor: "#40BB15" }}
                            className="border text-white py-[7px] px-2 rounded-lg"
                          >
                            Approve
                          </button>
                          <button
                            type="button"
                            onClick={() => handleClick("decline")}
                            style={{ backgroundColor: "#E74040" }}
                            className="border bg-red-500 text-white py-[7px] px-2 rounded-lg"
                          >
                            Decline
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-b-2 last:border-0 border-gray-200 hover:bg-gray-50 cursor-default">
                    <td className="p-3 text-sm text-gray-900 text-left">
                      <div className="flex flex-col items-start">
                        <p className="text-base">No document uploaded yet</p>
                      </div>
                    </td>
                    <td className="p-3 text-sm text-gray-900 align-middle">
                      <span>---</span>
                    </td>
                    <td className="p-3 text-sm text-gray-900 align-middle">
                      <span className="text-gray-600">Pending Upload</span>
                    </td>
                    <td className="p-3 text-left text-sm align-middle">
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
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default RequiredDocs;
