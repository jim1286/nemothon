import React from "react";
import { Body, ColumnBar, Container, Divider, Header, Label } from "./styles";
import { Result } from "@/interface";
import { BM, BS } from "@/theme";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { ReactComponent as Bus } from "@/assets/svg/bug.svg";
import { ReactComponent as Location } from "@/assets/svg/location.svg";
import { ReactComponent as Ellipse } from "@/assets/svg/ellipse.svg";
import { RangeBar, SvgIcon } from "@/components";
import { FlexColumn, Spacer } from "@/components/Base";
import { response } from "@/constant";

interface SuggestCardProps {
  result: any;
}

const SuggestCard: React.FC<SuggestCardProps> = ({ result }) => {
  return (
    <Container>
      <Header>
        <RangeBar
          taxiFare={result.summary.taxiFare}
          wastedTime={result.summary.wastedTime}
        />
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
          <BM>{response.location.address}</BM>
          <BS>{`약 ${result.summary.taxiFare.toLocaleString()}원`}</BS>
          <Spacer space={30} />
          {/* <BM>{result.summary.stationList[1]}</BM> */}
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
