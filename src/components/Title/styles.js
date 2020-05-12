import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${({fs}) => fs}px;
  font-weight: 700;
  text-align: center;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  color: ${({theme, color}) => theme[color]};
`;
