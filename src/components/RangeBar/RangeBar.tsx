import React from "react";
import { FlexColumn, FlexRow } from "../Base";
import { H5B } from "@/theme";
import { Info } from "@/interface";
import { ModeEnum } from "@/enums";
import { Bar } from "./components";

interface RangeBarProps {
  taxiFare?: number;
  wastedTime?: number;
  info?: Info;
}

const RangeBar: React.FC<RangeBarProps> = ({ taxiFare, wastedTime, info }) => {
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
          info.steps.map((step) => (
            <Bar
              mode={step.mode as ModeEnum}
              sectionTime={step.sectionTime}
              wastedTime={wastedTime}
            />
          ))}
      </FlexRow>
    </FlexColumn>
  );
};

export default RangeBar;
