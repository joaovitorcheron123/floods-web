import styled from "styled-components";

export const SidebarContainer = styled.div`
  color: #5f5f5f;
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

export const SidebarHeader = styled.div`
  display: flex;
  border-top: 1px solid var(--floods-color-secondary);
  padding: 13px;
  color: #535353;

  > .MuiSvgIcon-root {
    padding: 8px;
    color:  #18ac52;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }

  :hover > .MuiSvgIcon-root {
    cursor: pointer;
    opacity: 0.9;
    border-radius: 50%;
    color: #18ac52;
    background-color: #a4ffc8;
  }
`;

export const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    position: relative;
    top: 10px;
    left: 10px;
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
`;