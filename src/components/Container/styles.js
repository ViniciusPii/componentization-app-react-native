import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ orientation }) => orientation};
  width: ${({ w }) => w}%;
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  background-color: ${({ theme, bgColor }) => theme[bgColor]};
`;
