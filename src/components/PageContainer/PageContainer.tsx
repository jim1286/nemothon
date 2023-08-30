import React from "react";
import { Body, Container, Header } from "./styles";
import notch from "@/assets/notch.png";
import white_notch from "@/assets/white_notch.png";

interface PageContainerProps {
  children?: React.ReactNode;
  image?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, image }) => {
  return (
    <Container>
      <img
        src={image}
        width="393px"
        height="750px"
        style={{ borderRadius: "20px", position: "absolute", zIndex: "-1" }}
      />
      <Header
        src={image ? white_notch : notch}
        style={{ position: "absolute", zIndex: "9999" }}
      />
      <Body>{children}</Body>
    </Container>
  );
};

export default PageContainer;
