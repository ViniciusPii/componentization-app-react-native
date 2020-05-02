import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({theme, color}) => theme[color]};
  margin: 30px 0 15px 0;
`;
