import styled from 'styled-components/native';

export const Text = styled.Text`
  width: 100%;
  font-size: ${({ fs }) => fs}px;
  font-weight: ${({ bold }) => bold};
  text-align: ${({ align }) => align};
  font-style: ${({ fontStyle }) => fontStyle};
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  color: ${({ theme, textColor }) => theme[textColor]};
`;
