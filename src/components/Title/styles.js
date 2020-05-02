import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  color: ${({theme, color}) => theme[color]};
`;
