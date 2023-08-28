import React from "react";
import { Container } from "./styles";
import { Result } from "@/interface";
import { BM } from "@/theme";

interface SuggestCardProps {
  result: Result;
}

const SuggestCard: React.FC<SuggestCardProps> = ({ result }) => {
  return (
    <Container>
      <BM>{`주소 : ${result.address}`}</BM>
      <BM>{`버스 정류장 : ${result.stationName}`}</BM>
      <BM>{`택시비 : ${result.taxiFee}원`}</BM>
      <BM>{`절약 시간 : ${result.timeReduction}초`}</BM>
    </Container>
  );
};

export default SuggestCard;
