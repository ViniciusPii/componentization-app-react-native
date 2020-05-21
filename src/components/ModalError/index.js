import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';

const ModalError = ({ ...props }) => {
  const { type, text, visible } = props;
  const [name, setName] = useState('home');
  const [color, setColor] = useState('neutral');
  const [bgColor, setBgColor] = useState('neutral');
  const [title, setTitle] = useState('Modal');

  console.log(visible);

  useEffect(() => {
    const changeModal = () => {
      if (type === 'success') {
        setName('check-circle-outline');
        setColor('green');
        setBgColor('green');
        setTitle('Sucesso!');
      } else if (type === 'error') {
        setName('close-circle-outline');
        setColor('red');
        setBgColor('red');
        setTitle('Ops!');
      } else if (type === 'warning') {
        setName('alert-circle-outline');
        setColor('yellow');
        setBgColor('yellow');
        setTitle('Atenção!');
      }
    };
    changeModal();
  }, [type]);

  return (
    <S.Modal type={type} animationType="slide" transparent visible={visible}>
      <S.ModalContainer>
        <S.ModalContent>
          <Icon name={name} color={color} size={45} />
          <Text text={title} fs={28} />
          <Text text={text} />
          <Button text="Ok" onPress={() => {}} mb={0} bgColor={bgColor} />
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  );
};

ModalError.defaultProps = {
  type: 'none',
  text: 'Modal',
};

ModalError.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default ModalError;
