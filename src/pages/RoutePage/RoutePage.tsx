import React, { useState } from "react";
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
  RangeFooter,
} from "./styles";
import white_notch from "@/assets/white_notch.png";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { ReactComponent as Bus } from "@/assets/svg/bug.svg";
import { ReactComponent as Left } from "@/assets/svg/left.svg";
import { ReactComponent as Location } from "@/assets/svg/location.svg";
import { ReactComponent as Close } from "@/assets/svg/close.svg";
import { ReactComponent as Walk } from "@/assets/svg/walk.svg";
import { ReactComponent as Down } from "@/assets/svg/down.svg";
import { ReactComponent as Up } from "@/assets/svg/up.svg";
import { ReactComponent as Ellipse } from "@/assets/svg/ellipse.svg";
import { RangeBar, SvgIcon } from "@/components";
import { Button, Input, Modal } from "antd";
import { FlexColumn, FlexRow, Spacer } from "@/components/Base";
import { BB, BM, BS, BXS, H5M } from "@/theme";
import { useClickedInfoSelector } from "@/flux";
import { ModeEnum } from "@/enums";
import { Step } from "@/interface";
import { useNavigate } from "react-router-dom";

const RoutePage: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const clickedInfo = useClickedInfoSelector();
  const navigate = useNavigate();

  const RenderTitle = (
    mode: ModeEnum,
    title: string,
    sectionTime: number,
    step: Step
  ) => {
    if (!clickedInfo) {
      return;
    }

    switch (mode) {
      case ModeEnum.BUS: {
        return (
          <FlexColumn style={{ minHeight: "144px" }}>
            <BM>{title}</BM>
            <Spacer space={10} />
            <FlexRow style={{ alignItems: "center" }}>
              <BS>{`${Math.ceil(sectionTime / 60)}분 이동`}</BS>
              {isClicked ? (
                <SvgIcon
                  icon={<Up />}
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsClicked((prev) => !prev)}
                />
              ) : (
                <SvgIcon
                  icon={<Down />}
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsClicked((prev) => !prev)}
                />
              )}
            </FlexRow>
            {isClicked &&
              step.stationList.map((station, index) => {
                if (index === 0) {
                  return (
                    <>
                      <Spacer space={20} />
                      <BXS>{`${station}`}</BXS>
                    </>
                  );
                }
                return (
                  <>
                    <Spacer space={23} />
                    <BXS>{`${station}`}</BXS>
                  </>
                );
              })}
            <Spacer space={20} />
          </FlexColumn>
        );
      }
      case ModeEnum.TAXI: {
        return (
          <FlexColumn style={{ minHeight: "144px", width: "100%" }}>
            <FlexRow width="100%">
              <FlexColumn>
                <BB>{`택시 승차`}</BB>
                <BS>{`약 ${clickedInfo.summary.taxiFare.toLocaleString()}원`}</BS>
                <Spacer space={10} />
                <BS>{`${Math.ceil(sectionTime / 60)}분 이동`}</BS>
              </FlexColumn>
              <TaxiLabel onClick={() => setOpen(true)}>
                <BM color="white">{`카카오T 호출`}</BM>
              </TaxiLabel>
            </FlexRow>
          </FlexColumn>
        );
      }
      case ModeEnum.WALK: {
        return (
          <FlexColumn style={{ minHeight: "144px" }}>
            <BM>{title}</BM>
            <Spacer space={10} />
            <BS>{`${Math.ceil(sectionTime / 60)}분 이동`}</BS>
            <Spacer space={30} />
          </FlexColumn>
        );
      }
    }
  };

  const RenderBar = (mode: ModeEnum, step: Step) => {
    if (!clickedInfo) {
      return;
    }

    switch (mode) {
      case ModeEnum.BUS: {
        return (
          <>
            <Label style={{ backgroundColor: "#34447F" }}>
              <SvgIcon icon={<Bus />} />
            </Label>
            {isClicked ? (
              step.stationList.map((_, index) => {
                if (index === 0) {
                  return (
                    <>
                      <ColumnBar
                        style={{
                          backgroundColor: "#34447F",
                          height: "40px",
                          width: "12px",
                        }}
                      />
                      <SvgIcon icon={<Ellipse />} />
                      <ColumnBar
                        style={{
                          backgroundColor: "#34447F",
                          height: "20px",
                          width: "12px",
                        }}
                      />
                    </>
                  );
                }
                return (
                  <>
                    <SvgIcon icon={<Ellipse />} />
                    <ColumnBar
                      style={{
                        backgroundColor: "#34447F",
                        height: "20px",
                        width: "12px",
                      }}
                    />
                  </>
                );
              })
            ) : (
              <ColumnBar style={{ backgroundColor: "#34447F" }} />
            )}
          </>
        );
      }
      case ModeEnum.TAXI: {
        return (
          <>
            <Label>
              <SvgIcon icon={<Taxi />} />
            </Label>
            <ColumnBar style={{ backgroundColor: "#f57c2c" }} />
          </>
        );
      }
      case ModeEnum.WALK: {
        return (
          <>
            <Label style={{ backgroundColor: "#777" }}>
              <SvgIcon icon={<Walk />} />
            </Label>
            <ColumnBar />
          </>
        );
      }
    }
  };

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
          <SvgIcon
            icon={<Left />}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/suggest")}
          />
          <Input />
          <SvgIcon icon={<Close />} style={{ cursor: "pointer" }} />
        </FlexRow>
      </Header>
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
              clickedInfo.steps.map((step) =>
                RenderBar(step.mode as ModeEnum, step)
              )}
            <SvgIcon icon={<Location />} />
          </FlexColumn>
          <FlexColumn style={{ flex: 1, padding: "20px 20px 20px 0" }}>
            {clickedInfo &&
              clickedInfo.steps.map((step) =>
                RenderTitle(
                  step.mode as ModeEnum,
                  step.stationList[0],
                  step.sectionTime,
                  step
                )
              )}
            <BM
              style={{
                height: "30px",
              }}
            >{`목적지`}</BM>
          </FlexColumn>
        </RouteWrap>
      </Body>
      <Modal
        title={null}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={300}
      >
        <FlexColumn style={{ justifyContent: "center", alignItems: "center" }}>
          <H5M>{`'카카오T'에서 열겠습니까?`}</H5M>
          <Spacer space={20} />
          <RangeFooter>
            <Button onClick={() => setOpen(false)}>{`취소`}</Button>
            <Button type="primary" onClick={() => setOpen(false)}>
              {`열기`}
            </Button>
          </RangeFooter>
        </FlexColumn>
      </Modal>
    </Container>
  );
};

export default RoutePage;
