import styled from 'styled-components/native';

export const Text = styled.Text`
  width: 90%;
  font-size: 18px;
  text-align: justify;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  color: ${({theme, color}) => theme[color]};
`;
