import React from "react";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";

const MainWrap: React.FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default MainWrap;
