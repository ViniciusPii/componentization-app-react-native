import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Container = ({ ...props }) => {
  const { children } = props;

  return <S.Container {...props}>{children}</S.Container>;
};

Container.defaultProps = {
  justify: 'center',
  align: 'center',
  orientation: 'column',
  bgColor: 'ghost',
  w: '100%',
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
  m: 0,
  pt: 0,
  pb: 0,
  pl: 0,
  pr: 0,
  p: 0,
  radius: 10,
};

Container.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
  orientation: PropTypes.string,
  bgColor: PropTypes.string,
  w: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  m: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  p: PropTypes.number,
  radius: PropTypes.number,
};

export default Container;
