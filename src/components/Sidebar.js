 
import {
  Create as CreateIcon,
  FiberManualRecord as FiberManualRecordIcon,
} from "@material-ui/icons";
import React from "react";
import {SidebarContainer, SidebarHeader, SidebarInfo} from "./Sidebar.style";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Papa Fam HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            MhShoghi
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;