import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IoIosCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { LuPlus } from "react-icons/lu";

import plane_icon from "../../assets/icon/plane_icon.png";
import notification_icon from "../../assets/icon/notification_icon.png";
import redinfo from "../../assets/icon/redinfo.jpg";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import { createCourse, fetchProgramTypes, fetchRequirements } from "../../api";

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
    borderRadius: "14px",
  },
};

const CreateCourse = () => {
  const { id: schoolId } = useParams();
  const navigate = useNavigate();

  const [programTypes, setProgramTypes] = useState([]);
  const [fetchedRequirement, setFetchedRequirement] = useState([]);
  const [selectedCheckboxRequirement, setSelectedCheckboxRequirement] =
    useState([]);
  const [selectedCheckboxRequired, setSelectedCheckboxRequired] = useState([]);

  const [title, setTitle] = useState("");
  const [program, setProgram] = useState("");
  const [faculty, setFaculty] = useState("");
  const [apptFee, setApptFee] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [description, setDescription] = useState("");
  const [tuitionDeposit, setTuitionDeposit] = useState("");
  const [tuitionTotal, setTuitionTotal] = useState("");
  const [durationYear, setDurationYear] = useState("");
  const [durationMonth, setDurationMonth] = useState("");
  const [requirementNote, setRequirementNote] = useState("");
  const [requiredDocuments, setRequiredDocuments] = useState([]);

  const [intakeYear, setIntakeYear] = useState("");
  const [intakeMonth, setIntakeMonth] = useState("");
  const [intakeStatus, setIntakeStatus] = useState("");

  const [intakeData, setIntakeData] = useState([]);

  const [openIntake, setOpenIntake] = useState(false);
  const [openEditIntake, setOpenEditIntake] = useState(false);
  const [openRequirement, setOpenRequirement] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const addRequirement = () => setOpenRequirement(true);
  const addIntake = () => setOpenIntake(true);
  const editIntake = () => setOpenEditIntake(true);
  const deleteIntake = () => setShowDelete(true);

  const handleCreateSession = () => {
    // Create a new session object
    const newSession = {
      year: intakeYear,
      month: intakeMonth,
      status: intakeStatus,
    };
    // Append the new session to the list
    setIntakeData((prev) => [...prev, newSession]);

    // 🔹 Reset the modal values
    setIntakeYear("");
    setIntakeMonth("");
    setIntakeStatus("");
    // Close the modal
    setOpenIntake(false);
  };

  const handleConfirmRequirements = () => {
    console.log("Selected Requirements:", selectedCheckboxRequirement);
    console.log("Required Requirements:", selectedCheckboxRequired);

    // Map through the fetched requirements and filter only the selected ones
    const updatedList = fetchedRequirement
      .filter((req) => selectedCheckboxRequirement.includes(req.req_id))
      .map((req) => ({
        ...req,
        required: selectedCheckboxRequired.includes(req.req_id),
      }));

    // Update the state with the mapped list
    setRequiredDocuments(updatedList);
    setOpenRequirement(false);
    setShowSuccess(true);

    // Clear the temporary states
    // setSelectedRequirement([]);
    // setSelectedRequired([]);
  };

  const handleCheckboxChange = (e, type) => {
    const { value, checked } = e.target;

    if (type === "selected") {
      setSelectedCheckboxRequirement((prev) =>
        checked ? [...prev, value] : prev.filter((id) => id !== value)
      );
    }

    if (type === "required") {
      setSelectedCheckboxRequired((prev) =>
        checked ? [...prev, value] : prev.filter((id) => id !== value)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the intake sessions
    const intakeSessions = intakeData.map((session) => ({
      year: `${session.year}-${session.month}`,
      status: session.status,
    }));

    // Prepare the requirements
    const formattedRequirements = requiredDocuments.map((doc) => ({
      req_id: doc.req_id, // Make sure you have `id` in your `requiredDocuments`
      is_required: doc.required,
    }));

    // Prepare the form data object
    const formData = {
      school_id: schoolId, // Make sure you have this from your state or props
      title,
      program_id: program,
      faculty,
      appt_fee: apptFee,
      tuition_deposit: tuitionDeposit,
      tuition_total: tuitionTotal,
      duration_year: durationYear,
      duration_month: durationMonth,
      grade_level: gradeLevel,
      intake_year: intakeSessions,
      description,
      requirement: formattedRequirements,
      requirement_note: requirementNote,
    };

    console.log("Payload Data:", formData);

    // Send the data to the server
    try {
      const response = await createCourse(formData);
      console.log("Course Created Successfully:", response);
    } catch (error) {
      console.error("Course Creation Failed:", error);
      alert("Failed to create course.");
    }
  };

  console.log("Required Documents:", requiredDocuments);

  useEffect(() => {
    // Fetch program types based on school ID
    const fetchPrograms = async () => {
      try {
        const response = await fetchProgramTypes();
        const data = response.data;
        setProgramTypes(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching program types:", error);
      }
    };

    fetchPrograms();
  }, [schoolId]);

  useEffect(() => {
    // Fetch program types based on school ID
    const getRequirements = async () => {
      try {
        const response = await fetchRequirements();
        const data = response.data;
        setFetchedRequirement(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching program types:", error);
      }
    };

    getRequirements();
  }, []);

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

      {/* Header */}
      <div className="flex items-center bg-gray-50 mt-4 gap-3">
        <div
          onClick={() => {
            navigate("/schools");
          }}
          className="h-[63px] flex items-center justify-center w-[44px] rounded-md bg-white"
        >
          <IoIosArrowBack />
        </div>
        <h5 className="h-[63px] flex items-center py-[20px] px-[25px] text-black rounded-md bg-white text-xl font-semibold inter w-full">
          Create Course
        </h5>
      </div>

      <div className="bg-white py-[40px] px-[32px] mt-[20px] rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <div className="flex gap-3 mt-4 w-full">
              <div className=" w-full">
                <label className="text-sm" htmlFor="program_type">
                  Program Type
                </label>
                <div className="relative w-full">
                  <select
                    name="program_type"
                    className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                    id="program_type"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                  >
                    <option value="Select">Select</option>
                    {programTypes.map((program) => (
                      <option key={program._id} value={program.id}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                  <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                </div>
              </div>

              <div className=" w-full">
                <label className="text-sm" htmlFor="faculty">
                  Faculty
                </label>
                <input
                  type="text"
                  name="faculty"
                  id="faculty"
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  placeholder="Faculty"
                  className="mt-0.5 block w-full px-[12px] py-[8px] border border-gray-200 text-sm rounded-lg"
                />
                <input
                  type="text"
                  name="schoolId"
                  id="schoolId"
                  defaultValue={schoolId}
                  className="hidden"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="text-sm" htmlFor="course">
                Course Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Course Title"
                className="mt-0.5 block w-full text-sm px-[12px] py-[8px] border border-gray-200 rounded-lg"
              />
            </div>
            <div className="flex gap-3 flex-wrap w-full mt-4">
              <div className="">
                <label className="text-sm" htmlFor="">
                  Application Fee
                </label>
                <input
                  type="text"
                  value={apptFee}
                  onChange={(e) => setApptFee(e.target.value)}
                  name="application_fee"
                  className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                />
              </div>
              <div className="">
                <label className="text-sm" htmlFor="">
                  Tuition Deposit
                </label>
                <input
                  type="text"
                  name="tuition_deposit"
                  value={tuitionDeposit}
                  onChange={(e) => setTuitionDeposit(e.target.value)}
                  className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                />
              </div>
              <div className="">
                <label className="text-sm" htmlFor="">
                  Total Tuition Cost
                </label>
                <input
                  type="text"
                  name="tuition_total"
                  value={tuitionTotal}
                  onChange={(e) => setTuitionTotal(e.target.value)}
                  className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                />
              </div>
              <div className="">
                <label className="text-sm" htmlFor="">
                  Grade Requirement (%)
                </label>
                <input
                  type="text"
                  name="g_req"
                  value={gradeLevel}
                  onChange={(e) => setGradeLevel(e.target.value)}
                  className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                />
              </div>
              <div className="">
                <label className="text-sm" htmlFor="">
                  Duration Year(s)
                </label>
                <input
                  type="text"
                  name="d_year"
                  value={durationYear}
                  onChange={(e) => setDurationYear(e.target.value)}
                  className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                />
              </div>
              <div className="">
                <label className="text-sm" htmlFor="">
                  Duration Month(s)
                </label>
                <input
                  type="text"
                  name="d_month"
                  value={durationMonth}
                  onChange={(e) => setDurationMonth(e.target.value)}
                  className="mt-0.5 block w-full px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-4 w-full">
            {intakeData.length > 0
              ? intakeData.map((session, index) => (
                  <div
                    key={index}
                    className="flex-col flex items-start w-auto gap-1"
                  >
                    <div className="text-left flex items-center gap-2 font-normal text-sm">
                      {new Date(
                        `${session.year}-${session.month}-01`
                      ).toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {session.year}
                      <IoSettingsOutline onClick={() => editIntake(index)} />
                    </div>
                    <span className="inline-block px-1 rounded-lg bg-gray-100 text-sm text-left whitespace-nowrap text-green-700">
                      {session.status === "2"
                        ? "Open"
                        : session.status === "1"
                        ? "Opening Soon"
                        : "Not Open"}
                    </span>
                  </div>
                ))
              : "Select Intake Date"}

            {openIntake && (
              <div style={modalStyles.overlay}>
                <div
                  className="w-[550px] inter h-[242px] p-5"
                  style={modalStyles.modal}
                >
                  <p className="text-xl  font-semibold">Add Intake Session</p>

                  <div className="flex gap-4 mt-[18px]">
                    <div className=" w-full">
                      <label className="text-sm" htmlFor="">
                        Year
                      </label>
                      <div className="relative w-full">
                        <select
                          name=""
                          value={intakeYear}
                          onChange={(e) => setIntakeYear(e.target.value)}
                          className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        >
                          <option value="Select">Select</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                        </select>
                        <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                      </div>
                    </div>
                    <div className=" w-full">
                      <label className="text-sm" htmlFor="">
                        Month
                      </label>
                      <div className="relative w-full">
                        <select
                          name=""
                          value={intakeMonth}
                          onChange={(e) => setIntakeMonth(e.target.value)}
                          className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        >
                          <option value="">Select</option>
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>{" "}
                        </select>
                        <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                      </div>
                    </div>
                    <div className=" w-full">
                      <label className="text-sm" htmlFor="">
                        Status
                      </label>
                      <div className="relative w-full">
                        <select
                          name=""
                          value={intakeStatus}
                          onChange={(e) => setIntakeStatus(e.target.value)}
                          className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        >
                          <option value="Select" disabled>
                            Select
                          </option>
                          <option value="0">Not Open</option>
                          <option value="1">Opening Soon</option>
                          <option value="2">Open</option>
                        </select>
                        <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                      </div>
                    </div>
                  </div>

                  <div className="py-5 mt-5 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setOpenIntake(false);
                      }}
                      className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                    >
                      Close
                    </button>
                    <button
                      className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                      type="button"
                      onClick={handleCreateSession}
                    >
                      Create Intake Session
                    </button>
                  </div>
                </div>
              </div>
            )}
            {openEditIntake && (
              <div style={modalStyles.overlay}>
                <div
                  className="w-[550px] inter h-[242px] p-5"
                  style={modalStyles.modal}
                >
                  <p className="text-xl  font-semibold">Add Intake Session</p>

                  <div className="flex gap-4 mt-[18px]">
                    <div className=" w-full">
                      <label className="text-sm" htmlFor="">
                        Year
                      </label>
                      <div className="relative w-full">
                        <select
                          name=""
                          className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        >
                          <option value="Select">Select</option>
                        </select>
                        <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                      </div>
                    </div>
                    <div className=" w-full">
                      <label className="text-sm" htmlFor="">
                        Month
                      </label>
                      <div className="relative w-full">
                        <select
                          name=""
                          className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        >
                          <option value="Select">Select</option>
                        </select>
                        <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                      </div>
                    </div>
                    <div className=" w-full">
                      <label className="text-sm" htmlFor="">
                        Status
                      </label>
                      <div className="relative w-full">
                        <select
                          name=""
                          className="appearance-none border border-gray-300 outline-none w-full rounded-lg text-gray-600 text-sm mt-0.5 block px-[12px] py-[8px] pr-10"
                        >
                          <option value="Select">Open</option>
                          <option value="Opening Soon">Opening Soon</option>
                          <option value="Not Open">Not Open</option>
                          <option value="Closed">Closed</option>
                        </select>
                        <MdKeyboardArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 " />
                      </div>
                    </div>
                  </div>

                  <div className="py-5 mt-5 border-t-2 border-gray-200 w-full flex items-center justify-between">
                    <div className="">
                      <button
                        type="button"
                        onClick={deleteIntake}
                        className="text-red-500 border border-red-500 flex items-center gap-2 py-2 px-3 rounded-lg text-sm"
                      >
                        <LuTrash2 />
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setOpenEditIntake(false);
                        }}
                        className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                      >
                        Close
                      </button>
                      <button
                        className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                        type="submit"
                        onClick={() => setShowSuccess(true)}
                      >
                        Update Intake Session
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={addIntake}
            className="flex items-center gap-1 text-sm text-black px-7 py-[10px] mt-4 bg-white rounded-md"
          >
            <LuPlus strokeWidth={2.5} className="text-black text-base" />
            Add Intake Session
          </button>
          <div className="mt-4">
            <label className="text-sm" htmlFor="">
              Program Description
            </label>
            <textarea
              name=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none outline-none mt-0.5 block w-full h-[177px] px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
              id=""
              placeholder="Description"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={addRequirement}
            className="flex items-center gap-1 text-sm text-white px-7 py-[10px] mt-4 bg-green-400 rounded-md"
          >
            <LuPlus
              strokeWidth={3}
              size={18}
              className="text-white text-base"
            />
            Add Requirement Documents
          </button>

          <div className="mt-4 flex flex-wrap gap-3">
            {requiredDocuments.map((doc, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#F4EBFF" }}
                className="py-2 px-4 w-[125px] rounded-lg whitespace-nowrap"
              >
                <p className="text-sm uppercase">{doc.name}</p>
                {doc.required ? (
                  <p className="text-xs text-red-500">Required</p>
                ) : (
                  <p className="text-xs text-gray-600">Optional</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label className="text-sm" htmlFor="">
              Requirement Note
            </label>
            <textarea
              name=""
              className="resize-none outline-none mt-0.5 block w-full h-[87px] px-[12px] py-[8px] text-sm border border-gray-200 rounded-lg"
              id="requirement_note"
              value={requirementNote}
              onChange={(e) => setRequirementNote(e.target.value)}
              placeholder="Extra note for requirement"
            ></textarea>
          </div>

          <button
            className="bg-purple-900 mt-4 py-[8px] px-4 rounded-lg text-white text-sm"
            type="submit"
          >
            Create Course
          </button>
        </form>
      </div>

      {openRequirement && (
        <div style={modalStyles.overlay}>
          <div
            className="w-[871px] inter h-[610px] p-5"
            style={modalStyles.modal}
          >
            <p className="text-xl  font-semibold">Requirements</p>

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
                className="text-sm text-white  px-6 py-[10px] bg-purple-900 rounded-md"
              >
                Search Student
              </button>
            </div>
            {fetchedRequirement && (
              <div>
                <div className="relative mt-4 overflow-x-auto overflow-y-auto max-h-[300px] border-1 border-gray-200 bg-white rounded-lg overflow-hidden">
                  <table className="table-auto bg-white w-full inter overflow-y-auto">
                    <thead className="bg-gray-100 border-gray-200">
                      <tr>
                        <th className="p-3 text-xs font-semibold tracking-wide text-left">
                          Name
                        </th>
                        <th className="w-45 p-3 text-xs font-semibold tracking-wide text-left">
                          Select
                        </th>
                        <th className="w-35 p-3 text-xs font-semibold tracking-wide text-left">
                          Required
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {fetchedRequirement.map((req) => (
                        <tr
                          key={req?.req_id}
                          className="last:rounded-b-lg cursor-default "
                        >
                          <td className="p-3 last:rounded-bl-lg">
                            <span className="uppercase">{req?.name}</span>
                          </td>
                          <td className="p-3 text-sm text-gray-900">
                            <div className="relative inline-block h-[14px] w-[14px] align-middle pr-2">
                              <input
                                type="checkbox"
                                className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                                name="paid"
                                value={req?.req_id}
                                checked={selectedCheckboxRequirement.includes(
                                  req.req_id
                                )}
                                onChange={(e) =>
                                  handleCheckboxChange(e, "selected")
                                }
                                id="paid"
                              />
                              <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                          </td>

                          <td className="p-3 text-sm text-gray-900 last:rounded-br-lg">
                            <div className="relative inline-block h-[14px] w-[14px] align-middle pr-2">
                              <input
                                type="checkbox"
                                className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                                name="paid"
                                value={req?.req_id}
                                checked={selectedCheckboxRequired.includes(
                                  req.req_id
                                )} // 👈 This will reflect checked state
                                onChange={(e) =>
                                  handleCheckboxChange(e, "required")
                                }
                                id="paid"
                              />
                              <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="py-5 mt-5 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenRequirement(false);
                    }}
                    className="text-sm text-gray-500 p-2 border border-gray-200 rounded-lg"
                  >
                    Close
                  </button>
                  <button
                    className="bg-purple-900 p-2 rounded-lg text-white text-sm"
                    type="submit"
                    onClick={handleConfirmRequirements}
                  >
                    Confirm Requirements
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showSuccess && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-100 inter h-auto relative rounded-2xl"
          >
            <div className="p-3 flex items-center gap-3">
              <img src={plane_icon} alt="icon" />
              <div className="">
                <p className="text-sm font-semibold">
                  Course Successful Created
                </p>
                <p className="text-xs text-gray-500">
                  You have successfully created a course student(s)
                </p>
              </div>
            </div>
            <div className="p-3 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => {
                  setShowSuccess(false);
                  setOpenRequirement(false);
                }}
              >
                Ok, Continue to Courses
              </button>
            </div>
          </div>
        </div>
      )}
      {showDelete && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-100 inter h-auto relative rounded-2xl"
          >
            <div className="p-3 flex items-center gap-3">
              <img src={redinfo} alt="icon" />
              <div className="">
                <p className="text-sm font-semibold">Remove Intake?</p>
                <p className="text-xs text-gray-500">
                  This Intake Session will be removed from this course
                </p>
              </div>
            </div>
            <div className="p-3 justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => {
                  setShowDelete(false);
                  setOpenEditIntake(false);
                }}
              >
                Ok, Continue to Courses
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateCourse;
