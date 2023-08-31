import styled from "styled-components";

export const Container = styled.div`
  width: 393px;
  height: 852px;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.img`
  width: 393px;
  height: 54px;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrap = styled.img`
  position: absolute;
  width: 393px;
  height: 852px;
  border-radius: 20px;
  z-index: -1;
`;
