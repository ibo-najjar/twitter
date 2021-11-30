import React from "react";
import SidebarOption from "../sidebarOptions/index";
import { TwitterIcon } from "./SidebarElements";

const Sidebar = () => {
  return (
    <>
      <Sidebar>
        <TwitterIcon className="fab fa-twitter" />
        <SidebarOption />
      </Sidebar>
    </>
  );
};

export default Sidebar;
