import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

import { FaPlus } from "react-icons/fa";

import plane_icon from "../../assets/icon/plane_icon.png";
import notification_icon from "../../assets/icon/notification_icon.png";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";

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

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectCourse, setSelectCourse] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCourse = () => navigate(`/schools/${id}/course`);
  const openSelectCourse = () => setSelectCourse(true);
  const createCourse = () => {
    navigate(`/schools/${id}/create_course`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false); // Close the modal
    setShowSuccess(true);
    // You can also send this data to an API here

    // setTimeout(() => setShowSuccess(false), 5000);
  };
  return (
    <>
      <div className=" flex justify-between items-center inter bg-white py-2 px-4 shadow rounded-md">
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

      {/* Header */}
      <div className="flex items-center bg-gray-50 mt-4 gap-3">
        <div
          onClick={() => {
            navigate("/schools/:id");
          }}
          className="h-[56px] flex items-center justify-center w-[44px] rounded-md bg-white"
        >
          <IoIosArrowBack />
        </div>
        <h5 className="h-[56px] flex items-center py-[20px] px-[25px] text-black rounded-md bg-white text-xl font-semibold inter w-full">
          Course Details
        </h5>
      </div>

      <div className="mt-3 inter bg-white rounded-md px-4 py-2">
        <h2 className="text-xl font-semibold">
          Bachelor of Digital Marketing Communication
        </h2>
        <p className="text-gray-600 text-sm mt-1">Bachelor; Co-op; Honours</p>
      </div>

      <div className="rounded-md inter bg-white px-4 py-2 mt-3">
        <div className="flex justify-between items-center">
          <h5 className="text-base font-semibold"> Program Information</h5>
          <button
            type="button"
            className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
          >
            <FaPlus className="text-white text-base" />
            Select Course
          </button>
        </div>
        <div className="inline-block align-middle mt-1 p-2">
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
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-18">
              <p className="text-sm inter w-[143px] ">Location</p>
              <p className="text-sm inter text-gray-700">Ontario, CAN</p>
            </div>
            <div className="flex gap-18">
              <p className="text-sm inter w-[143px] ">Faculty:</p>
              <p className="text-sm inter text-gray-700">Social Sciences</p>
            </div>
            <div className="flex gap-18">
              <p className="text-sm inter w-[143px] ">Length:</p>
              <p className="text-sm inter text-gray-700">4 Year(s) </p>
            </div>
            <div className="flex gap-18">
              <p className="text-sm inter w-[143px] ">Program Type</p>
              <p className="text-sm inter text-gray-700">
                Bachelor; Co-op; Honours
              </p>
            </div>
            <div className="flex gap-18">
              <p className="text-sm inter w-[143px] ">Field of Study</p>
              <div>
                <p className="text-sm inter text-gray-700">
                  Digital Communication and Media/Multimedia
                </p>
                <p className="text-sm inter text-gray-700">
                  Marketing/Marketing Management, General
                </p>
              </div>
            </div>
            <div className="flex gap-18">
              <p className="text-sm inter w-[143px]">Description</p>

              <div className="flex flex-col gap-4">
                <p className="text-sm inter text-justify text-gray-700 max-w-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, pariatur placeat cumque provide Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Placeat assumenda corporis
                  dolorum doloremque, ex ab quos voluptatem! Veritatis nobis
                  nihil nostrum temporibus. Modi blanditiis asperiores
                </p>
                <p className="text-sm inter text-justify text-gray-700 max-w-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, pariatur placeat cumque provide Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Placeat assumenda corporis
                  dolorum doloremque, ex ab quos voluptatem! Veritatis nobis
                  nihil nostrum temporibus. Modi blanditiis asperiores Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Expedita
                  similique autem beatae possimus sapiente, eius dolorem sit
                  odio veritatis praesentium necessitatibus explicabo aut fuga
                  tempora quibusdam suscipit aliquam maiores placeat nihil amet.
                </p>
              </div>
            </div>
            <div className="flex gap-18">
              <p className="text-sm inter w-[143px] ">Application Fee:</p>
              <div>
                <p className="text-sm inter text-gray-700">N150,000</p>
              </div>
            </div>
            <div className="flex gap-18">
              <p className="text-sm inter w-[143px] ">Tuition Fee/Year:</p>
              <div>
                <p className="text-sm inter text-gray-700">N2,350,000</p>
              </div>
            </div>

            <div>
              <h6 className="text-xl inter font-semibold">
                Admission Requirements
              </h6>

              <div className="flex gap-3 mt-3">
                <div
                  style={{ backgroundColor: "#F4EBFF", color: "#582B8D" }}
                  className="flex items-center gap-2 py-2 px-5 rounded-3xl"
                >
                  <CgNotes />
                  <p className="text-sm text-black">O. Level Certificate</p>
                </div>
                <div
                  style={{ backgroundColor: "#F4EBFF", color: "#582B8D" }}
                  className="flex items-center gap-2 py-2 px-5 rounded-3xl"
                >
                  <CgNotes />
                  <p className="text-sm text-black">International Passport</p>
                </div>
                <div
                  style={{ backgroundColor: "#F4EBFF", color: "#582B8D" }}
                  className="flex items-center gap-2 py-2 px-5 rounded-3xl"
                >
                  <CgNotes />
                  <p className="text-sm text-black">High School Certificate</p>
                </div>
                <div
                  style={{ backgroundColor: "#F4EBFF", color: "#582B8D" }}
                  className="flex items-center gap-2 py-2 px-5 rounded-3xl"
                >
                  <CgNotes /> <p className="text-sm text-black">Transcript</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm inter text-gray-700 ">
                  Applicants with international transcripts must provide proof
                  of the subject-specific requirements noted above and may be
                  required to provide proof of language proficiency. Domestic
                  applicants with international transcripts must be evaluated
                  through the International Credential Assessment Service of
                  Canada (ICAS) or World Education Services (WES).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="mt-4 grid grid-cols-[repeat(3,_minmax(309px,_1fr))] p-4 bg-white rounded-lg  gap-4 ">
        <div
          onClick={handleCourse}
          className="h-[428px] bg-white p-3 border-2 border-gray-100 rounded-lg"
        >
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
                <p className="text-sm inter ">Tuition Fee</p>
                <p className="text-sm inter text-gray-700">CAD5,000 / Year</p>
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
            onClick={openSelectCourse}
            className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
          >
            <FaPlus className="text-white text-base" />
            Select Course
          </button>
        </div>
      </div> */}

      {/* {selectCourse && (
        <div style={modalStyles.overlay}>
          <div className="w-[70%] inter h-[90%] " style={modalStyles.modal}>
            <p className="text-xl  font-semibold">
              Select Course for Student(s)
            </p>
            <div className="flex items-start gap-4 mt-4">
              <div className="relative">
                <select
                  name="nationality"
                  className="appearance-none border w-[190px] border-gray-300 outline-none rounded-lg text-gray-600 text-sm mt-0.5 block px-[16px] py-[8px] pr-10"
                  id="nationality"
                >
                  <option value="Nationality">Nationality</option>
                </select>
                <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
              </div>
              <div className="gap-1 flex flex-col">
                <p>Bachelor of Engineering (Automation and Robotics)</p>
                <div className="inline-block align-middle">
                  <img
                    src={fanshawe_logo}
                    className="h-8 w-8 inline-block mr-2"
                    alt="fanshawe_logo"
                  />
                  <div className="inline-block align-middle">
                    <p className="text-sm">Huron University College</p>
                    <p className="text-xs text-gray-600">Ontario, Canada</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-4 items-center gap-3 w-full">
              <div className="relative w-full flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="text-sm  border-1 border-gray-200 w-full p-[7.5px] pl-[38px] py-[10px] rounded-lg outline-none focus:border-purple-400  "
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
                className="text-sm text-white whitespace-nowrap px-6 py-[10px] bg-purple-900 rounded-md"
              >
                Search Student
              </button>
            </div>
            <div className="relative mt-4 overflow-x-auto border-1 border-gray-200 bg-white rounded-lg overflow-hidden">
              <table className="table-auto bg-white w-full inter ">
                <thead className="bg-gray-200 border-gray-200">
                  <tr>
                    <th className="p-3 text-xs font-semibold tracking-wide text-left">
                      Name
                    </th>
                    <th className="w-45 p-3 text-xs font-semibold tracking-wide text-left">
                      Highest Qualification
                    </th>
                    <th className="w-35 p-3 text-xs font-semibold tracking-wide text-left">
                      Select
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="last:rounded-b-lg cursor-default ">
                    <td className="p-3 last:rounded-bl-lg">
                      <div className="inline-block  align-middle">
                        <p className="text-sm">Fanshawe College</p>
                        <p className="text-xs text-gray-600">0096***</p>
                      </div>
                    </td>
                    <td className="p-3 text-sm text-gray-900">
                      <span>BSc.</span>
                    </td>

                    <td className="p-3 text-sm text-gray-900 last:rounded-br-lg">
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
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="py-5 mt-5 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectCourse(false)}
                className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
              >
                Close
              </button>
              <button
                className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => setShowSuccess(true)}
              >
                Select Course(s)
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-100 inter h-auto relative rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <img src={plane_icon} alt="icon" />
              <div className="">
                <p className="text-sm font-semibold">Successful</p>
                <p className="text-xs text-gray-500">
                  You have successfully added the course to the selected
                  student(s)
                </p>
              </div>
            </div>
            <div className="mt-4 p-[12px] justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
              >
                Close
              </button>
              <button
                className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => setShowSuccess(false)}
              >
                Continue Exploring Courses
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default CourseDetails;
