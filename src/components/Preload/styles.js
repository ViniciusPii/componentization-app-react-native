import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, bgColor }) => theme.appColors[bgColor]};
`;

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-right: 30px;
  color: ${({ theme, textColor }) => theme.appColors[textColor]};
`;

export const Loading = styled.ActivityIndicator.attrs(
  ({ theme, loadingColor }) => ({
    color: theme.appColors[loadingColor],
    size: 'large',
  })
)``;
