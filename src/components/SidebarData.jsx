import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Stock",
    path: "/reports",
    icon: <AiIcons.AiOutlineStock />,
    cName: "nav-text",
  },
  {
    title: "Stock Files",
    path: "/products",
    icon: <GiIcons.GiFiles />,
    cName: "nav-text",
  },
  {
    title: "Service History Files",
    path: "/",
    icon: <RiIcons.RiFileHistoryFill />,
    cName: "nav-text",
  },
  {
    title: "Appraisal",
    path: "/",
    icon: <BsIcons.BsShieldFillCheck />,
    cName: "nav-text",
  },
  {
    title: "Values",
    path: "/",
    icon: <BsIcons.BsShieldFillPlus />,
    cName: "nav-text",
  },
  {
    title: "Questions",
    path: "/",
    icon: <AiIcons.AiFillQuestionCircle />,
    cName: "nav-text",
  },
  {
    title: "Roles",
    path: "/",
    icon: <RiIcons.RiSoundModuleFill />,
    cName: "nav-text",
  },
  {
    title: "Members",
    path: "/",
    icon: <HiIcons.HiUserGroup />,
    cName: "nav-text",
  },
];
