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
  w: 100,
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
};

Container.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
  orientation: PropTypes.string,
  bgColor: PropTypes.string,
  w: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
};

export default Container;
