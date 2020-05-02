import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  margin-bottom: 20px;
  background-color: ${({theme, color}) => theme[color]};
  border-radius: 3px;
`;

export const TextButtom = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme, color}) => theme.white};
`;
