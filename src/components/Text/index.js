import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Text = ({ ...props }) => {
  const { text } = props;

  return <S.Text {...props}>{text}</S.Text>;
};

Text.defaultProps = {
  textColor: 'textColor',
  align: 'center',
  fontStyle: 'normal',
  bold: 400,
  mt: 0,
  mb: 20,
  fs: 18,
};

Text.propTypes = {
  textColor: PropTypes.string,
  align: PropTypes.string,
  fontStyle: PropTypes.string,
  bold: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  fs: PropTypes.number,
  text: PropTypes.string.isRequired,
};

export default Text;
