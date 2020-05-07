import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
  border-radius: 3px;
`;

export const ButtonLink = styled.TouchableOpacity`
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
`;

export const TextButtonLink = styled.Text`
  font-size: 18px;
  color: ${({theme, textLinkColor}) => theme[textLinkColor]};
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme, textColor}) => theme[textColor]};
`;
