import styled from "styled-components";

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
`;

export const Header = styled.div`
  width: 100%;
  height: 120px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: #f57c2c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RangeWrap = styled.div`
  width: 100%;
  height: 100px;
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

export const Label = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #f57c2c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnBar = styled.div`
  width: 12px;
  height: 150px;
  background: #777;
`;

export const TaxiLabel = styled.div`
  width: 100px;
  height: 23px;
  border-radius: 10px;
  background-color: #f57c2c;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
`;
