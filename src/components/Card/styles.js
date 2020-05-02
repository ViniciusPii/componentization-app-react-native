import styled from 'styled-components/native';

export const Card = styled.View`
  width: 90%;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.white};
  box-shadow: 1px 1px 5px ${({theme}) => theme.neutral600};
`;
