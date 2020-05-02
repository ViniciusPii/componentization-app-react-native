import React from 'react';
import * as S from './styles';

const Section = ({children, justify}) => {
  return <S.Section justify={justify}>{children}</S.Section>;
};

Section.defaultProps = {
  justify: 'center',
};

export default Section;
