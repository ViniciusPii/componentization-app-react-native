import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { ThemeContext } from 'styled-components';
import * as S from './styles';

const Button = ({ ...props }) => {
  const themeContext = useContext(ThemeContext);
  const { type, children, fs, textColor, text, loading } = props;

  if (type === 'link') {
    return (
      <S.ButtonLink {...props}>
        {children}
        <S.TextButtonLink fs={fs} textColor={textColor}>
          {text}
        </S.TextButtonLink>
      </S.ButtonLink>
    );
  }

  return (
    <S.Button {...props}>
      {loading ? (
        <ActivityIndicator color={themeContext.white} size="large" />
      ) : (
        <S.TextButton fs={fs} textColor={textColor}>
          {text}
        </S.TextButton>
      )}
      {children}
    </S.Button>
  );
};

Button.defaultProps = {
  bgColor: 'neutral500',
  textColor: 'white',
  textLinkColor: 'neutral600',
  mt: 0,
  mb: 20,
  w: 100,
  h: 55,
  fs: 18,
};

Button.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textLinkColor: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  w: PropTypes.number,
  h: PropTypes.number,
  fs: PropTypes.number,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
