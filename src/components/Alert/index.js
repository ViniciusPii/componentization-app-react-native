import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

import { useGlobal } from '../../contexts/GlobalContext';

const Alert = ({ ...props }) => {
  const { type, body, visible } = props;

  const { setAlertModal } = useGlobal();

  const [icon, setIcon] = useState('');
  const [title, setTitle] = useState('');

  const dataAlert = {
    success: {
      icon: 'check-circle-outline',
      title: 'Sucesso!',
    },
    error: {
      icon: 'close-circle-outline',
      title: 'Ops!',
    },
    warning: {
      icon: 'alert-circle-outline',
      title: 'Atenção!',
    },
    info: {
      icon: 'alert-circle-outline',
      title: 'Info!',
    },
  };

  useEffect(() => {
    setIcon(dataAlert[type].icon);
    setTitle(dataAlert[type].title);
  }, [type]);

  return (
    <S.Alert type={type} animationType="fade" transparent visible={visible}>
      <S.AlertContainer>
        <S.AlertContent>
          <S.AlertIcon name={icon} type={type} />
          <S.AlertTitle>{title}</S.AlertTitle>
          <S.AlertBody>{body}</S.AlertBody>
          <S.AlertButton
            onPress={() => setAlertModal({ visible: false })}
            type={type}
          >
            <S.AlertButtonText>Ok</S.AlertButtonText>
          </S.AlertButton>
        </S.AlertContent>
      </S.AlertContainer>
    </S.Alert>
  );
};

Alert.defaultProps = {
  type: 'info',
  body: 'Esse é um Alerta de exemplo!',
  visible: false,
};

Alert.propTypes = {
  type: PropTypes.string,
  body: PropTypes.string,
  visible: PropTypes.bool,
};

export default Alert;
