import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs(
  ({ theme, placeholderTextColor }) => ({
    placeholderTextColor: theme[placeholderTextColor],
  })
)`
  width: ${({ w }) => w};
  height: ${({ h }) => h}px;
  padding-left: 10px;
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  border: 1px solid ${({ theme, borderColor }) => theme[borderColor]};
  border-radius: 5px;
  background-color: ${({ theme, bgColor }) => theme[bgColor]};
  color: ${({ theme, textColor }) => theme[textColor]};
  font-size: 16px;
`;
