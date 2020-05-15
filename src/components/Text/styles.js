import styled from 'styled-components/native';

export const Text = styled.Text`
  width: 100%;
  font-size: ${({fs}) => fs}px;
  text-align: justify;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  color: ${({theme, textColor}) => theme[textColor]};
`;
