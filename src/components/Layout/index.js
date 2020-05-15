import React from 'react';

import * as S from './styles';

const Layout = ({...props}) => {
  if (props.linear === 'gradient') {
    return (
      <S.BackgroundGradient {...props}>
        <S.Status {...props} />
        <S.Layout {...props}>{props.children}</S.Layout>
      </S.BackgroundGradient>
    );
  }

  return (
    <S.Background {...props}>
      <S.Status {...props} />
      <S.Layout {...props}>{props.children}</S.Layout>
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
