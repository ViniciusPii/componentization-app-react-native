import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Text = ({...props}) => {
  return <S.Text {...props}>{props.text}</S.Text>;
};

Text.defaultProps = {
  textColor: 'neutral600',
  mt: 0,
  mb: 20,
  fs: 18,
};

Text.protoTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
