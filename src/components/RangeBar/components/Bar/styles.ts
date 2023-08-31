import styled from "styled-components";

interface BarWrapProps {
  percent: number;
}

export const Label = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #f57c2c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BarWrap = styled.div<BarWrapProps>`
  display: flex;
  justify-content: center;
  width: ${({ percent }) => percent}%;
  min-width: 40px;
  height: 12px;
  background-color: #f57c2c;
`;
