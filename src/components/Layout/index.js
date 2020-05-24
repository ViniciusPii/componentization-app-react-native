import React from 'react';
import { Platform } from 'react-native';

import PropTypes from 'prop-types';

import * as S from './styles';

const Layout = ({ ...props }) => {
  const { linear, barColor, barStyle, bgColor, children } = props;

  if (linear === 'gradient') {
    return (
      <S.BackgroundGradient {...props}>
        <S.Status barColor={barColor} barStyle={barStyle} />
        <S.Layout
          {...props}
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
        >
          {children}
        </S.Layout>
      </S.BackgroundGradient>
    );
  }

  return (
    <S.Background bgColor={bgColor}>
      <S.Status barColor={barColor} barStyle={barStyle} />
      <S.Layout
        {...props}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
      >
        {children}
      </S.Layout>
    </S.Background>
  );
};

Layout.defaultProps = {
  justify: 'flex-start',
  bgColor: 'bgColor',
  color1: 'gradient1',
  color2: 'gradient2',
  barColor: 'barColor',
  barStyle: 'barStyle',
  w: '90%',
};

Layout.propTypes = {
  justify: PropTypes.string,
  bgColor: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  barColor: PropTypes.string,
  barStyle: PropTypes.string,
  w: PropTypes.string,
};

export default Layout;
