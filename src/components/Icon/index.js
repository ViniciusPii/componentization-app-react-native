import React from 'react';
import * as S from './styles';

const Icon = ({...props}) => {
  return <S.MyIcon {...props} />;
};

Icon.defaultProps = {
  size: 30,
  color: 'neutral700',
  name: 'emoticon-cool-outline',
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
};

export default Icon;

//https://materialdesignicons.com/
