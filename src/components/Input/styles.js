import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs(
  ({ theme, placeholderTextColor }) => ({
    placeholderTextColor: theme.appColors.input[placeholderTextColor],
  })
)`
  width: ${({ w }) => w};
  height: ${({ h }) => h}px;
  padding-left: 10px;
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
  margin-right: ${({ mr }) => mr}px;
  border: 1px solid
    ${({ theme, borderColor }) => theme.appColors.input[borderColor]};
  border-radius: 5px;
  background-color: ${({ theme, bgColor }) => theme.appColors.input[bgColor]};
  color: ${({ theme, textColor }) => theme.appColors.input[textColor]};
  font-size: 16px;
`;
