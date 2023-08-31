import React from "react";
import { Container, Divider, Header } from "./styles";
import { Info } from "@/interface";
import { RangeBar } from "@/components";
import { setClickedInfo, useAppDispatch } from "@/flux";
import { useNavigate } from "react-router-dom";
import { H5B } from "@/theme";
import { FlexRow } from "@/components/Base";

interface SuggestCardProps {
  info: Info;
}

const SuggestCard: React.FC<SuggestCardProps> = ({ info }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setClickedInfo(info));
    navigate("/id");
  };

  return (
    <Container onClick={handleClick}>
      <FlexRow style={{ justifyContent: "center", paddingTop: "15px" }}>
        <H5B color="red">{`대중교통보다 ${Math.ceil(
          info.summary.savedTime / 60
        )}분 빠르고 ${info.summary.savedMoney}원 아낄 수 있어요! `}</H5B>
      </FlexRow>
      <Header>
        <RangeBar
          info={info}
          taxiFare={info.summary.taxiFare}
          wastedTime={info.summary.wastedTime}
        />
      </Header>
      <Divider />
    </Container>
  );
};

export default SuggestCard;
