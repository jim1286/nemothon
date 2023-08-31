import React from "react";
import {
  Header,
  Body,
  Container,
  Image,
  RangeWrap,
  RouteWrap,
  Divider,
  Label,
  ColumnBar,
  TaxiLabel,
} from "./styles";
import white_notch from "@/assets/white_notch.png";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { ReactComponent as Bus } from "@/assets/svg/bug.svg";
import { ReactComponent as Left } from "@/assets/svg/left.svg";
import { ReactComponent as Location } from "@/assets/svg/location.svg";
import { ReactComponent as Ellipse } from "@/assets/svg/ellipse.svg";
import { ReactComponent as Close } from "@/assets/svg/close.svg";
import { ReactComponent as Walk } from "@/assets/svg/walk.svg";
import { RangeBar, SvgIcon } from "@/components";
import { Input } from "antd";
import { FlexColumn, FlexRow } from "@/components/Base";
import { BB, BM } from "@/theme";

const RoutePage: React.FC = () => {
  return (
    <Container>
      <Image src={white_notch} />
      <Header>
        <FlexRow
          style={{
            height: "36px",
            width: "90%",
            marginTop: "50px",
          }}
        >
          <SvgIcon icon={<Left />} />
          <Input />
          <SvgIcon icon={<Close />} />
        </FlexRow>
      </Header>
      <Body>
        <RangeWrap>
          <RangeBar />
        </RangeWrap>
        <Divider />
        <RouteWrap>
          <FlexColumn
            style={{
              alignItems: "center",
              width: "100px",
              height: "100%",
              padding: "20px 0 20px 20px",
            }}
          >
            <Label>
              <SvgIcon icon={<Taxi />} />
            </Label>
            <ColumnBar style={{ backgroundColor: "#f57c2c" }} />
            <Label style={{ backgroundColor: "#34447F" }}>
              <SvgIcon icon={<Bus />} />
            </Label>
            <ColumnBar style={{ backgroundColor: "#34447F" }} />
            <Label style={{ backgroundColor: "#777" }}>
              <SvgIcon icon={<Walk />} />
            </Label>
            <ColumnBar style={{ height: "30px" }} />
            <SvgIcon icon={<Location />} />
          </FlexColumn>
          <FlexColumn style={{ flex: 1, padding: "20px 20px 20px 0" }}>
            <FlexRow width="100%">
              <BB>{`택시 승차`}</BB>
              <TaxiLabel>
                <BM color="white">{`카카오T 호출`}</BM>
              </TaxiLabel>
            </FlexRow>
            <BM color="#EB4D33">{`예상 택시비`}</BM>
          </FlexColumn>
        </RouteWrap>
      </Body>
    </Container>
  );
};

export default RoutePage;
