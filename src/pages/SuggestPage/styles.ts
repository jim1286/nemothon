import { styled } from "styled-components";

export const Container = styled.div`
  width: 393px;
  height: 750px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: orange;
`;

export const InputContainer = styled.div`
  width: 90%;
  height: 100px;
  gap: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow-y: auto !important;
`;
