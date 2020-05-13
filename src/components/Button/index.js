import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Button = ({...props}) => {
  if (props.type === 'link') {
    return (
      <S.ButtonLink onPress={props.onPress} mt={props.mt} mb={props.mb}>
        {props.children}
        <S.TextButtonLink textLinkColor={props.textLinkColor} fs={props.fs}>
          {props.text}
        </S.TextButtonLink>
      </S.ButtonLink>
    );
  }

  return (
    <S.Button
      bgColor={props.bgColor}
      onPress={props.onPress}
      mt={props.mt}
      mb={props.mb}
      w={props.w}
      h={props.h}>
      {props.children}
      <S.TextButton textColor={props.textColor} fs={props.fs}>
        {props.text}
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
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
