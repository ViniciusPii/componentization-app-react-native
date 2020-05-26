import React from 'react';
import { Platform } from 'react-native';

import PropTypes from 'prop-types';

import * as S from './styles';

const Layout = ({ ...props }) => {
  const { linear, barStyle, bgColor, children } = props;

  if (linear === 'gradient') {
    return (
      <S.BackgroundGradient {...props}>
        <S.Status barColor={bgColor} barStyle={barStyle} />
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
      <S.Status barColor={bgColor} barStyle={barStyle} />
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
  bgColor: 'secondaryColor',
  bgColor2: 'primaryColor',
  barColor: 'secondaryColor',
  barStyle: 'dark-content',
  w: '90%',
};

Layout.propTypes = {
  justify: PropTypes.string,
  bgColor: PropTypes.string,
  bgColor2: PropTypes.string,
  barColor: PropTypes.string,
  barStyle: PropTypes.string,
  w: PropTypes.string,
};

export default Layout;
