import React, { useEffect, useState } from "react";
import { FormWrap, MapWrap } from "./styles";
import { KaKaoMap, PageContainer } from "@/components";
import { Button, Input, notification } from "antd";
import { BR } from "@/theme";
import { DestinationsService } from "@/service";
import { origin, routeList } from "@/constant";
import {
  Destination,
  Origin,
  Result,
  getMultiDestinationDirectionsRequest,
} from "@/interface";
import { useNavigate } from "react-router-dom";
import { TaxiFeeUtil } from "@/utils";
import { setResultList, useAppDispatch } from "@/flux";

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");

  const handleSearch = () => {
    if (!input) {
      return;
    }

    setAddress(input);
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
        <Button onClick={handleClick}>{"검색"}</Button>
      </FormWrap>
      <MapWrap>
        <KaKaoMap address={address} onClick={handleClick} />
      </MapWrap>
    </PageContainer>
  );
};

export default MapPage;
