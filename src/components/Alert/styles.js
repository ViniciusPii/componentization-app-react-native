import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Alert = styled.Modal``;

export const AlertContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.appColors.alert.bgOpacity};
`;

export const AlertContent = styled.View`
  width: 80%;
  padding: 20px;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.appColors.alert.bgColor};
`;

export const AlertIcon = styled(Icon).attrs(({ theme, type }) => ({
  color: theme.appColors.alert[type],
  size: 45,
}))``;

export const AlertTitle = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.appColors.alert.textAlert};
`;

export const AlertBody = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.appColors.alert.textAlert};
`;

export const AlertButton = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${({ theme, type }) => theme.appColors.alert[type]};
`;

export const AlertButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.appColors.alert.textButton};
`;
