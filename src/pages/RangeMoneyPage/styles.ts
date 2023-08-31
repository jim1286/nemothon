import styled from "styled-components";

export const ImageWrap = styled.img`
  width: 100%;
  height: 100%;
`;

export const RangeWrap = styled.div`
  width: 350px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(34, 34, 34, 0.8);
`;

export const RangeHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RangeBody = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .ant-input-number-input-wrap {
    padding-right: 12px;
  }
  .ant-input-number-input-wrap > input.ant-input-number-input {
    text-align: right;
  }
  .ant-input-number-input {
    color: white;
  }
`;

export const RangeFooter = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrap = styled.div`
  width: 200px;
  height: 40px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
