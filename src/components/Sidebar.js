import React from "react";

import { SidebarContainer, SidebarHeader, SidebarInfo } from "../styles/Sidebar.style";

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
import { /*auth,*/ db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
//import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));
  //const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>MENSAGENS</h2>
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

