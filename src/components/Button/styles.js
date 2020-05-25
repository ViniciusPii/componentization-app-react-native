import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: ${({ w }) => w};
  height: ${({ h }) => h}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  padding: 0 20px;
  background-color: ${({ theme, bgColor }) => theme.buttonColors[bgColor]};
  border-radius: 5px;
`;

export const LoadingButton = styled.ActivityIndicator.attrs(
  ({ theme, loadingBtnColor }) => ({
    color: theme.buttonColors[loadingBtnColor],
    size: 'large',
  })
)``;

export const TextButton = styled.Text`
  font-size: ${({ fs }) => fs}px;
  font-weight: ${({ bold }) => bold};
  color: ${({ theme, textColor }) => theme.buttonColors[textColor]};
`;

export const ButtonLink = styled.TouchableOpacity`
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
`;

export const TextButtonLink = styled.Text`
  font-size: ${({ fs }) => fs}px;
  color: ${({ theme, textLinkColor }) => theme.buttonColors[textLinkColor]};
`;
