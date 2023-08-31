import styled from "styled-components";

export const FormWrap = styled.div`
  width: 310px;
  z-index: 1000;
  top: 120px;
  display: flex;
  position: absolute;
`;

export const MapWrap = styled.div`
  width: 100%;
  height: 100%;

  #react-kakao-maps-sdk-map-container {
    border-radius: 20px;
  }
`;

export const TaxiLabel = styled.div`
  display: inline-flex;
  position: absolute;
  top: 40px;
  padding: 8px;
  gap: 8px;
  height: 32px;
  align-items: center;
  border-radius: 8px;
  background: var(--primary, #f57c2c);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  gap: 10px;

  .ant-input-number-input-wrap {
    padding-right: 12px;
  }
  .ant-input-number-input-wrap > input.ant-input-number-input {
    text-align: right;
  }
`;

export const RangeFooter = styled.div`
  width: 200px;
  height: 40px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
