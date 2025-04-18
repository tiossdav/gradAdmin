import { MdDashboard } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiAwardFill } from "react-icons/ri";
import { RiFileEditFill } from "react-icons/ri";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa6";
import { RiFolderKeyholeFill } from "react-icons/ri";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { MdContactPhone } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { LuStickyNote } from "react-icons/lu";
import { VscBellDot } from "react-icons/vsc";
import { LuMessageCircleMore } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";

export const boxData = [
  {
    title: "Total Members",
    count: "56",
    borderColor: "border-blue-400",
  },
  {
    title: "Total Active Applications",
    count: "56",
    borderColor: "border-green-400",
  },
  {
    title: "Total Active LOE/SOP",
    count: "56",
    borderColor: "border-red-400",
  },
  {
    title: "Docs. Pending Approval",
    count: "56",
    borderColor: "border-pink-400",
  },
  {
    title: "Total Schools",
    count: "56",
    borderColor: "border-purple-400",
  },
  {
    title: "Total Courses",
    count: "56",
    borderColor: "border-gray-400",
  },
  {
    title: "Total Countries",
    count: "56",
    borderColor: "border-blue-400",
  },
  {
    title: "Total Online",
    count: "56",
    borderColor: "border-green-400",
  },
];

export const applicantData = [
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Pending",
  },
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Pending",
  },
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Pending",
  },
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Pending",
  },
];

export const applicantionData = [
  {
    member: "Beverely Grindwater",
    course: "BSc. Economics",
    school: "Name of University",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Pending",
    color: "text-gray-300",
  },
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    school: "University of California, Berkeley",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Pending",
    color: "text-gray-300",
  },
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    school: "Name of University",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Processing",
    color: "text-yellow-500",
  },
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    school: "Name of University",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Processing",
    color: "text-yellow-500",
  },
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    school: "Name of University",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Application sent",
    color: "text-blue-500",
  },
  {
    member: "John Afolabi",
    course: "BSc. Economics",
    school: "Name of University",
    applicationFee: "$20",
    tuitionDeposit: "$2,000",
    yearlyTuition: "$20,000",
    status: "Offer Granted",
    color: "text-green-500",
  },
];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <MdDashboard size={20} />,
      },
    ],
  },

  {
    title: "Students",
    links: [
      {
        name: "students",
        icon: <RiAccountBoxFill size={20} />,
      },
    ],
  },
  {
    title: "Schools",
    links: [
      {
        name: "schools",
        icon: <RiAwardFill size={20} />,
      },
    ],
  },
  {
    title: "Requirement",
    links: [
      {
        name: "requirement",
        icon: <BiSolidCreditCardFront size={20} />,
      },
    ],
  },
  {
    title: "Messages",
    links: [
      {
        name: "messages",
        icon: <BiSolidCreditCardFront size={20} />,
      },
    ],
  },
  {
    title: "Agents",
    links: [
      {
        name: "agents",
        icon: <FaHandshake size={20} />,
      },
    ],
  },
  {
    title: "Access Control",
    links: [
      {
        name: "access",
        icon: <RiFolderKeyholeFill size={20} />,
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        name: "settings",
        icon: <PiCurrencyDollarFill size={20} />,
      },
    ],
  },
];

export const memberLinks = [
  {
    section: "Top",
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <FiHome />,
      },
    ],
  },
  {
    section: "Top",
    title: "Schools",
    links: [
      {
        name: "schools&course",
        icon: <FiLayers />,
      },
    ],
  },
  {
    section: "Top",
    title: "Applications",
    links: [
      {
        name: "applications",
        icon: <AiOutlineAppstore />,
      },
    ],
  },
  {
    section: "Top",
    title: "Credentials",
    links: [
      {
        name: "credentials",
        icon: <LuStickyNote />,
      },
    ],
  },
  {
    section: "Bottom",
    title: "Notifications",
    links: [
      {
        name: "notifications",
        icon: <VscBellDot />,
      },
    ],
  },
  {
    section: "Bottom",
    title: "Messages",
    links: [
      {
        name: "messages",
        icon: <LuMessageCircleMore />,
      },
    ],
  },
  {
    section: "Bottom",
    title: "Settings",
    links: [
      {
        name: "requirement",
        icon: <VscSettings />,
      },
    ],
  },
];
