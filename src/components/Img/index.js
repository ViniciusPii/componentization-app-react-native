import React from 'react';

import PropTypes from 'prop-types';
import * as S from './styles';

const Img = ({ ...props }) => {
  const { path } = props;

  return <S.Img source={path} {...props} />;
};

Img.defaultProps = {
  // w: 0,
  // h: 0,
  mt: 0,
  mb: 15,
  mr: 0,
  ml: 0,
};

Img.propTypes = {
  // w: PropTypes.number,
  // h: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
};

export default Img;
