import styled from "styled-components";

export const Container = styled.div`
  width: 393px;
  height: 750px;
  border: 1px solid;
  overflow-y: auto;
  border-radius: 20px;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 393px;
  height: 54px;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RangeWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const RouteWrap = styled.div`
  flex: 1;
  display: flex;
`;

export const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: #f3f3f3;
`;
