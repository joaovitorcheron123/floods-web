import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: var(--floods-color-secondary);
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--floods-color);
  color: white;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const Name = styled.div`
  > h3 {
    position: relative;
    bottom: 4px;
    left: 10px;
    text-align:center;
    display: block;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Status = styled.div`
  > h3 {
    position: relative;
    top: 12px;
    right: 26px;
    display: flex;
    font-size: 11px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {  > h3 {
    display: flex;
    font-size: 11px;
    font-weight: 400;
    align-items: center;
  }
    font-size: 10px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;