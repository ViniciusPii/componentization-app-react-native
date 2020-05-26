import colors from './colors';

export default {
  appColors: {
    ...colors,
    // cores da sua app
    primaryColor: colors.purpleRed,
    secondaryColor: colors.neutral100,
    // cores dos textos e titulos da sua app
    textColor: colors.neutral600,
    // cores dos textos dos botões e links de botões
    textButton: colors.neutral100,
    textLinkButton: colors.blue,
    // cor inicial do seu container
    transparent: colors.ghost,
    // alerta personalizado
    alert: {
      error: colors.red,
      warning: colors.yellow,
      success: colors.green,
      info: colors.celeste,
      textButton: colors.white,
      textAlert: colors.neutral600,
      bgColor: colors.white,
      bgOpacity: colors.blackOpacity,
    },
    // inputs da aplicação
    input: {
      ...colors,
      border: colors.ghost,
      bgColor: colors.placeholderNeutral,
      textColor: colors.neutral700,
      placeholderTextColor: colors.neutral,
    },
  },
};
