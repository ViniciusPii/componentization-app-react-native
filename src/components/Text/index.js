import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Text = ({...props}) => {
  return (
    <S.Text color={props.color} mt={props.mt} mb={props.mb}>
      {props.text}
    </S.Text>
  );
};

Text.defaultProps = {
  color: 'neutral600',
  mt: 0,
  mb: 20,
};

Text.protoTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
