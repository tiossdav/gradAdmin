import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { RiUploadCloudLine } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { LuMessageCircle } from "react-icons/lu";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

import Loader from "../../components/Loader";
import info_icon from "../../assets/icon/info_icon.png";
import notification_icon from "../../assets/icon/notification_icon.png";
import rgu_logo from "../../assets/logo/rgu_logo.png";
import RequiredDocs from "./RequiredDocs";
import SentDocs from "./SentDocs";
import AppFeeds from "./AppFeeds";
import {
  fetchApplicationById,
  updateApplicationStatus,
  updateStudentDocuments,
  sendMessages,
  getStudentDocuments,
  getAppFeeds,
} from "../../api";

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

const ApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  // const [reqId, setReqId] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState([]);
  const reqId = "67226182c298389f02acee48";
  const [sendDocs, setSendDocs] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);

  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedTab, setSelectedTab] = useState("required_doc"); // Default tab
  const [docs, setDocs] = useState([]);
  const openMessage = () => setSendMessage(true);
  const handleMessage = () => setSendDocs(true);
  const updateStatus = () => setOpenUpdate(true);

  const [newStatus, setNewStatus] = useState(1);

  const userId = app?.user_id;
  const appId = app?.application_id;
  console.log("user_id:", app);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.log("Enter a message");
    }

    try {
      const sendMsg = await sendMessages(appId, message);
      const data = await getAppFeeds(userId);
      setMsg(data.data);
      setSendMessage(false); // close modal
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("req_id", reqId);
    try {
      const res = await updateStudentDocuments(userId, formData);
      console.log("Upload success:", res);

      const updatedDocs = await getStudentDocuments(userId);
      setDocs(updatedDocs.data);
      setSendDocs(false); // close modal
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleStatusChange = (e) => {
    setNewStatus(Number(e.target.value));
  };

  const handleUpdateStatus = async () => {
    try {
      // Call API to update status here
      console.log(app?.application_id);
      const result = await updateApplicationStatus(
        app?.application_id,
        newStatus
      );
      console.log("Status updated successfully:", result);
      setOpenUpdate(false); // Close modal after updating
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const appStatus = (status) => {
    switch (status) {
      case 0:
        return {
          label: "Paid",
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
          label: "Processing",
          style: {
            backgroundColor: "#DBEAFE",
            color: "#1E3A8A",
          },
        };
      case 3:
        return {
          label: "Granted",
          style: {
            backgroundColor: "#F3E8FF",
            color: "#7E22CE",
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

  const paymentStatus = (status) => {
    switch (status) {
      case 0:
        return "Pending";
      case 1:
        return "Paid";
      case 2:
        return "In progress";
      case 3:
        return "Completed";
      default:
        return "Unknown";
    }
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 0:
        return "text-yellow-700";
      case 1:
        return "text-green-700";
      case 2:
        return "text-blue-700";
      case 3:
        return "text-purple-700";
      default:
        return "text-gray-600";
    }
  };

  const { label, style } = appStatus(app.status);

  const handleTabClick = (tab) => {
    setSelectedTab(tab); // Highlight the selected tab
  };

  useEffect(() => {
    setLoading(true);
    const getApplication = async () => {
      try {
        const data = await fetchApplicationById(id);
        setApp(data);
      } catch (error) {
        if (error.message.includes("Unauthorized")) {
          navigate("/login");
        } else {
          setError("Error fetching application details");
        }
      } finally {
        setLoading(false);
      }
    };
    getApplication();
  }, [id, navigate]);

  return (
    <>
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

      <Loader loading={loading} />
      {!loading && app && Object.keys(app)?.length > 0 && (
        <>
          {/* Header */}
          {app && (
            <div className="flex items-center bg-gray-50 mt-4 gap-3">
              <div
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="h-[63px] flex items-center justify-center w-[44px] rounded-md bg-white"
              >
                <IoIosArrowBack />
              </div>
              <h5 className="h-[63px] flex items-center py-[20px] px-[25px] text-black rounded-md bg-white text-xl font-semibold inter w-full">
                {app.user_data.first_name} {app.user_data.last_name}
              </h5>
            </div>
          )}

          {/* BSc. Econs */}
          {app && (
            <div className="bg-white mt-3 p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4>{app.course_data.title}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    <img src={app.school_data.logo} alt="logo" />
                    <p className="text-xs text-gray-800 capitalize">
                      {app.school_data.school_name}, {app.school_data.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p style={style} className="text-xs px-3 py-1  rounded-xl">
                    {label}
                  </p>

                  <button
                    className="bg-purple-900 text-sm text-white flex items-center gap-2 py-[8px] px-[16px] rounded-lg"
                    type="button"
                    onClick={updateStatus}
                  >
                    <LuSettings2 />
                    Update Status
                  </button>
                </div>
              </div>
              {selectedTab === "app_feeds" && (
                <div className="mt-3">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="bg-purple-900 px-4 py-2 rounded-lg text-white"
                    >
                      <RiUploadCloudLine />
                    </button>
                    <p
                      style={{ color: "#147129" }}
                      className="underline  text-sm"
                    >
                      Offer Letter.pdf
                      <GiCancel
                        style={{ color: "#852221" }}
                        className="inline-block ml-2 text-base text-red"
                      />
                    </p>
                    <p
                      style={{ color: "#147129" }}
                      className="underline  text-sm"
                    >
                      Offer Letter.pdf
                      <GiCancel
                        style={{ color: "#852221" }}
                        className="inline-block ml-2 text-base text-red"
                      />
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-20 mt-3">
                <div className="box w-90">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-900">Years:</p>
                    <span className="text-xs ">
                      {app.course_data.duration_year} Year(s){" "}
                      {app.course_data.duration_month} Month(s)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-900">
                      Intake/Requirements:
                    </p>
                    <span className="text-xs ">{app.intake_year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-900">Country:</p>
                    <span className="text-xs ">{app.school_data.country}</span>
                  </div>
                </div>
                <div className="box w-90">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-900">
                      Application Fee(CAD):
                    </p>
                    <span className="text-xs ">
                      ${app.course_data.app_fee || "N/A"}
                      <span
                        className={`lowercase inter ${getStatusStyles(
                          app?.status
                        )}`}
                      >
                        ({paymentStatus(app?.status)})
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-900">Tuition Deposit:</p>
                    <span className="text-xs ">
                      ${app.course_data.tuition_deposit || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-900">Tuition Per Year:</p>
                    <span className="text-xs ">
                      ${app.course_data.tuition_total || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Button */}
          <div className="bg-white mt-4 p-3 px-5">
            <div className="flex items-center justify-between">
              <div className="gap-6 flex items-center text-gray-600 bg-white rounded-lg">
                <p
                  className={`text-sm h-full flex items-center justify-center cursor-pointer py-4 ${
                    selectedTab === "required_doc"
                      ? "border-b-2 border-purple-700 text-purple-900"
                      : ""
                  }`}
                  onClick={() => handleTabClick("required_doc")}
                >
                  Required Document
                </p>
                <p
                  className={`text-sm h-full flex items-center justify-center cursor-pointer py-4 ${
                    selectedTab === "sent_doc"
                      ? "border-b-2 border-purple-700 text-purple-900"
                      : ""
                  }`}
                  onClick={() => handleTabClick("sent_doc")}
                >
                  Sent Documents
                </p>
                <p
                  className={`text-sm h-full flex items-center justify-center cursor-pointer py-4 ${
                    selectedTab === "app_feeds"
                      ? "border-b-2 border-purple-700 text-purple-900"
                      : ""
                  }`}
                  onClick={() => handleTabClick("app_feeds")}
                >
                  Application Feedback
                </p>
              </div>
              {selectedTab === "app_feeds" && (
                <div>
                  <button
                    type="button"
                    onClick={openMessage}
                    className="px-4 py-2 bg-purple-900 flex items-center text-sm gap-2 rounded-lg text-white"
                  >
                    <LuMessageCircle className="inline-block align-middle text-base" />
                    Send Message
                  </button>
                </div>
              )}
              {selectedTab === "sent_doc" && (
                <div>
                  <button
                    type="button"
                    onClick={handleMessage}
                    className="px-4 py-2 bg-purple-900 flex items-center text-sm gap-2 rounded-lg text-white"
                  >
                    <FaPlus className="inline-block align-middle text-base" />
                    Send Document
                  </button>
                </div>
              )}
            </div>

            <div className="w-full">
              {selectedTab === "required_doc" && <RequiredDocs app={app} />}
              {selectedTab === "sent_doc" && <SentDocs app={app} docs={docs} />}
              {selectedTab === "app_feeds" && <AppFeeds app={app} msg={msg} />}
            </div>
          </div>
        </>
      )}
      {openUpdate && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-100 inter h-auto relative rounded-2xl"
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
              }}
            >
              <div className="flex px-4 py-3 items-center gap-3">
                <img src={info_icon} alt="icon" className="place-self-start" />
                <div className="">
                  <p className="text-sm font-semibold">
                    Update Application Status
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Update this status to keep the student informed and the
                    application progress.
                  </p>

                  <div className="relative mt-3">
                    <select
                      value={newStatus}
                      onChange={handleStatusChange}
                      className="appearance-none border w-full border-gray-300 py-2 px-3 outline-none rounded-lg text-gray-600 text-sm"
                      id=""
                    >
                      <option value="1">Incomplete Documents</option>
                      <option value="2">Processing</option>
                      <option value="3">Application Granted</option>
                    </select>
                    <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
                  </div>
                  {console.log(newStatus)}
                </div>
              </div>

              <div className="mt-4 p-[12px] justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setOpenUpdate(false);
                  }}
                  className="text-sm text-gray-500 py-2 px-4 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 py-2 px-4 rounded-lg text-white text-sm"
                  type="button"
                  onClick={async () => {
                    await handleUpdateStatus();
                    setOpenUpdate(false);
                  }}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {sendDocs && (
        <div style={modalStyles.overlay}>
          <div
            className="w-[550px] p-4 inter relative text-sm"
            style={modalStyles.modal}
          >
            {console.log(app)}
            <form onSubmit={handleSubmit}>
              <p className="text-xl  font-semibold">Upload Document</p>
              <div className="w-full">
                <div className=" w-full mt-5">
                  <label htmlFor="">Name of Document</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Name of Document"
                    className="mt-0.5 w-full text-sm block px-[12px] py-[8px] outline-none border border-gray-200 rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  onChange={(e) => setReqId(e.target.value)}
                  value={reqId}
                  className="hidden"
                />
                <div className=" w-full mt-4">
                  <div className="mt-1 border-1 border-dashed border-gray-300  h-[152px] rounded-lg">
                    <label>
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
                          {file && (
                            <p className="text-xs text-green-600 mt-2">
                              Selected file:{" "}
                              <span className="font-medium">{file.name}</span>
                            </p>
                          )}
                        </div>
                      </div>
                      <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        name="upload-image"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3 border-t flex gap-3 justify-end border-gray-200">
                <button
                  type="button"
                  onClick={() => setSendDocs(false)}
                  className="text-sm text-gray-500 px-4 py-2 border border-gray-200 rounded-lg"
                >
                  Close
                </button>
                <button
                  className="bg-purple-900 py-2 px-4 rounded-lg text-white text-sm"
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {sendMessage && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-138 inter p-[20px] h-auto relative rounded-2xl"
          >
            <div className="w-full flex  items-center gap-3">
              <div className="w-full">
                <p className="text-xl font-semibold">Send Message</p>
                <p className="text-xs text-gray-500 mt-1">
                  Send feedback message to student about this application
                </p>
                <div className=" w-full mt-4">
                  <label htmlFor="">Message</label>
                  <textarea
                    name=""
                    className="mt-0.5 block w-full h-[118px] px-[12px] py-[8px] resize-none outline-none border border-gray-200 text-sm rounded-lg"
                    placeholder=""
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-4 p-[12px] justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSendMessage(false)}
                className="text-sm text-gray-500 py-2 px-4 border border-gray-200 rounded-lg"
              >
                Close
              </button>
              <button
                className="bg-purple-900 py-2 px-4 rounded-lg text-white text-sm"
                type="submit"
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicationDetails;
