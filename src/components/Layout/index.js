import React from 'react';

import * as S from './styles';

const Layout = ({...props}) => {
  if (props.linear === 'gradient') {
    return (
      <S.BackgroundGradient
        bgColor={props.bgColor}
        color1={props.color1}
        color2={props.color2}>
        <S.Status barColor={props.barColor} barStyle={props.barStyle} />
        <S.Layout justify={props.justify} w={props.w}>
          {props.children}
        </S.Layout>
      </S.BackgroundGradient>
    );
  }

  return (
    <S.Background bgColor={props.bgColor}>
      <S.Status barColor={props.barColor} barStyle={props.barStyle} />
      <S.Layout justify={props.justify} w={props.w}>
        {props.children}
      </S.Layout>
    </S.Background>
  );
};

Layout.defaultProps = {
  justify: 'flex-start',
  bgColor: 'neutral100',
  color1: 'neutral500',
  color2: 'neutral100',
  barColor: 'neutral100',
  barStyle: 'dark-content',
  w: 90,
};

export default Layout;
