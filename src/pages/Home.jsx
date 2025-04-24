import React from "react";
import { Routes, Route } from "react-router-dom";

import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import {
  Dashboard,
  Explore,
  Students,
  Schools,
  CreateSchool,
  SchoolDetails,
  CreateCourse,
  Access,
  Requirements,
  Messages,
  Settings,
  Agents,
  AgentDetails,
  StudentCourse,
  CourseDetails,
} from "../pages";
import { links } from "../data/dummy";
import logo from "../assets/logo/logo.jpg";
import StudentDetails from "./subpages/StudentDetails";

const activeLink =
  "flex items-center text-[14px] inter p-2 pl-5 gap-3 text-purple-900 bg-purple-100 w-full";
const normalLink = "flex items-center text-[14px] inter p-2 pl-5 gap-3 w-full";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="grid grid-cols-[11rem_1fr] p-2 gap-2 h-screen overflow-hidden">
        <div className="bg-white flex flex-col gap-5">
          <div className="flex justify-center items-center ">
            <Link
              to="/"
              className="items-center justify-center tracking-tight dark:text-white"
            >
              <img src={logo} alt="logo" className="w-[100px] mt-10" />
            </Link>
          </div>

          <div className="flex flex-col items-center ">
            <div className="flex items-center text-sm inter p-3 gap-2">
              <CiSearch
                strokeWidth={1}
                className="text-purple-900 h-[20px] w-[20px]"
              />
              <NavLink to="/explore" className="inter text-purple-900">
                Explore Courses
              </NavLink>
            </div>
            {/* Navigation */}
            <div className="flex flex-col items-center w-full">
              {links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {link.icon}
                  <span className="capitalize test-sm inter text-black">
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className=" overflow-y-auto text-black">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/schools/create" element={<CreateSchool />} />
            <Route path="/schools/:id" element={<SchoolDetails />} />
            <Route
              path="/schools/:id/create_course"
              element={<CreateCourse />}
            />
            <Route path="/schools/:id/course" element={<CourseDetails />} />
            <Route path="/requirement" element={<Requirements />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agents/:id" element={<AgentDetails />} />
            <Route path="/access" element={<Access />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/course" element={<StudentCourse />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
