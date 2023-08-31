import React from "react";
import { FlexColumn, FlexRow } from "../Base";
import { SvgIcon } from "..";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { ReactComponent as Bus } from "@/assets/svg/bug.svg";
import { Label, Bar } from "./styles";
import { BS, H5B } from "@/theme";
import { Info } from "@/interface";
import { ModeEnum } from "@/enums";

interface RangeBarProps {
  taxiFare?: number;
  wastedTime?: number;
  info?: Info;
}

const RangeBar: React.FC<RangeBarProps> = ({ taxiFare, wastedTime, info }) => {
  const RenderBar = (mode: ModeEnum, sectionTime: number) => {
    if (!wastedTime) {
      return;
    }

    const percent = (sectionTime / wastedTime) * 100;
    const minute = Math.ceil(sectionTime / 60);

    switch (mode) {
      case ModeEnum.BUS: {
        return (
          <>
            <Label style={{ backgroundColor: "#34447F" }}>
              <SvgIcon icon={<Bus />} />
            </Label>
            <Bar
              percent={percent}
              style={{
                backgroundColor: "#34447F",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            >
              <BS color="white">{`${minute}분`}</BS>
            </Bar>
          </>
        );
      }
      case ModeEnum.TAXI: {
        return (
          <>
            <Label>
              <SvgIcon icon={<Taxi />} />
            </Label>
            <Bar percent={percent}>
              <BS color="white">{`${minute}분`}</BS>
            </Bar>
          </>
        );
      }
      case ModeEnum.WALK: {
        return (
          <Bar
            percent={percent}
            style={{
              backgroundColor: "#D0D0D0",
              borderTopRightRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
          >
            <BS color="white">{`${minute}분`}</BS>
          </Bar>
        );
      }
    }
  };

  return (
    <FlexColumn
      style={{
        width: "90%",
        gap: "5px",
        padding: "5px",
        justifyContent: "center",
      }}
    >
      <FlexRow style={{ gap: "20px" }}>
        {taxiFare && wastedTime && (
          <>
            <H5B>{`${taxiFare.toLocaleString()}원`}</H5B>
            <H5B>{`${Math.floor(wastedTime / 60)}분`}</H5B>
          </>
        )}
      </FlexRow>
      <FlexRow
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {info &&
          info.steps.map((step) =>
            RenderBar(step.mode as ModeEnum, step.sectionTime)
          )}
      </FlexRow>
    </FlexColumn>
  );
};

export default RangeBar;
