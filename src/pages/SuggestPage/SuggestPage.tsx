import React from "react";
import {
  Header,
  Container,
  InputWrap,
  InputContainer,
  CardContainer,
  Body,
  Image,
} from "./styles";
import { Input } from "antd";
import { CloseOutlined, SwapOutlined } from "@ant-design/icons";
import { useResultListSelector } from "@/flux";
import { SuggestCard } from "./components";
import { nanoid } from "@reduxjs/toolkit";
import iPhone_Header from "@/assets/iPhone_Header.png";
import iPhone_Icon from "@/assets/iPhone_Icon.png";

const SuggestPage: React.FC = () => {
  const resultList = useResultListSelector();

  return (
    <Container>
      <Image src={iPhone_Header} />
      <Image src={iPhone_Icon} style={{ position: "absolute" }} />
      <Body>
        <Header>
          <InputContainer>
            <InputWrap>
              <Input placeholder="출발지 주소"></Input>
              <CloseOutlined />
            </InputWrap>
            <InputWrap>
              <Input placeholder="목적지 주소"></Input>
              <SwapOutlined />
            </InputWrap>
          </InputContainer>
        </Header>
        <CardContainer>
          {resultList.map((result) => (
            <SuggestCard key={nanoid()} result={result} />
          ))}
        </CardContainer>
      </Body>
    </Container>
  );
};

export default SuggestPage;
