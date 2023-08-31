import React from "react";
import { Body, Container, Header, ImageWrap } from "./styles";
import notch from "@/assets/notch.png";
import white_notch from "@/assets/white_notch.png";

interface PageContainerProps {
  children?: React.ReactNode;
  image?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, image }) => {
  return (
    <Container>
      <ImageWrap src={image} />
      <Header
        src={image ? white_notch : notch}
        style={{ position: "absolute", zIndex: "9999" }}
      />
      <Body>{children}</Body>
    </Container>
  );
};

export default PageContainer;
