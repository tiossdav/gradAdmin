import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
} from "../pages";
import { links } from "../data/dummy";
import logo from "../assets/logo/logo.jpg";
import StudentDetails from "./subpages/StudentDetails";

const activeLink =
  "flex items-center text-base inter gap-3 text-purple-900 h-[38px]";
const normalLink = "flex items-center text-base inter gap-3 h-[38px] ";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="grid grid-cols-[12rem_1fr] p-4 gap-4 h-screen overflow-hidden">
        <div className="bg-white flex flex-col justify-between">
          <div className="flex justify-center items-center ">
            <Link
              to="/"
              className="items-center justify-center tracking-tight dark:text-white"
            >
              <img src={logo} alt="logo" className="w-[100px] mt-10" />
            </Link>
          </div>

          <div className="flex flex-col items-center mt-4 gap-4 flex-1">
            <div className="flex flex-col w-full px-4 pl-6 gap-2">
              <div className="flex flex-col w-full">
                <div className="flex items-center text-sm inter gap-2">
                  <CiSearch
                    strokeWidth={1}
                    className="text-purple-900 h-[20px] w-[20px]"
                  />
                  <NavLink
                    to="/explore"
                    className="inter text-purple-900 leading-8"
                  >
                    Explore Courses
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col w-full px-4 pl-6  gap-2">
              {links.map((item) => (
                <div className="flex flex-col w-full" key={item.title}>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize text-black-300">
                        {link.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
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
            <Route path="/requirement" element={<Requirements />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agents/:id" element={<AgentDetails />} />
            <Route path="/access" element={<Access />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
