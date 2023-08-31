import { color } from '@/theme/color';
import styled from 'styled-components';

interface SvgIconContainerProps {
  width?: number;
  height?: number;
  color?: string;
}

export const SvgIconContainer = styled.div<SvgIconContainerProps>`
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  & > svg > path {
    ${({ color }) => color && `fill: ${color}`};
  }

  &.svg-disabled {
    cursor: not-allowed;
    background: ${color.border.disabled} !important;

    svg > path {
      fill: ${color.text.disabled} !important;
    }
  }

  &.primary-rest {
    background: ${color.background.selectedBoldRest};

    svg > path {
      fill: ${color.icon.inverse};
    }

    &:hover {
      background: ${color.background.selectedBoldHovered};
    }

    &:active {
      background: ${color.background.selectedBoldPressed};
    }
  }

  &.default-rest {
    background: ${color.background.neutralBoldRest};

    svg > path {
      fill: ${color.icon.inverse};
    }

    &:hover {
      background: ${color.background.neutralBoldHovered};
    }

    &:active {
      background: ${color.background.neutralBoldPressed};
    }
  }

  &.danger-rest {
    background: ${color.background.dangerBoldRest};

    svg > path {
      fill: ${color.icon.inverse};
    }

    &:hover {
      background: ${color.background.dangerBoldHovered};
    }

    &:active {
      background: ${color.background.dangerBoldPressed};
    }
  }

  &.ghost-rest {
    svg > path {
      fill: ${color.icon.default};
    }

    &:hover {
      background: ${color.background.inverseSubtleHovered};
    }

    &:active {
      background: ${color.background.inverseSubtlePressed};
    }
  }

  &.ghost-disabled {
    cursor: not-allowed;
    background: none !important;

    svg > path {
      fill: ${color.text.disabled} !important;
    }
  }
`;
