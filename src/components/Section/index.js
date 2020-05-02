import React from 'react';
import * as S from './styles';

const Section = ({children, orientation}) => {
  return <S.Section orientation={orientation}>{children}</S.Section>;
};

Section.defaultProps = {
  orientation: 'center',
};

export default Section;
