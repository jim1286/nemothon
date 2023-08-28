import React from "react";
import { Body, Container, Header } from "./styles";
import iPhone_Header from "@/assets/iPhone_Header.png";
import iPhone_Icon from "@/assets/iPhone_Icon.png";

interface PageContainerProps {
  children?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Container>
      <Header src={iPhone_Header} />
      <Header src={iPhone_Icon} style={{ position: "absolute" }} />
      <Body>{children}</Body>
    </Container>
  );
};

export default PageContainer;
