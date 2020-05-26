import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MyIcon = styled(Icon).attrs(
  ({ theme, iconColor, size, name }) => ({
    name,
    color: theme.appColors[iconColor],
    size,
  })
)`
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
  margin-right: ${({ mr }) => mr}px;
`;
