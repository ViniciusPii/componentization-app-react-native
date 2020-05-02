import styled from 'styled-components/native';

export const Card = styled.View`
  width: 90%;
  height: 150px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.white};
  box-shadow: 1px 1px 5px ${({theme}) => theme.gray300};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.neutral700};
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.neutral500};
`;
