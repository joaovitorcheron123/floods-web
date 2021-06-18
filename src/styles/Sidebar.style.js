import styled from "styled-components";

export const SidebarContainer = styled.div`
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

export const SidebarHeader = styled.div`
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