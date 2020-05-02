import React from 'react';
import * as S from './styles';

const Layout = ({...props}) => {
  return (
    <S.Layout justify={props.justify} bgColor={props.bgColor}>
      {props.children}
    </S.Layout>
  );
};

Layout.defaultProps = {
  justify: 'center',
  bgColor: 'neutral100',
};

export default Layout;
