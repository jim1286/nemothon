import { ModeEnum } from "@/enums";
import React from "react";
import { BarWrap, Label } from "./styles";
import { SvgIcon } from "@/components";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { ReactComponent as Bus } from "@/assets/svg/bug.svg";
import { BS } from "@/theme";

interface BarProps {
  mode: ModeEnum;
  sectionTime: number;
  wastedTime?: number;
}

const Bar: React.FC<BarProps> = ({ mode, sectionTime, wastedTime }) => {
  const percent = wastedTime && (sectionTime / wastedTime) * 100;
  const minute = Math.ceil(sectionTime / 60);

  if (!percent) {
    return null;
  }

  switch (mode) {
    case ModeEnum.BUS: {
      return (
        <>
          <Label style={{ backgroundColor: "#34447F" }}>
            <SvgIcon icon={<Bus />} />
          </Label>
          <BarWrap
            percent={percent}
            style={{
              backgroundColor: "#34447F",
              borderTopRightRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
          >
            <BS color="white">{`${minute}분`}</BS>
          </BarWrap>
        </>
      );
    }
    case ModeEnum.TAXI: {
      return (
        <>
          <Label>
            <SvgIcon icon={<Taxi />} />
          </Label>
          <BarWrap percent={percent}>
            <BS color="white">{`${minute}분`}</BS>
          </BarWrap>
        </>
      );
    }
    case ModeEnum.WALK: {
      return (
        <BarWrap
          percent={percent}
          style={{
            backgroundColor: "#D0D0D0",
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
        >
          <BS color="white">{`${minute}분`}</BS>
        </BarWrap>
      );
    }
  }
};

export default Bar;
