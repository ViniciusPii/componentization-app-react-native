import colors from './colors';

export default {
  colors: {
    ...colors,
  },
  appColors: {
    ...colors,
    bgColor: colors.blue100,
    gradient1: colors.blue100,
    gradient2: colors.blue,
    barColor: colors.blue100,
    barStyle: 'dark-content',
  },
  buttonColors: {
    ...colors,
    bgColor: colors.blue,
    textColor: colors.white,
    textLinkColor: colors.blue,
  },
};
