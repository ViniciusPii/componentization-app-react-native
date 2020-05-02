import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 90%;
`;

export const Input = styled.TextInput`
  height: 55px;
  margin-bottom: 20px;
  padding-left: 10px;
  border: 1px solid ${({theme, borderColor}) => theme[borderColor]};
  border-radius: 8px;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
  color: ${({theme, textColor}) => theme[textColor]};
  font-size: 16px;
`;

export const Label = styled.Text`
  position: absolute;
  left: 12px;
  top: -10px;
  z-index: 1;
  padding: 0 8px;
  font-size: 16px;
  background-color: ${({theme}) => theme.white};
  color: ${({theme, labelColor}) => theme[labelColor]};
  /* opacity: ${({label}) => (label ? 1 : 0)}; */
`;
