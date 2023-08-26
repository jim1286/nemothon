import React from "react";
import { Container } from "./styles";

interface PageContainerProps {
  children?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
