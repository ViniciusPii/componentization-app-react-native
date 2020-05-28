import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Button = ({ ...props }) => {
  const {
    type,
    children,
    fs,
    textColor,
    textLinkColor,
    text,
    loading,
    bold,
  } = props;

  if (type === 'link') {
    return (
      <S.ButtonLink {...props}>
        {children}
        <S.TextButtonLink fs={fs} textLinkColor={textLinkColor} bold={bold}>
          {text}
        </S.TextButtonLink>
      </S.ButtonLink>
    );
  }

  return (
    <S.Button {...props}>
      {loading ? (
        <S.LoadingButton loadingBtnColor={textColor} />
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
  bgColor: 'primaryColor',
  textColor: 'textButton',
  textLinkColor: 'textLinkButton',
  mt: 0,
  mb: 20,
  mr: 0,
  ml: 0,
  w: '100%',
  h: 55,
  fs: 18,
  bold: 700,
};

Button.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textLinkColor: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  w: PropTypes.string,
  h: PropTypes.number,
  fs: PropTypes.number,
  bold: PropTypes.number,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
