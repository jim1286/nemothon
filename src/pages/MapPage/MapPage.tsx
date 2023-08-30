import React, { useEffect, useState } from "react";
import {
  FormWrap,
  InputWrap,
  MapWrap,
  ModalBody,
  RangeFooter,
  TaxiLabel,
} from "./styles";
import { KaKaoMap, PageContainer } from "@/components";
import { Button, Input, InputNumber, Modal, notification } from "antd";
import { BM, BR, H5M } from "@/theme";
import { DestinationsService } from "@/service";
import { origin, routeList } from "@/constant";
import {
  Destination,
  MoneyRange,
  Origin,
  Result,
  getMultiDestinationDirectionsRequest,
} from "@/interface";
import { useNavigate } from "react-router-dom";
import { TaxiFeeUtil } from "@/utils";
import {
  setMoneyRange,
  setResultList,
  useAppDispatch,
  useMoneyRangeListSelector,
} from "@/flux";
import { SearchOutlined } from "@ant-design/icons";
import taxiIcon from "@/assets/taxiIcon.png";
import "./model.css";

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const moneyRange = useMoneyRangeListSelector();
  const [input, setInput] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [money, setMoney] = useState<MoneyRange>({
    minMoney: moneyRange.minMoney,
    maxMoney: moneyRange.maxMoney,
  });

  const handleSearch = () => {
    if (!input) {
      return;
    }

    setAddress(input);
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "NumpadEnter" || e.code === "Enter") {
      handleSearch();
      return;
    }
  };

  const handleClick = async () => {
    try {
      const destinations: Destination[] = [];
      const stationList = routeList.map((route) => route.stationList).flat();

      for (let i = 0; i < 30; i++) {
        destinations.push({
          x: stationList[i].longitude,
          y: stationList[i].latitude,
          key: String(i),
        });
      }

      const originLocation: Origin = {
        x: origin.longitude,
        y: origin.latitude,
      };

      const params: getMultiDestinationDirectionsRequest = {
        origin: originLocation,
        destinations: destinations,
        radius: 10000,
      };

      const response = await DestinationsService.getMultiDestinationDirections(
        params
      );

      const durationList = stationList.map((busStation) => busStation.duration);

      const resultList = response.routes
        .map((route, index) => {
          if (route.result_code === 304) {
            return;
          }

          const taxiFee = TaxiFeeUtil.getTaxiFee(route.summary.distance);
          let duration = 0;

          for (let i = 0; i < index + 1; i++) {
            duration += durationList[i];
          }

          return {
            taxiFee: taxiFee,
            timeReduction: duration - route.summary.duration,
            stationName: stationList[index].name,
            address: stationList[index].address,
          };
        })
        .filter((val) => val);

      dispatch(setResultList(resultList as Result[]));
      navigate("/suggest");
    } catch (error) {
      console.log(error);

      notification.error({
        message: <BR>{`검색 결과가 없습니다.`}</BR>,
        placement: "bottomRight",
      });
    }
  };

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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <PageContainer>
      <FormWrap>
        <Input
          placeholder="목적지를 입력하세요."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button icon={<SearchOutlined />} type="primary" />
        <TaxiLabel onClick={showModal}>
          <img src={taxiIcon} />
          <BM color="white">{`${moneyRange.minMoney.toLocaleString()}원`}</BM>
          <BM color="white">{`~`}</BM>
          <BM color="white">{`${moneyRange.maxMoney.toLocaleString()}원`}</BM>
        </TaxiLabel>
      </FormWrap>
      <MapWrap>
        <KaKaoMap address={address} onClick={handleClick} />
      </MapWrap>
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
            <Button type="primary" onClick={handleOk}>{`완료`}</Button>
          </RangeFooter>
        </ModalBody>
      </Modal>
    </PageContainer>
  );
};

export default MapPage;
