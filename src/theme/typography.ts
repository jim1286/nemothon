import styled from 'styled-components';
import '@fontsource/noto-sans-kr';
import '@fontsource/noto-sans-kr/500.css';
import '@fontsource/noto-sans-kr/700.css';
import { platte } from './color';
export interface TypoProps {
  color?: string;
}

export const H1M = styled.h1<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const H2M = styled.h2<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const H3M = styled.h3<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const H3R = styled.h3<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const H4B = styled.h4<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const H4M = styled.h4<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const H5R = styled.h5<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const H5M = styled.h5<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const H5B = styled.h5<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const BR = styled.div<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const BM = styled.div<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const BB = styled.div<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const F1 = styled.div<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const F2 = styled.div<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const C1 = styled.div<TypoProps>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.85)'};
`;

export const PretendardBold = styled.div<TypoProps>`
  font-family: 'Pretendard-Bold';
  line-height: 1.5;
  color: ${({ color }) => color ?? platte.solid[900]};
`;

export const PretendardSemiBold = styled.div<TypoProps>`
  font-family: 'Pretendard-SemiBold';
  line-height: 1.5;
  color: ${({ color }) => color ?? platte.solid[900]};
`;

export const PretendardMedium = styled.div<TypoProps>`
  font-family: 'Pretendard-Medium';
  line-height: 1.5;
  color: ${({ color }) => color ?? platte.solid[900]};
`;

export const PretendardRegular = styled.div<TypoProps>`
  font-family: 'Pretendard';
  line-height: 1.5;
  color: ${({ color }) => color ?? platte.solid[900]};
`;

export const H1 = styled(PretendardBold)`
  font-size: 32px;
`;

export const H2 = styled(PretendardBold)`
  font-size: 28px;
`;

export const H3 = styled(PretendardBold)`
  font-size: 24px;
`;

export const H4 = styled(PretendardSemiBold)`
  font-size: 18px;
`;

export const H5 = styled(PretendardSemiBold)`
  font-size: 16px;
`;

export const H6 = styled(PretendardSemiBold)`
  font-size: 14px;
`;

export const MXL = styled(PretendardMedium)`
  font-size: 20px;
`;

export const ML = styled(PretendardMedium)`
  font-size: 18px;
`;

export const MD = styled(PretendardMedium)`
  font-size: 16px;
`;

export const MS = styled(PretendardMedium)`
  font-size: 14px;
`;

export const MXS = styled(PretendardMedium)`
  font-size: 12px;
`;

export const RXL = styled(PretendardRegular)`
  font-size: 20px;
`;

export const RL = styled(PretendardRegular)`
  font-size: 18px;
`;

export const RD = styled(PretendardRegular)`
  font-size: 16px;
`;

export const RS = styled(PretendardRegular)`
  font-size: 14px;
`;

export const RXS = styled(PretendardRegular)`
  font-size: 12px;
`;

export const BXL = styled(PretendardMedium)`
  font-size: 20px;
  line-height: 1;
`;

export const BL = styled(PretendardMedium)`
  font-size: 18px;
  line-height: 1;
`;

export const BD = styled(PretendardMedium)`
  font-size: 16px;
  line-height: 1;
`;

export const BS = styled(PretendardMedium)`
  font-size: 14px;
  line-height: 1;
`;

export const BXS = styled(PretendardMedium)`
  font-size: 12px;
  line-height: 1;
`;
