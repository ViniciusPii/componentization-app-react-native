import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Button = ({...props}) => {
  if (props.type === 'link') {
    return (
      <S.ButtonLink onPress={props.onPress} mt={props.mt} mb={props.mb}>
        <S.TextButtonLink textLinkColor={props.textLinkColor}>
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
      mb={props.mb}>
      <S.TextButton textColor={props.textColor}>{props.text}</S.TextButton>
    </S.Button>
  );
};

Button.defaultProps = {
  bgColor: 'neutral500',
  textColor: 'white',
  textLinkColor: 'neutral600',
  mt: 0,
  mb: 20,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
