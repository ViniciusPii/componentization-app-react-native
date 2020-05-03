import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';

export const Status = styled(StatusBar).attrs(
  ({theme, barColor, barStyle}) => ({
    backgroundColor: theme[barColor],
    barStyle: barStyle,
  }),
)``;

export const Background = styled(LinearGradient).attrs(
  ({theme, color1, color2}) => ({
    colors: [theme[color1], theme[color2]],
  }),
)`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({justify}) => justify};
`;

export const Layout = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({justify}) => justify};
  background-color: ${({theme, bgColor}) => theme[bgColor]};
`;
