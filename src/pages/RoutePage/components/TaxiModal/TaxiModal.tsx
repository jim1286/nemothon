import { FlexColumn, Spacer } from "@/components/Base";
import { H5M } from "@/theme";
import { Button, Modal } from "antd";
import React from "react";
import { RangeFooter } from "./styles";

interface TaxiModalProps {
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
}

const TaxiModal: React.FC<TaxiModalProps> = ({ onOk, onCancel, open }) => {
  return (
    <Modal title={null} centered width={300} open={open} onCancel={onCancel}>
      <FlexColumn style={{ justifyContent: "center", alignItems: "center" }}>
        <H5M>{`'카카오T'에서 열겠습니까?`}</H5M>
        <Spacer space={20} />
        <RangeFooter>
          <Button onClick={onOk}>{`취소`}</Button>
          <Button type="primary" onClick={onCancel}>
            {`열기`}
          </Button>
        </RangeFooter>
      </FlexColumn>
    </Modal>
  );
};

export default TaxiModal;
