import React, { useState } from "react";
import {
  Container,
  InputWrap,
  ModalBody,
  RangeFooter,
  TaxiLabelWrap,
} from "./styles";
import { SvgIcon } from "..";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { Button, InputNumber, Modal } from "antd";
import { BM, H5M } from "@/theme";
import {
  setMoneyRange,
  useAppDispatch,
  useMoneyRangeListSelector,
} from "@/flux";
import { MoneyRange } from "@/interface";
import "./model.css";

interface TaxiRangeLabelProps {
  style?: React.CSSProperties;
}

const TaxiRangeLabel: React.FC<TaxiRangeLabelProps> = ({ style }) => {
  const moneyRange = useMoneyRangeListSelector();
  const dispatch = useAppDispatch();
  const [money, setMoney] = useState<MoneyRange>({
    minMoney: moneyRange.minMoney,
    maxMoney: moneyRange.maxMoney,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(setMoneyRange(money));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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

  return (
    <Container style={style}>
      <TaxiLabelWrap onClick={showModal}>
        <SvgIcon icon={<Taxi />} />
        <BM color="white">{`${moneyRange.minMoney.toLocaleString()}원`}</BM>
        <BM color="white">{`~`}</BM>
        <BM color="white">{`${moneyRange.maxMoney.toLocaleString()}원`}</BM>
      </TaxiLabelWrap>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={false}
        width={300}
        centered
      >
        <ModalBody>
          <H5M>{`택시 요금을 설정해 주세요`}</H5M>
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
            <BM>{"~"}</BM>
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
          <RangeFooter>
            <Button onClick={handleCancel}>{`취소`}</Button>
            <Button type="primary" onClick={handleOk}>
              {`완료`}
            </Button>
          </RangeFooter>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default TaxiRangeLabel;
