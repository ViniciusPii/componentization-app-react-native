import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Button = ({...props}) => {
  if (props.type === 'link') {
    return (
      <S.ButtonLink {...props}>
        {props.children}
        <S.TextButtonLink {...props}>{props.text}</S.TextButtonLink>
      </S.ButtonLink>
    );
  }

  return (
    <S.Button {...props}>
      {props.children}
      <S.TextButton {...props}>{props.text}</S.TextButton>
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
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
