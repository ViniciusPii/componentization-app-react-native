import colors from './colors';

export default {
  colors: {
    ...colors,
  },
  appColors: {
    ...colors,
    bgColor: colors.neutral100,
    bgColor2: colors.blue600,
    barStyle: 'light-content',
  },
  buttonColors: {
    ...colors,
    bgColor: colors.orange,
    textColor: colors.white,
    textLinkColor: colors.blue,
  },
};
