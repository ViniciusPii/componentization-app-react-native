import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

import Loading from '../Loading';

const Button = ({ ...props }) => {
  const {
    type,
    children,
    fs,
    textColor,
    text,
    loading,
    loadingColor,
    loadingSize,
    bold,
  } = props;

  if (type === 'link') {
    return (
      <S.ButtonLink {...props}>
        {children}
        <S.TextButtonLink fs={fs} textColor={textColor} bold={bold}>
          {text}
        </S.TextButtonLink>
      </S.ButtonLink>
    );
  }

  return (
    <S.Button {...props}>
      {loading ? (
        <Loading loadingColor={loadingColor} loadingSize={loadingSize} />
      ) : (
        <>
          {children}
          <S.TextButton fs={fs} textColor={textColor} bold={bold}>
            {text}
          </S.TextButton>
        </>
      )}
    </S.Button>
  );
};

Button.defaultProps = {
  bgColor: 'neutral',
  textColor: 'white',
  mt: 0,
  mb: 20,
  w: '100%',
  h: 55,
  fs: 18,
  bold: 700,
};

Button.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  w: PropTypes.string,
  h: PropTypes.number,
  fs: PropTypes.number,
  bold: PropTypes.number,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
