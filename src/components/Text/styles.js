import styled from 'styled-components/native';

export const Text = styled.Text`
  width: 90%;
  margin-bottom: 30px;
  font-size: 18px;
  text-align: justify;
  color: ${({theme, color}) => theme[color]};
`;
