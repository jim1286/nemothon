import React, { useEffect, useState } from "react";
import { FormWrap, MapWrap } from "./styles";
import { KaKaoMap, PageContainer, TaxiRangeLabel } from "@/components";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");

  const handleSearch = () => {
    if (!input) {
      return;
    }

    setAddress(input);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "NumpadEnter" || e.code === "Enter") {
      handleSearch();
      return;
    }
  };

  const handleClick = async () => {
    navigate("/suggest");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <PageContainer>
      <FormWrap>
        <Input
          placeholder="목적지를 입력하세요."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          icon={<SearchOutlined />}
          onClick={handleSearch}
          type="primary"
          style={{ backgroundColor: "#F57C2C" }}
        />
        <TaxiRangeLabel
          style={{
            top: "40px",
          }}
        />
      </FormWrap>
      <MapWrap>
        <KaKaoMap address={address} onClick={handleClick} />
      </MapWrap>
    </PageContainer>
  );
};

export default MapPage;
