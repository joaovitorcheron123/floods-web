import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>MENSAGENS</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} title="Conversas" />
      <SidebarOption Icon={InboxIcon} title="Marcações" />
      <SidebarOption Icon={DraftsIcon} title="Arquivados" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Procurar canal" />
      <SidebarOption Icon={PeopleAltIcon} title="Usuários e grupos" />
      <SidebarOption Icon={FileCopyIcon} title="Procurar arquivos" />
      <SidebarOption Icon={ExpandLessIcon} title="Mostrar menos" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Canais" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Criar sala" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--floods-color);
  flex: 0.3;
  border-top: 1px solid var(--floods-color-secondary);
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--floods-color-secondary);
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-top: 1px solid var(--floods-color-secondary);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--floods-color-secondary);
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
