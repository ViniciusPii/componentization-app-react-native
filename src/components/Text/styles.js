import styled from 'styled-components/native';

export const Text = styled.Text`
  text-align: ${({ align }) => align};
  font-size: ${({ fs }) => fs}px;
  font-weight: ${({ bold }) => bold};
  font-style: ${({ fontStyle }) => fontStyle};
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
  margin-right: ${({ mr }) => mr}px;
  color: ${({ theme, textColor }) => theme.appColors[textColor]};
`;
