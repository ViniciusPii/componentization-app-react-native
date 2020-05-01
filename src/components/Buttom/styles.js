import styled from 'styled-components/native';
import {baseColors} from '../../colors/baseColors';

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: ${({color}) => `${baseColors.green500}`};
  border-radius: 3px;
`;

export const TextButtom = styled.Text`
  font-size: 18px;
  color: #fff;
`;
