import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.blackOpacity};
`;
