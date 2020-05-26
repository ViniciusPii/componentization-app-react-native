import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

import { useGlobal } from '../../contexts/GlobalContext';

const Alert = ({ ...props }) => {
  const { type, body, visible } = props;

  const { setAlertModal } = useGlobal();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const changeAlert = () => {
    switch (type) {
      case 'success':
        setName('check-circle-outline');
        setTitle('Sucesso!');
        break;
      case 'error':
        setName('close-circle-outline');
        setTitle('Ops!');
        break;
      case 'warning':
        setName('alert-circle-outline');
        setTitle('Atenção!');
        break;
      default:
        setName('alert-circle-outline');
        setTitle('Info!');
        break;
    }
  };

  useEffect(() => {
    changeAlert();
  }, [type]);

  return (
    <S.Alert type={type} animationType="fade" transparent visible={visible}>
      <S.AlertContainer>
        <S.AlertContent>
          <S.AlertIcon name={name} type={type} />
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
