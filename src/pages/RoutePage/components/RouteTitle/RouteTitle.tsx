import { SvgIcon } from "@/components";
import { FlexColumn, FlexRow, Spacer } from "@/components/Base";
import { ModeEnum } from "@/enums";
import { Step } from "@/interface";
import { BB, BM, BS, BXS } from "@/theme";
import React from "react";
import { ReactComponent as Up } from "@/assets/svg/up.svg";
import { ReactComponent as Down } from "@/assets/svg/down.svg";
import { useClickedInfoSelector } from "@/flux";
import { TaxiLabel } from "./styles";
import { Click } from "../../RoutePage";
import { nanoid } from "@reduxjs/toolkit";

interface RouteTitleProps {
  step: Step;
  mode: ModeEnum;
  title: string;
  index: number;
  sectionTime: number;
  clickList: Click[] | undefined;
  onOpen: () => void;
  onDrawer: (index: number) => void;
}

const RouteTitle: React.FC<RouteTitleProps> = ({
  step,
  mode,
  title,
  sectionTime,
  index,
  clickList,
  onOpen,
  onDrawer,
}) => {
  const clickedInfo = useClickedInfoSelector();

  switch (mode) {
    case ModeEnum.BUS: {
      if (!clickList) {
        return;
      }

      return (
        <FlexColumn style={{ minHeight: "144px" }}>
          <BM>{title}</BM>
          <Spacer space={10} />
          <FlexRow style={{ alignItems: "center" }}>
            <BS>{`${Math.ceil(sectionTime / 60)}분 이동`}</BS>
            {clickList[index].clicked ? (
              <SvgIcon
                icon={<Up />}
                style={{ cursor: "pointer" }}
                onClick={() => onDrawer(index)}
              />
            ) : (
              <SvgIcon
                icon={<Down />}
                style={{ cursor: "pointer" }}
                onClick={() => onDrawer(index)}
              />
            )}
          </FlexRow>
          <Spacer space={20} />
          {clickList[index].clicked &&
            step.stationList.map((station) => (
              <BXS
                key={nanoid()}
                style={{ height: "35px" }}
              >{`${station}`}</BXS>
            ))}
        </FlexColumn>
      );
    }
    case ModeEnum.TAXI: {
      if (!clickedInfo) {
        return;
      }

      return (
        <FlexColumn style={{ minHeight: "144px", width: "100%" }}>
          <FlexRow width="100%">
            <FlexColumn>
              <BB>{`택시 승차`}</BB>
              <BS>{`약 ${clickedInfo.summary.taxiFare.toLocaleString()}원`}</BS>
              <Spacer space={10} />
              <BS>{`${Math.ceil(sectionTime / 60)}분 이동`}</BS>
            </FlexColumn>
            <TaxiLabel onClick={onOpen}>
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

export default RouteTitle;