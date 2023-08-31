import React, { useMemo } from "react";
import { SvgIconContainer } from "./styles";

interface SvgIconProps {
  width?: number;
  height?: number;
  icon: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  icon,
  width,
  height,
  color,
  style,
  onClick,
  disabled = false,
}) => {
  const handleClick = () => {
    if (disabled) {
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <SvgIconContainer
      color={color}
      width={width}
      height={height}
      style={style}
      onClick={handleClick}
    >
      {icon}
    </SvgIconContainer>
  );
};

export default SvgIcon;
