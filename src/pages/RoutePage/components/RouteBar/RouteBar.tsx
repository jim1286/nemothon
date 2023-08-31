import { SvgIcon } from "@/components";
import { ModeEnum } from "@/enums";
import { Step } from "@/interface";
import React from "react";
import { ColumnBar, Label } from "./styles";
import { ReactComponent as Taxi } from "@/assets/svg/taxi.svg";
import { ReactComponent as Bus } from "@/assets/svg/bug.svg";
import { ReactComponent as Ellipse } from "@/assets/svg/ellipse.svg";
import { ReactComponent as Walk } from "@/assets/svg/walk.svg";

interface RouteBarProps {
  mode: ModeEnum;
  step: Step;
  isClicked: boolean;
}

const RouteBar: React.FC<RouteBarProps> = ({ mode, step, isClicked }) => {
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

export default RouteBar;
