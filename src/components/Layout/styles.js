import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar } from 'react-native';

export const Background = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme, bgColor }) => theme[bgColor]};
`;

export const BackgroundGradient = styled(LinearGradient).attrs(
  ({ theme, color1, color2 }) => ({
    colors: [theme[color1], theme[color2]],
  })
)`
  flex: 1;
  align-items: center;
`;

export const Status = styled(StatusBar).attrs(
  ({ theme, barColor, barStyle }) => ({
    backgroundColor: theme[barColor],
    barStyle,
  })
)``;

export const Layout = styled.KeyboardAvoidingView`
  flex: 1;
  width: ${({ w }) => w};
  align-items: center;
  justify-content: ${({ justify }) => justify};
`;
