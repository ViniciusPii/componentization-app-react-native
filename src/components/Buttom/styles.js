import styled from 'styled-components/native';
import {baseColors} from '../../colors/baseColors';

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  margin-bottom: 20px;
  background-color: ${baseColors.green500};
  border-radius: 3px;
`;

export const TextButtom = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${baseColors.white};
`;
