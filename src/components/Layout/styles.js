import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#f00', '#00f'],
})`
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
