import { PageContainer } from "@/components";
import {
  RangeWrap,
  RangeHeader,
  RangeBody,
  RangeFooter,
  ButtonWrap,
  InputWrap,
} from "./styles";
import React from "react";
import { H5 } from "@/theme";
import { Button, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";

const RangeMoneyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/map");
  };

  return (
    <PageContainer>
      <RangeWrap>
        <RangeHeader>
          <H5 color="white">{`택시 요금을 설정하세요`}</H5>
        </RangeHeader>
        <RangeBody>
          <InputWrap>
            <InputNumber controls={false} style={{ width: "100px" }} />
            {"~"}
            <InputNumber controls={false} style={{ width: "100px" }} />
          </InputWrap>
        </RangeBody>
        <RangeFooter>
          <ButtonWrap>
            <Button>{`초기화`}</Button>
            <Button type="primary" onClick={handleClick}>{`완료`}</Button>
          </ButtonWrap>
        </RangeFooter>
      </RangeWrap>
    </PageContainer>
  );
};

export default RangeMoneyPage;
