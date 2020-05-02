import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Buttom = ({...props}) => {
  if (props.type === 'link') {
    return (
      <S.ButtonLink onPress={props.onPress} mt={props.mt} mb={props.mb}>
        <S.TextButtomLink textLinkColor={props.textLinkColor}>
          {props.text}
        </S.TextButtomLink>
      </S.ButtonLink>
    );
  }

  return (
    <S.Button
      color={props.color}
      onPress={props.onPress}
      mt={props.mt}
      mb={props.mb}>
      <S.TextButtom textColor={props.textColor}>{props.text}</S.TextButtom>
    </S.Button>
  );
};

Buttom.defaultProps = {
  color: 'neutral500',
  textColor: 'white',
  textLinkColor: 'neutral600',
  mt: 0,
  mb: 20,
};

Buttom.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Buttom;
