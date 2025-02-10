import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: ${(props) => props.$marginBottom};
`;
export const Heading2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: ${(props) => props.$marginBottom};
`;
export const Heading3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: ${(props) => props.$marginBottom};
`;

export const BodyText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: #444444;

  margin-bottom: ${(props) => props.$marginBottom};
`;
export const SmallText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #444444;
  margin-bottom: ${(props) => props.$marginBottom};
`;
export const CaptionText = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #444444;
  margin-bottom: ${(props) => props.$marginBottom};
`;
