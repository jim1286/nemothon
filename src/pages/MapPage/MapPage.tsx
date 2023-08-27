import React, { useEffect, useState } from "react";
import { FormWrap, MapWrap } from "./styles";
import { KaKaoMap, PageContainer } from "@/components";
import { Button, Input, notification } from "antd";
import { BR } from "@/theme";
import { DestinationsService } from "@/service";
import { suggestionBusRouteList } from "@/constant";
import {
  BusRoute,
  Destination,
  Origin,
  getMultiDestinationDirectionsRequest,
} from "@/interface";
import { useNavigate } from "react-router-dom";

const MapPage: React.FC = () => {
  const navigate = useNavigate();
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
      const busStationList = suggestionBusRouteList.busRouteList
        .map((busRoute) =>
          busRoute.busStationList.map((busStation) => busStation)
        )
        .flat();

      for (let i = 0; i < 30; i++) {
        destinations.push({
          x: busStationList[i].longitude,
          y: busStationList[i].latitude,
          key: String(i),
        });
      }

      const origin: Origin = {
        x: suggestionBusRouteList.origin.longitude,
        y: suggestionBusRouteList.origin.latitude,
      };

      const params: getMultiDestinationDirectionsRequest = {
        origin: origin,
        destinations: destinations,
        radius: 10000,
      };

      const response = await DestinationsService.getMultiDestinationDirections(
        params
      );

      console.log(response.routes);

      // navigate("/suggest");
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
