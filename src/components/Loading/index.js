import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Loading = ({ ...props }) => {
  const { loadingColor, loadingSize } = props;

  return <S.Loading loadingColor={loadingColor} loadingSize={loadingSize} />;
};

Loading.defaultProps = {
  loadingColor: 'white',
  loadingSize: 'large',
};

Loading.propTypes = {
  loadingColor: PropTypes.string,
  loadingSize: PropTypes.string,
};

export default Loading;
