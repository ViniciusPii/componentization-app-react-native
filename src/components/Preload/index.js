import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Preload = ({ ...props }) => {
  const { textColor, loadingColor } = props;

  return (
    <S.Layout {...props}>
      <S.Container>
        <S.Title textColor={textColor}>Aguarde...</S.Title>
        <S.Loading loadingColor={loadingColor} />
      </S.Container>
    </S.Layout>
  );
};

Preload.defaultProps = {
  bgColor: 'secondaryColor',
  textColor: 'primaryColor',
  loadingColor: 'primaryColor',
};

Preload.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  loadingColor: PropTypes.string,
};

export default Preload;
