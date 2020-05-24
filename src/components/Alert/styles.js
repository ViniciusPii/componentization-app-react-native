import styled from 'styled-components/native';

export const Alert = styled.Modal``;

export const AlertContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blackOpacity};
`;
