import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
	background: #15171c;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: #15171c;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	const sideBarRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, false);
		return () => {
		  document.removeEventListener("click", handleClickOutside, false);
		};
	  }, []);
	
	  const handleClickOutside = event => {
		if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
		  setSidebar(false);
		}
	  };

	return (
		<>
			<div className="sideBarMenu" ref={sideBarRef}>
				<IconContext.Provider value={{ color: "#ffffff" }}>
					<Nav>
						<NavIcon to="#">
							<FaIcons.FaBars
								onClick={showSidebar}
							/>
						</NavIcon>
						<h1
							style={{
								textAlign: "center",
								marginLeft: "200px",
								color: "blue",
							}}
						>
							Task Manager
						</h1>
					</Nav>
					<SidebarNav sidebar={sidebar}>
						<SidebarWrap>
							<NavIcon to="#">
								<AiIcons.AiOutlineClose
									onClick={showSidebar}
								/>
							</NavIcon>
							{SidebarData.map((item, index) => {
								return (
									<SubMenu
										item={item}
										key={index}
									/>
								);
							})}
						</SidebarWrap>
					</SidebarNav>
				</IconContext.Provider>
			</div>
		</>
	);
};

export default Sidebar;
