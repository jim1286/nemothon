import styled from "styled-components";

interface BarProps {
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

export const Bar = styled.div<BarProps>`
  display: flex;
  justify-content: center;
  width: ${({ percent }) => percent}%;
  min-width: 40px;
  height: 12px;
  background-color: #f57c2c;
`;
