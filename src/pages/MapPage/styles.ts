import styled from "styled-components";

export const Container = styled.div`
  width: 393px;
  height: 750px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrap = styled.div`
  width: 310px;
  z-index: 9999;
  top: 170px;
  display: flex;
  position: absolute;
`;

export const MapWrap = styled.div`
  width: 100%;
  height: 100%;

  #react-kakao-maps-sdk-map-container {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;
