import React from 'react';

import * as S from './styles';

const Img = ({...props}) => {
  return <S.Img source={props.path} {...props} />;
};

Img.defaultProps = {
  // w: 0,
  // h: 0,
  mt: 0,
  mb: 15,
  mr: 0,
  ml: 0,
};

export default Img;
