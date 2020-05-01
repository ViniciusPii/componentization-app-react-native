import styled from 'styled-components/native';

export const Section = styled.SafeAreaView`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: ${({orientation}) => orientation};
`;
