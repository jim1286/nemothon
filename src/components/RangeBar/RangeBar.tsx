import React from "react";
import { FlexColumn, FlexRow } from "../Base";
import { SvgIcon } from "..";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { ReactComponent as Bus } from "@/assets/svg/bug.svg";
import { Label, Bar } from "./styles";
import { H5B } from "@/theme";

interface RangeBarProps {
  taxiFare: number;
  wastedTime: number;
}

const RangeBar: React.FC<RangeBarProps> = ({ taxiFare, wastedTime }) => {
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
        <H5B>{`${taxiFare}원`}</H5B>
        <H5B>{`${Math.floor(wastedTime / 60)}분`}</H5B>
      </FlexRow>
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
        <Bar />
        <Label style={{ backgroundColor: "#34447F" }}>
          <SvgIcon icon={<Bus />} />
        </Label>
        <Bar
          style={{
            backgroundColor: "#34447F",
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
        />
        <Bar
          style={{
            backgroundColor: "#D0D0D0",
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
        />
      </FlexRow>
    </FlexColumn>
  );
};

export default RangeBar;
