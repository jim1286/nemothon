import { styled } from "styled-components";

export const Container = styled.div`
  width: 393px;
  height: 750px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

export const Image = styled.img`
  position: absolute;
  width: 393px;
  height: 54px;
  z-index: 1000;
`;

export const Body = styled.div`
  width: 393px;
  height: 750px;

  .ant-select-selector {
    border: none !important;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 150px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f57c2c;
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
  width: 99%;
  height: 485px;
  overflow-y: auto;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const Divider = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: 3px;
`;

export const SelectWrap = styled.div`
  width: 100%;

  background-color: rebeccapurple;
`;

export const Gap = styled.div`
  width: 10px;
`;
