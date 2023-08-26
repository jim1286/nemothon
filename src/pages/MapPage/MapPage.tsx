import React, { useEffect, useState } from "react";
import { FormWrap, MapWrap } from "./styles";
import { KaKaoMap, PageContainer } from "@/components";
import { Button, Input } from "antd";

const MapPage: React.FC = () => {
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
        <Button onClick={handleSearch}>{"검색"}</Button>
      </FormWrap>
      <MapWrap>
        <KaKaoMap address={address} />
      </MapWrap>
    </PageContainer>
  );
};

export default MapPage;
