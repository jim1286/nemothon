import React, { useMemo, useState } from "react";
import {
  Body,
  Container,
  Image,
  RangeWrap,
  RouteWrap,
  Divider,
} from "./styles";
import { RangeBar, SvgIcon } from "@/components";
import { FlexColumn } from "@/components/Base";
import { BM } from "@/theme";
import { useClickedInfoSelector } from "@/flux";
import { ModeEnum } from "@/enums";
import { RouteBar, RouteHeader, RouteTitle, TaxiModal } from "./components";
import { ReactComponent as Location } from "@/assets/svg/location.svg";
import white_notch from "@/assets/white_notch.png";
import { nanoid } from "@reduxjs/toolkit";

export interface Click {
  clicked: boolean;
}

const RoutePage: React.FC = () => {
  const clickedInfo = useClickedInfoSelector();
  const stepClickList: Click[] | undefined = useMemo(() => {
    return clickedInfo?.steps.map(() => ({
      clicked: false,
    }));
  }, [clickedInfo]);
  const [clickList, setClickList] = useState(stepClickList);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleDrawer = (index: number) => {
    if (!clickList) {
      return;
    }

    const newClickList = [...clickList];
    newClickList[index].clicked = !clickList[index].clicked;

    setClickList(newClickList);
  };

  return (
    <Container>
      <Image src={white_notch} />
      <RouteHeader />
      <Body>
        <RangeWrap>
          <RangeBar
            taxiFare={clickedInfo?.summary.taxiFare}
            wastedTime={clickedInfo?.summary.wastedTime}
            info={clickedInfo}
          />
        </RangeWrap>
        <Divider />
        <RouteWrap>
          <FlexColumn
            style={{
              alignItems: "center",
              width: "100px",
              padding: "20px 0 20px 20px",
            }}
          >
            {clickedInfo &&
              clickedInfo.steps.map((step, index) => (
                <RouteBar
                  key={nanoid()}
                  index={index}
                  mode={step.mode as ModeEnum}
                  step={step}
                  clickList={clickList}
                />
              ))}
            <SvgIcon icon={<Location />} />
          </FlexColumn>
          <FlexColumn style={{ flex: 1, padding: "20px 20px 20px 0" }}>
            {clickedInfo &&
              clickedInfo.steps.map((step, index) => (
                <RouteTitle
                  key={nanoid()}
                  index={index}
                  step={step}
                  mode={step.mode as ModeEnum}
                  title={step.stationList[0]}
                  sectionTime={step.sectionTime}
                  clickList={clickList}
                  onOpen={handleOpen}
                  onDrawer={handleDrawer}
                />
              ))}
            <BM
              style={{
                height: "30px",
              }}
            >{`목적지`}</BM>
          </FlexColumn>
        </RouteWrap>
      </Body>
      <TaxiModal onOk={handleOk} onCancel={handleCancel} open={open} />
    </Container>
  );
};

export default RoutePage;
