// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
		title: "Welcome",
		path: "/",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
    {
		title: "Task Manager",
		path: "/tasks",
		icon: <FaIcons.FaTasks />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Schedule Calendar",
		path: "/schedule/calendar",
		icon: <FaIcons.FaTasks />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
    {
        title: "Profile",
        path: "/profile",
        icon: <MdIcons.MdAccountTree />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Account",
                path: "/profile/account",
                icon: <RiIcons.RiProfileLine />,
            },
            {
                title: "Settings",
                path: "/profile/settings",
                icon: <IoIcons.IoIosSettings />,
            },
        ],
    },
    {
		title: "About Us",
		path: "/about-us",
		icon: <FcIcons.FcAbout />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "Support",
		path: "/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];
