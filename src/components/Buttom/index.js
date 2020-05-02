import React from 'react';
import * as S from './styles';

const Buttom = ({color, text, textColor}) => {
  return (
    <S.Button color={color}>
      <S.TextButtom textColor={textColor}>{text}</S.TextButtom>
    </S.Button>
  );
};

Buttom.defaultProps = {
  color: 'neutral500',
  textColor: 'white',
};

export default Buttom;
