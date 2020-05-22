import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';
import Container from '../Container';

const Alert = ({ ...props }) => {
  const { type, text, visible, handleVisible } = props;

  const [name, setName] = useState('home');
  const [color, setColor] = useState('neutral');
  const [title, setTitle] = useState('Modal');

  const changeModal = () => {
    switch (type) {
      case 'success':
        setName('check-circle-outline');
        setColor('green');
        setTitle('Sucesso!');
        break;
      case 'error':
        setName('close-circle-outline');
        setColor('red');
        setTitle('Ops!');
        break;
      case 'warning':
        setName('alert-circle-outline');
        setColor('yellow');
        setTitle('Atenção!');
        break;
      default:
        setName('alert-circle-outline');
        setColor('yellow');
        setTitle('Atenção!');
        break;
    }
  };

  useEffect(() => {
    changeModal();
  }, [type]);

  return (
    <S.Modal type={type} animationType="fade" transparent visible={visible}>
      <S.ModalContainer>
        <Container bgColor="white" w="80%" p={15}>
          <Icon name={name} color={color} size={45} />
          <Text text={title} fs={28} />
          <Text text={text} fs={20} mb={30} />
          <Button text="Ok" onPress={handleVisible} mb={0} bgColor={color} />
        </Container>
      </S.ModalContainer>
    </S.Modal>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired,
};

export default Alert;
