import { styled } from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 100%;
`;

export const Divider = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: 7px;
`;

export const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  height: 230px;
  width: 100%;
  padding: 20px;
  display: flex;
`;

export const Label = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #f57c2c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RangeBar = styled.div`
  width: 50%;
  height: 12px;
  background-color: #f57c2c;
`;

export const ColumnBar = styled.div`
  width: 1px;
  height: 40px;
  background: #777;
`;
