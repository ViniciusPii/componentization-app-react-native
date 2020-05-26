import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({ w }) => w};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ orientation }) => orientation};
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-right: ${({ mr }) => mr}px;
  margin-left: ${({ ml }) => ml}px;
  margin: ${({ m }) => m}px;
  padding-top: ${({ pt }) => pt}px;
  padding-bottom: ${({ pb }) => pb}px;
  padding-right: ${({ pr }) => pr}px;
  padding-left: ${({ pl }) => pl}px;
  padding: ${({ p }) => p}px;
  border-radius: ${({ radius }) => radius}px;
  background-color: ${({ theme, bgColor }) => theme.appColors[bgColor]};
`;
