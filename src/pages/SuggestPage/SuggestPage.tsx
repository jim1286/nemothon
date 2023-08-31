import React, { useState } from "react";
import {
  Header,
  Container,
  InputWrap,
  InputContainer,
  CardContainer,
  Body,
  Image,
  Divider,
  Gap,
} from "./styles";
import { Input, Select } from "antd";
import { CloseOutlined, SwapOutlined } from "@ant-design/icons";
import { SuggestCard } from "./components";
import { nanoid } from "@reduxjs/toolkit";
import white_notch from "@/assets/white_notch.png";
import { TaxiRangeLabel } from "@/components";
import { FlexRow, Spacer } from "@/components/Base";
import { response_1, response_2, response_3 } from "@/constant/Response.const";
import { Info } from "@/interface";

const SuggestPage: React.FC = () => {
  const [option, setOption] = useState("");

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setOption(value);
  };

  return (
    <Container>
      <Image src={white_notch} />
      <Body>
        <Header>
          <InputContainer>
            <Spacer space={15} />
            <InputWrap>
              <Input
                placeholder="출발지 주소"
                defaultValue={response_2.location.start}
              ></Input>
              <CloseOutlined />
            </InputWrap>
            <InputWrap>
              <Input
                placeholder="목적지 주소"
                defaultValue={response_2.location.end}
              ></Input>
              <SwapOutlined />
            </InputWrap>
          </InputContainer>
        </Header>
        <FlexRow
          style={{
            width: "100%",
            height: "50px",
            alignItems: "center",
          }}
        >
          <TaxiRangeLabel
            style={{
              top: "257px",
              marginLeft: "20px",
            }}
          />
          <Select
            defaultValue="Total"
            style={{ width: 120, marginLeft: "auto", border: "none" }}
            onChange={handleChange}
            options={[
              { value: "Total", label: "최적 경로순" },
              { value: "Time", label: "최소 시간순" },
              { value: "Fee", label: "최소 요금순" },
            ]}
          />
          <Gap />
        </FlexRow>
        <Divider />
        <CardContainer>
          {response_2.infoList.map((info: Info) => (
            <SuggestCard key={nanoid()} info={info} />
          ))}
        </CardContainer>
      </Body>
    </Container>
  );
};

export default SuggestPage;
