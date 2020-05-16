import React from 'react';

import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ ...props }) => {
  const { type, children, fs, textColor, text } = props;

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
      {children}
      <S.TextButton fs={fs} textColor={textColor}>
        {text}
      </S.TextButton>
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
