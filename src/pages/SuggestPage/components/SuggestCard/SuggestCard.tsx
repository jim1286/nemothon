import React from "react";
import {
  Body,
  ColumnBar,
  Container,
  Divider,
  Header,
  Label,
  RangeBar,
} from "./styles";
import { Result } from "@/interface";
import { BM, BS } from "@/theme";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { ReactComponent as Bus } from "@/assets/svg/bug.svg";
import { ReactComponent as Location } from "@/assets/svg/location.svg";
import { ReactComponent as Ellipse } from "@/assets/svg/ellipse.svg";
import { SvgIcon } from "@/components";
import { FlexColumn, FlexRow, Spacer } from "@/components/Base";
import { origin } from "@/constant";

interface SuggestCardProps {
  result: Result;
}

const SuggestCard: React.FC<SuggestCardProps> = ({ result }) => {
  return (
    <Container>
      <Header>
        <FlexColumn
          style={{
            width: "90%",
            gap: "5px",
            padding: "5px",
          }}
        >
          <BM>{`주소 : ${result.address}`}</BM>
          <FlexRow
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Label>
              <SvgIcon icon={<Taxi />} />
            </Label>
            <RangeBar />
            <Label style={{ backgroundColor: "#34447F" }}>
              <SvgIcon icon={<Bus />} />
            </Label>
            <RangeBar
              style={{
                backgroundColor: "#34447F",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            />
            <RangeBar
              style={{
                backgroundColor: "#D0D0D0",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            />
          </FlexRow>
        </FlexColumn>
      </Header>
      <Divider style={{ height: "1px" }} />
      <Body>
        <FlexColumn
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "30px",
          }}
        >
          <Label>
            <SvgIcon icon={<Taxi />} />
          </Label>
          <ColumnBar />
          <Label style={{ backgroundColor: "#34447F" }}>
            <SvgIcon icon={<Bus />} />
          </Label>
          <ColumnBar />
          <SvgIcon icon={<Ellipse />} />
          <ColumnBar style={{ height: "30px" }} />
          <SvgIcon icon={<Location />} />
        </FlexColumn>
        <FlexColumn style={{ flex: "1", padding: "0 10px" }}>
          <BM>{origin.address}</BM>
          <BS>{`약 ${result.taxiFee.toLocaleString()}원`}</BS>
          <Spacer space={30} />
          <BM>{result.stationName}</BM>
          <BS>{`약 ${result.taxiFee.toLocaleString()}원`}</BS>
          <Spacer space={25} />
          <BM>{`마지막 정류장`}</BM>
          <Spacer space={25} />
          <BM>{`목적지`}</BM>
        </FlexColumn>
      </Body>
      <Divider />
    </Container>
  );
};

export default SuggestCard;
