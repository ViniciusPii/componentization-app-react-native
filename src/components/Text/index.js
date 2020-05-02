import React from 'react';
import * as S from './styles';

const Text = ({text, color}) => {
  return <S.Text color={color}>{text}</S.Text>;
};

Text.defaultProps = {
  color: 'neutral600',
};

export default Text;
