import React from 'react';

import * as S from './styles';

const Layout = ({...props}) => {
  if (props.linear === 'gradient') {
    return (
      <S.Background
        bgColor={props.bgColor}
        color1={props.color1}
        color2={props.color2}>
        <S.Container justify={props.justify}>{props.children}</S.Container>
      </S.Background>
    );
  }

  return (
    <S.Layout justify={props.justify} bgColor={props.bgColor}>
      {props.children}
    </S.Layout>
  );
};

Layout.defaultProps = {
  justify: 'center',
  bgColor: 'neutral100',
  color1: 'neutral300',
  color2: 'neutral100',
};

export default Layout;
