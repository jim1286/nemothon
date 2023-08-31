import styled from 'styled-components';

interface SpacerProps {
  space: number;
  vertical?: boolean;
}

const Spacer = styled.div<SpacerProps>`
  width: ${({ vertical, space }) => (vertical ? `${space}` : '1')}px;
  height: ${({ vertical, space }) => (vertical ? '1' : `${space}`)}px;
`;

export default Spacer;
