import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 90%;
  height: 55px;
  margin-bottom: 20px;
  padding-left: 10px;
  border: 1px solid ${({theme, borderColor}) => theme[borderColor]};
  border-radius: 8px;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
  color: ${({theme, textColor}) => theme[textColor]};
  font-size: 16px;
`;
