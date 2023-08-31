import { PageContainer } from "@/components";
import {
  RangeWrap,
  RangeHeader,
  RangeBody,
  RangeFooter,
  ButtonWrap,
  InputWrap,
} from "./styles";
import React, { useState } from "react";
import { BM, H5M } from "@/theme";
import { Button, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import taxi from "@/assets/taxi.jpeg";
import { MoneyRange } from "@/interface";
import { setMoneyRange, useAppDispatch } from "@/flux";

const RangeMoneyPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [money, setMoney] = useState<MoneyRange>({
    minMoney: 4800,
    maxMoney: 100000,
  });

  const handleClick = () => {
    dispatch(setMoneyRange(money));
    navigate("/map");
  };

  const handleMinMoney = (value: number | null) => {
    if (value === null) {
      setMoney({ ...money, minMoney: 4800 });
      return;
    }

    setMoney({ ...money, minMoney: value });
  };

  const handleMaxMoney = (value: number | null) => {
    if (value === null) {
      setMoney({ ...money, maxMoney: money.minMoney + 1000 });
      return;
    }

    setMoney({ ...money, maxMoney: value });
  };

  const handleReset = () => {
    setMoney({
      minMoney: 4800,
      maxMoney: 100000,
    });
  };

  return (
    <PageContainer image={taxi}>
      <RangeWrap>
        <RangeHeader>
          <H5M color="white">{`택시 요금을 설정해 주세요`}</H5M>
        </RangeHeader>
        <RangeBody>
          <InputWrap>
            <InputNumber
              controls={false}
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              min={4800}
              max={money.maxMoney - 1000}
              defaultValue={money.minMoney}
              value={money.minMoney}
              onChange={handleMinMoney}
            />
            <BM color="white">{"~"}</BM>
            <InputNumber
              controls={false}
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              min={money.minMoney + 1000}
              max={100000}
              defaultValue={money.maxMoney}
              value={money.maxMoney}
              onChange={handleMaxMoney}
            />
          </InputWrap>
        </RangeBody>
        <RangeFooter>
          <ButtonWrap>
            <Button onClick={handleReset}>{`초기화`}</Button>
            <Button type="primary" onClick={handleClick}>{`완료`}</Button>
          </ButtonWrap>
        </RangeFooter>
      </RangeWrap>
    </PageContainer>
  );
};

export default RangeMoneyPage;
