import React from "react";
import {
  Header,
  Container,
  InputWrap,
  InputContainer,
  CardContainer,
} from "./styles";
import { Input } from "antd";
import { CloseOutlined, SwapOutlined } from "@ant-design/icons";
import { useResultListSelector } from "@/flux";
import { SuggestCard } from "./components";
import { nanoid } from "@reduxjs/toolkit";

const SuggestPage: React.FC = () => {
  const resultList = useResultListSelector();

  return (
    <Container>
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
    </Container>
  );
};

export default SuggestPage;
