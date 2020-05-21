import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.blackOpacity};
`;

export const ModalContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 250px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
`;
