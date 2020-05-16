import React from 'react';

import PropTypes from 'prop-types';
import * as S from './styles';

const Icon = ({ ...props }) => {
  return <S.MyIcon {...props} />;
};

Icon.defaultProps = {
  size: 30,
  color: 'neutral700',
  name: 'emoticon-cool-outline',
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
};

Icon.protoType = {
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
};

export default Icon;

// https://materialdesignicons.com/
