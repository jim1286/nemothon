import React from "react";
import { Header } from "./styles";
import { FlexRow } from "@/components/Base";
import { SvgIcon } from "@/components";
import { ReactComponent as Left } from "@/assets/svg/left.svg";
import { ReactComponent as Close } from "@/assets/svg/close.svg";
import { useNavigate } from "react-router-dom";
import { response_1, response_2, response_3 } from "@/constant/Response.const";
import { Input } from "antd";

interface RouteHeaderProps {}

const RouteHeader: React.FC<RouteHeaderProps> = () => {
  const navigate = useNavigate();

  return (
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
        <Input
          defaultValue={`${response_3.location.start} -> ${response_3.location.end}`}
        />
        <SvgIcon icon={<Close />} style={{ cursor: "pointer" }} />
      </FlexRow>
    </Header>
  );
};

export default RouteHeader;
