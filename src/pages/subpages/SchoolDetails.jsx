import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Loader from "../../components/Loader";
import plane_icon from "../../assets/icon/plane_icon.png";
import notification_icon from "../../assets/icon/notification_icon.png";
import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import { fetchStudents, getCourses } from "../../api";

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

const SchoolDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [intakeYear, setIntakeYear] = useState("");
  const [schoolCourses, setSchoolCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleCourse = () => navigate(`/schools/${id}/course`);

  const openSelectCourse = async (courseId) => {
    setSelectCourse(true);
    setLoading(true);

    try {
      const course = await getCourses(courseId);
      setSelectedCourse(course.data);
    } catch (error) {
      console.error("failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      `${student.first_name} ${student.last_name}`
        .toLowerCase()
        .includes(searchTerm?.toLowerCase()) ||
      student.user_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedIds = formData.getAll("studentIds[]");
    console.log(selectedIds);
  };

  const createCourse = () => {
    navigate(`/schools/${id}/create_course`);
  };

  const getStudents = async () => {
    setLoading(true);
    try {
      const response = await fetchStudents();
      if (response?.status === "ok") {
        console.log(response);
        setStudents(response.data); // adjust path based on real data
      }
    } catch (error) {
      console.error("failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchCourses = async () => {
      try {
        const courses = await getCourses();

        // Filtering only courses belonging to the selected school
        const filteredCourses = courses.data.filter(
          (course) => course.school_id === id
        );

        setSchoolCourses(filteredCourses);
      } catch (error) {
        console.error("failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [id]);

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
          School Details
        </h5>
      </div>

      {/* Search Button */}

      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          {schoolCourses && (
            <div>
              <div className="mt-4 gap-2 bg-white rounded-md shadow p-5 flex flex-col items-center justify-between  w-full">
                <div className="w-full flex justify-between py-4">
                  <div>
                    <img
                      src={schoolCourses[0]?.school_data}
                      className="h-[40px] w-[35px] inline-block mr-4"
                      alt="fanshawe_logo"
                    />
                    <div className="inline-block align-middle">
                      <p className="text-sm capitalize">
                        {schoolCourses[0]?.school_data?.school_name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {schoolCourses[0]?.school_data?.state},{" "}
                        {schoolCourses[0]?.school_data?.country}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={createCourse}
                      className="flex items-center gap-3 text-sm text-white px-7 py-[10px] bg-green-400 rounded-md"
                    >
                      <FaPlus className="text-white text-base" />
                      Create Course
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <div className="relative w-full flex items-center">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="text-sm  border-1 border-gray-200 w-full p-[7.5px] pl-[38px] py-[10px] rounded-lg outline-none focus:border-purple-400  "
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
                    className="text-sm text-white px-12 py-[10px] bg-purple-900 rounded-md"
                  >
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-3 mt-1 w-full">
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
              </div>

              {/* Buttons */}
              <div className="mt-4 grid grid-cols-[repeat(3,_minmax(309px,_1fr))] p-4 bg-white rounded-lg  gap-4 ">
                {schoolCourses.map((course, index) => (
                  <div
                    key={index}
                    className="h-[428px] bg-white p-3 border-2 border-gray-100 rounded-lg"
                  >
                    <p className="inter text-sm capitalize">{course?.title}</p>
                    <div className="inline-block align-middle mt-3">
                      <img
                        src={course?.school_data?.logo}
                        className="h-[40px] w-[35px] inline-block mr-4"
                        alt="logo"
                      />
                      <div className="inline-block align-middle">
                        <p className="text-sm capitalize">
                          {course?.school_data?.school_name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {course?.school_data?.state},{" "}
                          {course?.school_data?.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-3">
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between">
                          <p className="text-sm inter ">Program</p>
                          <p className="text-sm inter text-gray-700">
                            {course?.program_name}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-sm inter ">Location</p>
                          <p className="text-sm inter text-gray-700">
                            {course?.school_data?.state},{" "}
                            {course?.school_data?.country}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-sm inter ">Campus City</p>
                          <p className="text-sm inter text-gray-700">
                            {course?.school_data?.state}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-sm inter ">Duration</p>
                          <p className="text-sm inter text-gray-700">
                            {course?.duration_year} Year(s){" "}
                            {course?.duration_month} Month(s)
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-sm inter ">Tuition Fee</p>
                          <p className="text-sm inter text-gray-700">
                            CAD{course?.tuition_total} / Year
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="border my-4 border-gray-200" />
                    <div className="flex flex-col">
                      <p className="uppercase text-sm font-semibold">intake</p>
                      <div className="flex items-start gap-13 mt-1 w-full">
                        {course?.intake_year.map((intake, intakeIndex) => (
                          <div
                            key={intakeIndex}
                            className="flex-col flex items-center w-auto  gap-1"
                          >
                            <p className="text-left font-normal text-sm">
                              {intake?.year}
                            </p>
                            <span className="inline-block px-1 rounded-lg bg-gray-100 text-sm text-left whitespace-nowrap text-green-700">
                              Open
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openSelectCourse(course?.course_id)}
                      className="flex items-center gap-3 text-sm text-white px-7 py-[10px] mt-4 bg-purple-900 rounded-md"
                    >
                      <FaPlus className="text-white text-base" />
                      Select Course
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {selectCourse && (
        <div style={modalStyles.overlay}>
          {selectedCourse && (
            <div className="w-[70%] inter h-[90%] " style={modalStyles.modal}>
              <p className="text-xl  font-semibold">
                Select Course for Student(s)
              </p>
              <div className="flex items-start gap-4 mt-4">
                <div className="relative">
                  <select
                    name="intakeYear"
                    className="appearance-none border w-[190px] border-gray-300 outline-none rounded-lg text-gray-600 text-sm mt-0.5 block px-[16px] py-[8px] pr-10"
                    id="intakeYear"
                    value={intakeYear}
                    onChange={(e) => setIntakeYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Intake
                    </option>
                    {selectedCourse.intake_year.map((intake, index) => (
                      <option key={index} value={intake.year}>
                        {intake.year}
                      </option>
                    ))}
                  </select>
                  <MdKeyboardArrowDown className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 " />
                </div>
                <div className="gap-1 flex flex-col">
                  <p>{selectedCourse.title}</p>
                  <div className="inline-block align-middle">
                    <img
                      src={selectedCourse.school_data.logo}
                      className="h-8 w-8 inline-block mr-2"
                      alt=""
                    />
                    <div className="inline-block align-middle">
                      <p className="text-sm capitalize">
                        {selectedCourse.school_data.school_name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {selectedCourse.school_data.state},{" "}
                        {selectedCourse.school_data.country}
                      </p>
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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

              <form onSubmit={handleSubmit}>
                <div className="relative mt-4 overflow-y-auto overflow-x-auto max-h-[260px] border-1 border-gray-200 bg-white rounded-lg ">
                  <table className="table-auto bg-white w-full inter overflow-y-auto">
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
                      {students &&
                        filteredStudents.map((student, index) => (
                          <tr
                            key={index}
                            className="last:rounded-b-lg cursor-default "
                          >
                            <td className="p-3 last:rounded-bl-lg">
                              <div className="inline-block  align-middle">
                                <p className="text-sm">
                                  {student.first_name} {student.last_name}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {student.user_id}
                                </p>
                              </div>
                            </td>
                            <td className="p-3 text-sm text-gray-900">
                              <span>{student.degree?.split?.(" - ")[0]}</span>
                            </td>

                            <td className="p-3 text-sm text-gray-900 last:rounded-br-lg">
                              <div className="inline-block align-middle relative h-[14px] w-[14px] ">
                                <input
                                  type="checkbox"
                                  className="appearance-none peer h-full w-full border-1 rounded-sm border-purple-500 text-purple-500"
                                  name="studentIds[]"
                                  id="paid"
                                  value={student.user_id}
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
                    onClick={() => setSelectCourse(false)}
                    className="text-sm text-gray-500 py-1 px-2 border border-gray-200 rounded-lg"
                  >
                    Close
                  </button>
                  <button
                    className="bg-purple-900 py-1 px-2 rounded-lg text-white text-sm"
                    type="submit"
                  >
                    Select Course(s)
                  </button>
                </div>
              </form>
            </div>
          )}
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
      )}
    </>
  );
};

export default SchoolDetails;
