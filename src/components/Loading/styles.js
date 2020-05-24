import styled from 'styled-components/native';

export const Loading = styled.ActivityIndicator.attrs(
  ({ theme, loadingColor, loadingSize }) => ({
    color: theme.colors[loadingColor],
    size: loadingSize,
  })
)``;
